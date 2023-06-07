import { Button, message, Steps, theme } from 'antd';
import './bookingPage.css';
import { useState } from 'react';
import BookingStep1 from './components/booking1/BookingStep1';
import BookingStep2 from './components/booking2/BookingStep2';
const steps = [
    {
        title: 'Booking Information',
        content: <BookingStep1 />,
    },
    {
        title: 'Your Booking Bill',
        content: <BookingStep2 />,
    },
    {
        title: 'Booking Conplete',
        content: 'Booking Conplete',
    },
];
const BookingPage = () => {

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    return (
        <div className="bookingPage">

            <div className="bookingPageStep">
                <Steps current={current} items={items} />
            </div>


            <div className='bookingPageContent'>
                {steps[current].content}
            </div>

            <div className='bookingPageBtns'>
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}

                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}

                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
            </div>
        </div>
    );
};
export default BookingPage;