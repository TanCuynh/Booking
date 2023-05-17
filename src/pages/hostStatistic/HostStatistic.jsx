import React from 'react'
import './hostStatistic.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const HostStatistic = () => {
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
                Siu
            </div>
        </div>
    )
}

export default HostStatistic