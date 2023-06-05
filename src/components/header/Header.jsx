import React, { useEffect, useState } from 'react'
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns'
import { useNavigate } from "react-router-dom";
import { Autocomplete, Box, Slider, TextField } from '@mui/material';
import hotelAPI from '../../api/hotelAPI';

const top100Films = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Godfather: Part II',
    'The Dark Knight',
    '12 Angry Men',
    "Schindler's List",
    'Pulp Fiction',
];

const Header = () => {
    const navigate = useNavigate();
    const [destination, setDestination] = useState("");
    const [price, setPrice] = useState([2000, 3000]);

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

    function valuetext(value) {
        return `${value} USD`;
    }

    const handlePrice = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
        } else {
            setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
        }
    };

    const handleSearch = () => {
        navigate("/search", { state: { destination, price } });
    };

    return (
        <div className="header">
            <h1 className="headerTitle">FORGET BUSY WORK,<br /> START NEXT VACATION.</h1>
            <div className="headerSearch">
                <div className="headerSearchBar">
                    <div className="headerSearchItem destination">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={searchBarCities}
                            sx={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    className='headerSearchTextfield'
                                    label="Which city do you prefer?"
                                    // InputProps={{
                                    //     style: {
                                    //         fontFamily: 'Montserrat, sans-serif',
                                    //         borderRadius: '99px',
                                    //     },
                                    // }}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: '14px',
                                            paddingLeft: '1rem',
                                            fontFamily: 'Montserrat, sans-serif',
                                        }
                                    }}
                                    variant="standard"
                                />
                            )}
                            onInputChange={(event, value) => setDestination(value)}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <div className="headerSearchPriceTag">
                            <p className='headerSearchItemTitle'>Room price:</p>
                            <span className='headerSearchText'>{`${price[0]} USD - ${price[1]} USD`}</span>
                        </div>
                        <div className="headerSearchPriceSlider">
                            <Box width={300}>
                                <Slider
                                    getAriaLabel={() => 'Room price'}
                                    value={price}
                                    onChange={handlePrice}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    valueLabelFormat={valuetext}
                                    step={100}
                                    min={1000}
                                    max={5000}
                                    size='small'
                                    disableSwap
                                />
                            </Box>
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
        </div>
    )
}

export default Header