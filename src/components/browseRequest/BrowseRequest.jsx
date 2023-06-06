import React, { useState } from 'react'
import './browseRequest.css'
import { useNavigate } from 'react-router-dom';

const BrowseRequest = () => {

    const navigate = useNavigate();

    const [destination, setDestination] = useState("");
    const [price, setPrice] = useState([2000, 3000]);

    const handleSearch = () => {
        navigate("/search", { state: { destination, price } });
    };

    return (
        <div className="browseRequest">
            <div className="browseRequestItems">
                <h3>Browse For More Properties</h3>
                <span>Explore properties by their categories/types...</span>
                <div className="browseRequestBtn" onClick={() => handleSearch()}>
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