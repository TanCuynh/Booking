import { Button, message, Steps, theme } from 'antd';
import './bookingPage.css';
import { useState } from 'react';
import BookingStep1 from './components/booking1/BookingStep1';
import BookingStep2 from './components/booking2/BookingStep2';
import BookingStep3 from './components/booking3/BookingStep3';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleDone = () => {
        message.success('Processing complete!');
    }

    const [dataCategory, setDataCategory] = useState(location.state.dataCategoryDetail);
    const roomQuantity = location.state.room;
    const stayDuration = location.state.duration;

    const steps = [
        {
            title: 'Booking Information',
            content: <BookingStep1 data={dataCategory} rooms={roomQuantity} duration={stayDuration} />,
        },
        {
            title: 'Your Booking Bill',
            content: <BookingStep2 data={dataCategory} rooms={roomQuantity} duration={stayDuration} />,
        },
        {
            title: 'Booking Conplete',
            content: <BookingStep3 data={dataCategory} rooms={roomQuantity} duration={stayDuration} />,
        },
    ];

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
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
            </div>
        </div>
    );
};
export default BookingPage;