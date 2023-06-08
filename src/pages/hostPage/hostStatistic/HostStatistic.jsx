import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import './hostStatistic.css'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const HostStatistic = () => {

    const navigate = useNavigate();
    const options = {
        title: {
            text: 'Total revenue statistic'
        },
        series: [{
            data: [1, 2.5, 2, 1.5, 3]
        }]
    }
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
                        <p className="hello-text">Hello, Happy Hotel</p>
                        <p className="time-join">Joined in 11/9/2023</p>
                        <button
                            className="btn-edit-profile"
                            onClick={handleClick}
                        >My Profile</button>
                    </div>
                </div>
                <div class="horizontal-vector"></div>
                <div className="hostStatisticContent">
                    <h3>Your Statistic</h3>
                    <div className="hostStatisticData">
                        <div className="hostStatisticDataItemContainer">
                            <div className="hostStatisticDataItem">
                                <h1 className='dataNumber'>557</h1>
                                <span className='dataTitle'>Total page visits</span>
                                <span className='dataPercentages'>+11.4% this week</span>
                            </div>
                        </div>
                        <div className="hostStatisticDataItemContainer">
                            <div className="hostStatisticDataItem">
                                <h1 className='dataNumber'>120</h1>
                                <span className='dataTitle'>Total rooms booked</span>
                                <span className='dataPercentages'>+11.1% this week</span>
                            </div>
                        </div>
                        <div className="hostStatisticDataItemContainer">
                            <div className="hostStatisticDataItem">
                                <h1 className='dataNumber'>6</h1>
                                <span className='dataTitle'>Total room cancelizations</span>
                                <span className='dataPercentages'>-50% this week</span>
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