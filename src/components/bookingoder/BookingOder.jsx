import React from "react";
import './bookingoder.css'

const BookingOder = () => {
    const name = "Fully Furnished Apartment";
    const checkin = "12 Mar 2021";
    const duration = 3;
    const guests = 2;
    const price = 1000;

    return (
        <div style={{
            width: '100%',
            height: '94px',
            marginTop: '20px',
            marginBottom: '10px',
            display: 'flex',
            flexDirection: 'row',
        }}>
            <img style={{
                height: '94px',
                width: '107px',
                borderRadius: '5px',
            }} src="https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_640.jpg" alt="" />
            <div style={{
                marginLeft: '15px',
                width: '85%',
                height: '100%',
            }}>
                <p style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    marginTop: '10px',
                }}> {name} </p>

                <span style={{

                }}>Check-in: {checkin}      </span>
                <span style={{
                    lineHeight: '2.0',
                    marginLeft: '80px'
                }}>Duration: {duration} nights</span>
                <span style={{
                    marginLeft: '80px'
                }}>Guests: {guests} Adults</span>
                <p style={{
                    fontWeight: '700',
                    marginTop: '10px'
                }}>Price: $ {price} USD</p>
                <div style={{
                    color: '#fff',
                    backgroundColor: '#43C28C',
                    width:' 193px',
                    height: '38px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    top: '-60px',
                    left: '900px',
                }}>
                    <p>Accepted</p>
                </div>
            </div>
        </div>
    );
}

export default BookingOder;