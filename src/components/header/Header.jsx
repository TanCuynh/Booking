import React, { useState } from 'react'
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [destination, setDestination] = useState("");

    const [openDate, setOpenDate] = useState(false);

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);

    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    };

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/search", { state: { destination, date, options } });
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
                    <div className="headerSearchItem" id="headerSearchCalendar">
                        <p className='headerSearchItemTitle'>Check in - Check out date</p>
                        <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate &&
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='date'
                                minDate={new Date()}
                            />}
                    </div>
                    <div className="headerSearchItem">
                        <p className='headerSearchItemTitle'>Guests</p>
                        <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adults · ${options.children} children · ${options.room} rooms`}</span>
                        {openOptions &&
                            <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adults</span>
                                    <div className="optionCounter">
                                        <button disabled={options.adult <= 1} className="optionCounterBtn" onClick={() => handleOption("adult", "d")}>-</button>
                                        <span className="optionCounterNumber">{options.adult}</span>
                                        <button className="optionCounterBtn" onClick={() => handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">
                                        <button disabled={options.children <= 0} className="optionCounterBtn" onClick={() => handleOption("children", "d")}>-</button>
                                        <span className="optionCounterNumber">{options.children}</span>
                                        <button className="optionCounterBtn" onClick={() => handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Rooms</span>
                                    <div className="optionCounter">
                                        <button disabled={options.room <= 1} className="optionCounterBtn" onClick={() => handleOption("room", "d")}>-</button>
                                        <span className="optionCounterNumber">{options.room}</span>
                                        <button className="optionCounterBtn" onClick={() => handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>
                        }
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