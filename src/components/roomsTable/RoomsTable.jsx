import React, { useState } from 'react'
import './roomsTable.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faUser } from '@fortawesome/free-solid-svg-icons'
import RoomDetail from '../roomDetail/RoomDetail'

const RoomsTable = ({ date, notShowPrice, dataCategory }) => {
    const [roomQuantity, setRoomQuantity] = useState(0);
    const [showPrices, setShowPrices] = useState(false);
    const [bookDate, setBookDate] = useState(date);

    const [roomQuantityError, setRoomQuantityError] = useState('');

    const openPopup = (value) => {
        if (value == 0) {
            setRoomQuantityError("You must choose at least 1 room");
            setShowPrices(false);
        } else {
            setRoomQuantityError("");
            setShowPrices(true);
            document.body.style.overflow = 'hidden';
        }
    };

    const closePopup = () => {
        setShowPrices(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="roomsTableContainer">
            <div className="roomsTableRoomTypeContainer">
                <div className="roomsTableRoomType">
                    <div className="roomsTableRoomTypeTitle">
                        <h3>{dataCategory?.name}</h3>
                    </div>
                    <div className="roomsTableRoomTypeDesc">
                        {dataCategory.bed === 1 ? (
                            <>
                                <span>{dataCategory?.bed} bed</span>
                                <FontAwesomeIcon icon={faBed} />
                            </>
                        ) : (
                            <>
                                <span>{dataCategory?.bed} beds</span>
                                <FontAwesomeIcon icon={faBed} />
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="roomsTableSleepsContainer">
                <div className="roomsTableSleeps">
                    <div className="roomsTableSleepsItem">
                        {dataCategory.max_people === 1 ? (
                            <>
                                <span>{dataCategory?.max_people} person</span>
                                <FontAwesomeIcon icon={faUser} />
                            </>
                        ) : (
                            <>
                                <span>{dataCategory?.max_people} people</span>
                                <FontAwesomeIcon icon={faUser} />
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="roomsTableRoomQuantity">
                <input
                    type="number"
                    min={0}
                    max={4}
                    value={roomQuantity}
                    onChange={(e) => setRoomQuantity(e.target.value)}
                    className='roomTableRoomQuantityNumber'
                />
                {roomQuantityError && <div className="roomQuanityError">{roomQuantityError}</div>}
            </div>
            <div className="roomsTableShowPricesBtnContainer">
                <button
                    className="roomsTableShowPriceBtn"
                    onClick={() => openPopup(roomQuantity)}
                    disabled={notShowPrice}
                >
                    <span>Show Price</span>
                </button>
            </div>

            {showPrices &&
                <div className="roomDetailModalContainer" onClick={closePopup}>
                    <div className="roomDetailModal" onClick={(e) => e.stopPropagation()}>
                        <RoomDetail room={roomQuantity} date={bookDate} categoryId={dataCategory?.id} onClose={closePopup} />
                    </div>
                </div>}
        </div>
    )
}

export default RoomsTable