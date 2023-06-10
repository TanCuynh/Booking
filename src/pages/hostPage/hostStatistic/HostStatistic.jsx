import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './hostStatistic.css'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { APP_CONTEXT } from '../../../App';
import hotelAPI from '../../../api/hotelAPI';

const HostStatistic = () => {

    const navigate = useNavigate();
    const context = useContext(APP_CONTEXT);
    const options = {
        title: {
            text: 'Total revenue statistic'
        },
        series: [{
            data: [1, 2.5, 2, 1.5, 3]
        }]
    }
    const [formattedCreatedAt, setFormattedCreatedAt] = useState('');

    const [showAvatar, setAvatar] = useState(false);
    const openPopup = () => {
        setAvatar(true);
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setAvatar(false);
        document.body.style.overflow = 'auto';
    };
    const handleClick = () => {
        navigate('/user/myprofile');
    }

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        // Xử lý file hình ảnh ở đây nè cu(chắc vậy)
        console.log('Đã chọn file:', file);
    };

    const chooseaphoto = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.addEventListener('change', handleFileUpload);
        fileInput.click();
    };

    const [dataStatistic, setDataStatistic] = useState({});

    const getHotelStatistic = async () => {
        const res = await hotelAPI.getStatistic();
        if (res.status === 200) {
            // console.log("superData", res.data.data);
            setDataStatistic(res.data.data);
        } else {
            console.log("Error", res);
        }
    }

    useEffect(() => {
        getHotelStatistic();

        const formatDate = (dateString) => {
            const date = new Date(dateString);
            const formattedDate = date.toLocaleDateString('en-GB', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
            return formattedDate;
        };

        setFormattedCreatedAt(formatDate(context.user.created_at));
    }, [context.user.created_at])

    return (
        <div className="hostStatisticContainer">
            <div className='profile-layout'>
                <div className="hostStatisticInfo">
                    <div className="hostAccountAvt">
                        {showAvatar &&
                            <div className="account-img-modal-layout" onClick={closePopup}>
                                <div className="account-img-modal" onClick={(e) => e.stopPropagation()}>
                                    <div className='AccountImg'></div>
                                </div>
                            </div>
                        }
                        <div className="hostAccountImg" onClick={openPopup}></div>
                        <div className="hostAccountChangeImg">
                            <span onClick={chooseaphoto}>Upload Photo</span>
                        </div>
                    </div>
                    <div className="profilehotel-container">
                        <p className="hello-text">Hello, {context.user.name}</p>
                        <p className="time-join">Joined in {formattedCreatedAt}</p>
                        <button
                            className="btn-edit-profile"
                            onClick={handleClick}
                        >My Profile</button>
                    </div>
                </div>
                <div className="horizontal-vector"></div>
                <div className="hostStatisticContent">
                    <h3>Your Statistic</h3>
                    <div className="hostStatisticData">
                        <div className="hostStatisticDataItemContainer">
                            <div className="hostStatisticDataItem">
                                <h1 className='dataNumber'>{dataStatistic?.Booked}</h1>
                                <span className='dataTitle'>Reservations</span>
                                {/* <span className='dataPercentages'>+11.4% this week</span> */}
                            </div>
                        </div>
                        <div className="hostStatisticDataItemContainer">
                            <div className="hostStatisticDataItem">
                                <h1 className='dataNumber'>{dataStatistic?.Rejected}</h1>
                                <span className='dataTitle'>Reservations rejected</span>
                                {/* <span className='dataPercentages'>+11.1% this week</span> */}
                            </div>
                        </div>
                        <div className="hostStatisticDataItemContainer">
                            <div className="hostStatisticDataItem">
                                <h1 className='dataNumber'>{dataStatistic?.Pending}</h1>
                                <span className='dataTitle'>Reservations pending</span>
                                {/* <span className='dataPercentages'>-50% this week</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="hostStatisticChartContainer">
                        <HighchartsReact
                            className="hostStatisticChart"
                            highcharts={Highcharts}
                            options={options}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostStatistic