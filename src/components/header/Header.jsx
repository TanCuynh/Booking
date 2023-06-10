import React, { useEffect, useState, useContext } from 'react'
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useNavigate } from "react-router-dom";
import { Autocomplete, Box, Slider, TextField } from '@mui/material';
import hotelAPI from '../../api/hotelAPI';
import { searchAPI } from '../../api/searchAPI';
import { APP_CONTEXT } from '../../App';

const Header = () => {
    const navigate = useNavigate();
    const context = useContext(APP_CONTEXT);
    const [destination, setDestination] = useState("");
    const [price, setPrice] = useState([200, 500]);

    const [searchBarCities, setSearchBarCities] = useState([]);

    const getSearchBarCities = async () => {
        const res = await hotelAPI.searchBarHotel();
        if (res.status === 200) {
            console.log("searchBarCities", res.data.data);
            setSearchBarCities(res.data.data);
        }
        else {
            setSearchBarCities([]);
            console.log("Error");
        }
    }
    useEffect(() => {
        getSearchBarCities();
    }, [])

    const minDistance = 100;

    const valuetext = (value) => {
        return `${value} USD`;
    }

    const handlePrice = (_event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
        } else {
            setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
        }
    };

    const handleSearch = async () => {
        const res = await searchAPI.searchByPriceAndCity(price[0], price[1], destination);
        if (res.status === 200) {
            console.log('search successful', res);
            context.setDataHotelSearch({ ...context.dataHotelSearch, searchData: res.data.data.data, destination: destination, price: price });
        } else {
            console.log('search failed', res);
        }
        navigate("/search");
    };

    return (
        <div className="header">
            <h1 className="headerTitle">FORGET BUSY WORK,<br /> START NEXT VACATION</h1>
            <div className="headerSearch">
                <div className="headerSearchBar">
                    <div className="headerSearchItem destination">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={ searchBarCities }
                            sx={ { width: 300 } }
                            renderInput={ (params) => (
                                <TextField
                                    { ...params }
                                    className='headerSearchTextfield'
                                    label="Which city do you prefer?"
                                    InputLabelProps={ {
                                        style: {
                                            fontSize: '14px',
                                            paddingLeft: '1rem',
                                            fontFamily: 'Montserrat, sans-serif',
                                        }
                                    } }
                                    variant="standard"
                                />
                            ) }
                            onInputChange={ (event, value) => setDestination(value) }
                        />
                    </div>
                    <div className="headerSearchItem">
                        <div className="headerSearchPriceTag">
                            <p className='headerSearchItemTitle'>Room price:</p>
                            <span className='headerSearchText'>{ `${price[0]} USD - ${price[1]} USD` }</span>
                        </div>
                        <div className="headerSearchPriceSlider">
                            <Box width={ 300 }>
                                <Slider
                                    getAriaLabel={ () => 'Room price' }
                                    value={ price }
                                    onChange={ handlePrice }
                                    valueLabelDisplay="auto"
                                    getAriaValueText={ valuetext }
                                    valueLabelFormat={ valuetext }
                                    step={ 10 }
                                    min={ 50 }
                                    max={ 1000 }
                                    size='small'
                                    disableSwap
                                />
                            </Box>
                        </div>
                    </div>
                    <div className="headerSearchBtn" onClick={ handleSearch }>
                        <FontAwesomeIcon
                            icon={ faMagnifyingGlass }
                            className='headerSearchBtnIcon'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header