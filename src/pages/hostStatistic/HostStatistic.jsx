import React from 'react'
import './hostStatistic.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const HostStatistic = () => {

    const options = {
        title: {
            text: 'Total revenue statistic'
        },
        series: [{
            data: [1, 2.5, 2, 1.5, 3]
        }]
    }

    return (
        <div className="hostStatisticContainer">
            <div className="hostStatisticInfo">
                <div className="hostAccountAvt">
                    <div className="hostAccountImg"></div>
                    <div className="hostAccountChangeImg">
                        <span>Upload Photo</span>
                    </div>
                </div>

                <div className="hostAccountVerify">
                    <h3>Identity Verification</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                </div>

                <div className="hostAccountVerifyConfirmContainer">
                    <h3>John Doe - Host</h3>
                    <div className="hostAccountVerifyConfirm">
                        <FontAwesomeIcon icon={faCheck} />
                        <span>Email Confirm</span>
                    </div>
                    <div className="hostAccountVerifyConfirm">
                        <FontAwesomeIcon icon={faCheck} />
                        <span>Email Confirm</span>
                    </div>
                </div>
            </div>
            <div className="hostStatisticContent">
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
    )
}

export default HostStatistic