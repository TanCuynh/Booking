import React, { useRef, useState } from 'react'
import './searchpage.css'
import { Footer, Navbar, SearchedProperty } from '../../components'
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'

const Searchpage = () => {

    const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
    const ZOOM_LEVEL = 16;
    const mapRef = useRef();

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);

    return (
        <div className="searchpage">
            <div className="searchContainer">
                <div className="searchFilters">
                    <div className="searchedInput">
                        <h1 className="searchedInputTitle">Search</h1>
                        <div className="searchedInputItem">
                            <label>Destination</label>
                            <input placeholder={ destination } type="text" />
                        </div>
                        <div className="searchedInputItem">
                            <label>Check-in Date</label>
                            <span onClick={ () => setOpenDate(!openDate) }>{ `${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}` }</span>
                            { openDate && (
                                <DateRange
                                    onChange={ item => setDate([item.selection]) }
                                    minDate={ new Date() }
                                    ranges={ date }
                                />
                            ) }
                        </div>
                        <div className="searchedInputItem">
                            <label>Options</label>
                            <div className="searchedOptions">
                                <div className="searchedOptionItem">
                                    <span className="searchedOptionText">Minimum price <small>per night</small></span>
                                    <input type="number" className="searchedOptionInput" />
                                </div>
                                <div className="searchedOptionItem">
                                    <span className="searchedOptionText">Maximum price <small>per night</small></span>
                                    <input type="number" className="searchedOptionInput" />
                                </div>
                                <div className="searchedOptionItem">
                                    <span className="searchedOptionText">Adult </span>
                                    <input type="number" min={ 1 } className="searchedOptionInput" placeholder={ options.adult } />
                                </div>
                                <div className="searchedOptionItem">
                                    <span className="searchedOptionText">Children </span>
                                    <input type="number" min={ 0 } className="searchedOptionInput" placeholder={ options.children } />
                                </div>
                                <div className="searchedOptionItem">
                                    <span className="searchedOptionText">Room </span>
                                    <input type="number" min={ 1 } className="searchedOptionInput" placeholder={ options.room } />
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
                            <span>Popular filters</span>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="5 stars" id="op1" />
                                <label for="op1"> 5 stars</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Indoor swimming pool" id="op2" />
                                <label for="op2"> Indoor swimming pool</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Spa & Wellness Center" id="op3" />
                                <label for="op3"> Spa & Wellness Center</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Spa/ Wellness package" id="op4" />
                                <label for="op4"> Spa / Wellness Package</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Private beach area" id="op5" />
                                <label for="op5"> Private beach area</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Hot spring bath" id="op6" />
                                <label for="op6"> Hot spring bath</label>
                            </div>
                        </div>
                        <div className="searchFilterItem">
                            <span>Star Rating</span>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="1 Star" id="op7" />
                                <label for="op7"> 1 Star</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="2 Stars" id="op8" />
                                <label for="op8"> 2 Stars</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="3 Stars" id="op9" />
                                <label for="op9"> 3 Stars</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="4 Stars" id="op10" />
                                <label for="op10"> 4 Stars</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="5 Stars" id="op11" />
                                <label for="op11"> 5 Stars</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Not rated" id="op12" />
                                <label for="op12"> Not rated</label>
                            </div>
                        </div>
                        <div className="searchFilterItem">
                            <span>Convenient</span>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Parking" id="op13" />
                                <label for="op13"> Parking</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Restaurant" id="op14" />
                                <label for="op14"> Restaurant</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Pets allowed" id="op15" />
                                <label for="op15"> Pets allowed</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Room service" id="op16" />
                                <label for="op16"> Room service</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="24-hour front desk" id="op17" />
                                <label for="op17"> 24-hour front desk</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Free Wi-Fi" id="op18" />
                                <label for="op18"> Free Wi-Fi</label>
                            </div>
                        </div>
                        <div className="searchFilterItem">
                            <span>Disabled facilities (room)</span>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Completely located on the ground floor" id="op19" />
                                <label for="op19"> Completely located on the ground floor</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Upper floors go up by elevator" id="op20" />
                                <label for="op20"> Upper floors go up by elevator</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Toilets for the disabled" id="op21" />
                                <label for="op21"> Toilets for the disabled</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Accessible bathroom for the disabled" id="op22" />
                                <label for="op22"> Accessible bathroom for the disabled</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Shower room" id="op23" />
                                <label for="op23"> Shower room</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="High toilet" id="op24" />
                                <label for="op24"> High toilet</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Lower washbasin" id="op25" />
                                <label for="op25"> Lower washbasin</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Emergency cord in the bathroom" id="op26" />
                                <label for="op26"> Emergency cord in the bathroom</label>
                            </div>
                            <div className="searchFilterItemOption">
                                <input type="checkbox" value="Shower chair" id="op27" />
                                <label for="op27"> Shower chair</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searchResults">
                    <div className="searchedResultsQuantity">
                        <span>10 results found</span>
                    </div>
                    <div className="searchResultsItem">
                        <div className="searchResultsCol">
                            <SearchedProperty />
                            <SearchedProperty />
                            <SearchedProperty />
                            <SearchedProperty />
                            <SearchedProperty />
                        </div>
                        <div className="searchResultsCol">
                            <SearchedProperty />
                            <SearchedProperty />
                            <SearchedProperty />
                            <SearchedProperty />
                            <SearchedProperty />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchpage