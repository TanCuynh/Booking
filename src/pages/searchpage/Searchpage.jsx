import React, { useContext, useEffect, useState } from 'react'
import './searchpage.css'
import { SearchedProperty } from '../../components'
import "leaflet/dist/leaflet.css"
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { amenitieOptions, bathroomFacilitieOptions, safetyHygieneOptions, starRatingOptions } from '../hostPage/hostCreateHotel/option'
import { APP_CONTEXT } from '../../App'

const Searchpage = () => {
    const context = useContext(APP_CONTEXT);
    const [destination, setDestination] = useState('');
    const [price, setPrice] = useState([]);
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        if (context?.dataHotelSearch?.searchData) {
            setSearchData(context.dataHotelSearch.searchData);
        }
        setDestination(context?.dataHotelSearch?.destination);
        setPrice(context?.dataHotelSearch?.price);
    }, [context?.dataHotelSearch])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="searchpage">
            <div className="searchContainer">
                <div className="searchFilters">
                    <div className="searchedInput">
                        <h1 className="searchedInputTitle">Search</h1>
                        <div className="searchedInputItem">
                            <label>City</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="searchedInputItem">
                            <label>Options</label>
                            <div className="searchedOptions">
                                <div className="searchedOptionItem">
                                    <span className="searchedOptionText">Minimum price <small>per night</small></span>
                                    <input type="number" className="searchedOptionInput" placeholder={price[0]} />
                                </div>
                                <div className="searchedOptionItem">
                                    <span className="searchedOptionText">Maximum price <small>per night</small></span>
                                    <input type="number" className="searchedOptionInput" placeholder={price[1]} />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="searchFilterDetails">
                        <div className="searchFilterDetailsTitle">
                            <span>Filtering about:</span>
                        </div>
                        <div className="searchFilterItem">
                            <span>Star Rating</span>
                            <FormGroup>
                                {
                                    starRatingOptions.map((ele) => {
                                        return (
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        sx={{
                                                            color: '#484848',
                                                            '&.Mui-checked': {
                                                                color: '#4173D8',
                                                            },
                                                            transform: 'scale(0.75)',
                                                        }}
                                                    />
                                                }
                                                label={
                                                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', fontWeight: '400' }}>
                                                        {ele.label}
                                                    </span>
                                                }
                                            />
                                        )
                                    })
                                }
                            </FormGroup>
                        </div>
                        <div className="searchFilterItem">
                            <span>Amenities</span>
                            <FormGroup>
                                {
                                    amenitieOptions.map((ele) => {
                                        return (
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        sx={{
                                                            color: '#484848',
                                                            '&.Mui-checked': {
                                                                color: '#4173D8',
                                                            },
                                                            transform: 'scale(0.75)',
                                                        }}
                                                    />
                                                }
                                                label={
                                                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', fontWeight: '400' }}>
                                                        {ele.label}
                                                    </span>
                                                }
                                            />
                                        )
                                    })
                                }
                            </FormGroup>
                        </div>
                        <div className="searchFilterItem">
                            <span>Bathroom facilities</span>
                            <FormGroup>
                                {
                                    bathroomFacilitieOptions.map((ele) => {
                                        return (
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        sx={{
                                                            color: '#484848',
                                                            '&.Mui-checked': {
                                                                color: '#4173D8',
                                                            },
                                                            transform: 'scale(0.75)',
                                                        }}
                                                    />
                                                }
                                                label={
                                                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', fontWeight: '400' }}>
                                                        {ele.label}
                                                    </span>
                                                }
                                            />
                                        )
                                    })
                                }
                            </FormGroup>
                        </div>
                        <div className="searchFilterItem">
                            <span>Safety and Hygiene</span>
                            <FormGroup>
                                {
                                    safetyHygieneOptions.map((ele) => {
                                        return (
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        sx={{
                                                            color: '#484848',
                                                            '&.Mui-checked': {
                                                                color: '#4173D8',
                                                            },
                                                            transform: 'scale(0.75)',
                                                        }}
                                                    />
                                                }
                                                label={
                                                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', fontWeight: '400' }}>
                                                        {ele.label}
                                                    </span>
                                                }
                                            />
                                        )
                                    })
                                }
                            </FormGroup>
                        </div>
                    </div>
                </div>
                <div className="searchResults">
                    <div className="searchedResultsCounts">
                        <h3 className='resultCount'>{searchData?.length}</h3>
                        <span>results found</span>
                    </div>
                    <div className="searchResultsItems">
                        {
                            searchData?.map((hotel, index) => {
                                return (
                                    <SearchedProperty data={hotel} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchpage