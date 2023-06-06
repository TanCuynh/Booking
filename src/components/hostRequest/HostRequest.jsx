import React from 'react'
import './hostRequest.css'
import { useNavigate } from 'react-router-dom';

const HostRequest = () => {

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/about");
    };
    return (
        <div className="hostRequest">
            <div className="hostRequestItems">
                <h3>Try Hosting With Us?</h3>
                <span>Earn extra just by renting your property...</span>
                <div className="hostRequestBtn" onClick={() => handleSearch()}>
                    <span>Become A Host</span>
                </div>
            </div>
            <div className="hostRequestTitle">
                <h1>WANNA BE A HOST?</h1>
            </div>
        </div>
    )
}

export default HostRequest