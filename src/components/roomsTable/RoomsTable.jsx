import React, { useContext, useEffect, useState } from 'react'
import './roomsTable.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faUser } from '@fortawesome/free-solid-svg-icons'
import RoomDetail from '../roomDetail/RoomDetail'
import { APP_CONTEXT } from '../../App'
import categoryAPI from '../../api/categoryAPI'

const getDateFormat = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = ('0' + (newDate.getMonth() + 1)).slice(-2);
    const day = ('0' + newDate.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
}

const RoomsTable = ({ date, notShowPrice, dataCategory, emptyRoom, idHotel, dateParams }) => {
    const context = useContext(APP_CONTEXT);
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
    const handleClickShow = () => {
        openPopup(roomQuantity);
        context.setSelectCategory(dataCategory.id)
    }

    const closePopup = () => {
        // console.log('111', date, notShowPrice, dataCategory)
        setShowPrices(false);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
    });

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
                    max={emptyRoom?.length}
                    value={roomQuantity}
                    onChange={(e) => setRoomQuantity(e.target.value)}
                    className='roomTableRoomQuantityNumber'
                />
                {roomQuantityError && <div className="roomQuanityError">{roomQuantityError}</div>}
            </div>
            <div className="roomsTableShowPricesBtnContainer">
                <button
                    className="roomsTableShowPriceBtn"
                    onClick={handleClickShow}
                    disabled={notShowPrice}
                >
                    <span>Show Price</span>
                </button>
            </div>

            {showPrices &&
                <div className="roomDetailModalContainer" onClick={closePopup}>
                    <div className="roomDetailModal" onClick={(e) => e.stopPropagation()}>
                        <RoomDetail room={roomQuantity} date={bookDate} categoryId={dataCategory?.id} onClose={closePopup} emptyRoom={emptyRoom} idHotel={idHotel} dateParams={dateParams} />
                    </div>
                </div>}
        </div>
    )
}

export default RoomsTable