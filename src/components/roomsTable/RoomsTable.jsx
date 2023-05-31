import React, { useState } from 'react'
import './roomsTable.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faChild, faUser } from '@fortawesome/free-solid-svg-icons'
import RoomDetail from '../roomDetail/RoomDetail'

const RoomsTable = () => {
    const [showPrices, setShowPrices] = useState(false);

    const openPopup = () => {
        setShowPrices(true);
        document.body.style.overflow = 'hidden';
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
                        <h3>Standard Double Room</h3>
                    </div>
                    <div className="roomsTableRoomTypeDesc">
                        <span>2 queen beds</span>
                        <FontAwesomeIcon icon={faBed} />
                    </div>
                </div>
            </div>
            <div className="roomsTableSleepsContainer">
                <div className="roomsTableSleeps">
                    <div className="roomsTableSleepsItem">
                        <span>2 adults</span>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="roomsTableSleepsItem">
                        <span>2 children</span>
                        <FontAwesomeIcon icon={faChild} />
                    </div>
                </div>
            </div>
            <div className="roomsTableRoomQuantity">
                <input type="number" min={0} max={4} className='roomTableRoomQuantityNumber'/>
            </div>
            <div className="roomsTableShowPricesBtnContainer">
                <div className="roomsTableShowPriceBtn" onClick={openPopup}>
                    <span>Show Price</span>
                </div>
            </div>

            {showPrices &&
                <div className="roomDetailModalContainer" onClick={closePopup}>
                <div className="roomDetailModal" onClick={(e) => e.stopPropagation()}>
                    <RoomDetail onClose={closePopup} />
                </div>
            </div>}
        </div>
    )
}

export default RoomsTable