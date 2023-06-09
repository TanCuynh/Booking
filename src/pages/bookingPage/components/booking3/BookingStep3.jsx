import React, { useState } from 'react';
import './bookingstep3.css';
import { useNavigate } from 'react-router';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from 'react-hot-toast';
import { paymentAPI } from '../../../../api/paymentAPI';
const urlImg = 'https://s3-alpha-sig.figma.com/img/5f55/d09f/18aadee9cb62e55adf11ff1b4186dc1d?Expires=1685923200&Signature=MLwlXmLHDEq5rjz6eGEqW79zh7FvHiroceVMC3AbNE0DtJcdYi0GDnxUAfRrpPPWlZNW9ZPcTi9UZ6bOHwASNfSWl4iJCVCI6fc~n6TS73Zp~PCJS2zVs-PwwiiixVQJ9~4RWdcLxYGkzxCcuu9a~u2uTLAYTO16yIiPugb5yW~4ZDuTz-iYYbsnmBYnjlFBh9XSplF4lSbDKz6vuh5GvSQlLfIP0GJkWNyyEnU8Z73T-Bmci8IP2qxWBI3rujutE8PHOOIV~OMJOmL8CxXxsUKG5uEuI~NGl8mxmdp2b6JAYM9pHQlsqApzaB8g6WdsYlK-ef7l-Qn3PmGsdOTTuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
const BookingStep3 = (data) => {
    const [success, setSuccess] = useState(false)
    const [orderId, setOrderId] = useState(false)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: `You have successfully paid for bill`,
                    amount: {
                        currency_code: 'USD',
                        value: 1,
                    },
                },
            ],
            application_context: {
                shipping_preference: 'NO_SHIPPING'
            }
        })
            .then((orderID) => {
                setOrderId(orderID)
                return orderID
            })
    }
    const onError = () => {
        toast.error("An error occured with your payment")
    }
    const updatePayment = async () => {
        const bookingId = localStorage.getItem('bookingId');
        const res = await paymentAPI.updatePayment(bookingId, { payment_status: 1 })
        if (res.status === 200) {
            toast.success("Your payment has been updated")
            console.log('success payment', res);
            navigate('/');
        } else {
            toast.error("Update payment fails");
            console.log('error payment', res);
        }
    }
    const onApprove = (data, actions) => {
        updatePayment()
        return actions.order.capture().then(function () {
            setSuccess(true);
        })
    }
    return (
        <div className='paypalContainer'>
            <PayPalScriptProvider
                options={{
                    "client-id": "AT3vWwXuO1R3qJ337XKSQyBN7Ty-Bp_CbHWI6txcr1wvkVDqROUe2JdQ4msfxdsXKiQWDHbZC55XXpQ4"
                }}
            >
                <h3>Payment Bill</h3>
                <h2>${data.data.price} USD</h2>
                <PayPalButtons style={{ layout: 'vertical' }} createOrder={createOrder}
                    onApprove={onApprove} onError={onError} />

                {success ? (
                    <h5>Your Payment has been done successfully please check email</h5>
                ) : <h5>Payment is pending</h5>}

            </PayPalScriptProvider>

        </div>
    );
}

export default BookingStep3;