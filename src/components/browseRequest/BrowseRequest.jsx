import React, { useState } from 'react'
import './browseRequest.css'
import { useNavigate } from 'react-router-dom';

const BrowseRequest = () => {

    const handleScroll = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="browseRequest">
            <div className="browseRequestItems">
                <h3>Browse For More Hotels</h3>
                <span>Explore properties by their categories/types...</span>
                <div className="browseRequestBtn" onClick={() => handleScroll()}>
                    <span>Find A Property</span>
                </div>
            </div>
            <div className="browseRequestTitle">
                <h1>STILL CAN'T FIND IT?</h1>
            </div>
        </div>
    )
}

export default BrowseRequest