import React, { useState } from 'react'
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns'
import { useNavigate } from "react-router-dom";
import { Box, Slider } from '@mui/material';



const Header = () => {
    function valuetext(value) {
        return `${value} USD`;
    }

    const minDistance = 10;

    const [destination, setDestination] = useState("");

    const [price, setPrice] = useState([20, 37]);

    const handlePrice = (event, newValue, activeThumb) => {
        // setPrice(20,100);
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
        } else {
            setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
        }
    };

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/search", { state: { destination, price } });
    };

    return (
        <div className="header">
            <h1 className="headerTitle">FORGET BUSY WORK,<br /> START NEXT VACATION.</h1>
            <div className="headerSearch">
                <div className="headerSearchBar">
                    <div className="headerSearchItem">
                        <p className='headerSearchItemTitle'>Location</p>
                        <input
                            type="text"
                            placeholder="Which city do you prefer?"
                            className="headerSearchInput"
                            onChange={e => setDestination(e.target.value)}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <div className="headerSearchPriceTag">
                            <p className='headerSearchItemTitle'>Price:</p>
                            <span className='headerSearchText'>100USD - 500USD</span>
                        </div>
                        <div className="headerSearchPriceSlider">
                            <Slider
                                getAriaLabel={() => 'Minimum distance'}
                                value={price}
                                onChange={handlePrice}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                            />
                        </div>
                    </div>
                    <div className="headerSearchBtn" onClick={() => handleSearch()}>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className='headerSearchBtnIcon'
                        />
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default Header