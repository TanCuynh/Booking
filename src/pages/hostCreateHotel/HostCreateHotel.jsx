import React, { useState } from "react";
import './HostCreateHotel.css';
import { RoomsTable } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor, faBath, faBed, faBuilding, faCar, faGamepad, faMagnifyingGlass, faPhone, faPaw, faSnowflake, faStar, faTv, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck, faHeart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import { LinearProgress, Rating } from '@mui/material'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import L from 'leaflet';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useNavigate } from "react-router";

const markerIcon = L.icon({
	iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
});

const HostCreateHotel = () => {
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
		navigate("/search", { state: { date, options } });
	};



	const [value, setValue] = React.useState(100);

	const handleRatingChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div className="hotelDetailComponent">
			<div className="hotelDetailImg">
				<div className="hotelDetailImgLarge">
					<img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/213244036.jpg?k=4d029a6a277dda491d6c94398932e9f7ece6e3c76fa5062131ca354c4ca8edc2&o=&hp=1" alt="hotelImg1" />
				</div>
				<div className="hotelDetailImgSmall">
					<img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/409418397.jpg?k=41d6819de7f349f0ee02538d5a1a038259156dccaefd22d5fb1c7a994339335f&o=&hp=1" alt="hotelImg2" />
					<img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/409418368.jpg?k=579dbcfeac8598858a58d4e529aa9b81a0b58873433ff364716ec45d3b228673&o=&hp=1" alt="hotelImg3" />
					<img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/409418275.jpg?k=91693ba2206542fa332133eb5d2cb1ec096f2b91c0c14b747cc35c9b8186de11&o=&hp=1" alt="hotelImg4" />
					<img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/409418256.jpg?k=2658b42e78a63e74689ac5234e05cba716cf39be71dc152642c5756a4e7a4f78&o=&hp=1" alt="hotelImg5" />
				</div>
			</div>
			<div className="hotelDetail">
				<div className="hotelDetailContent">
					<div className="hotelDetailTitle">
						<div className="hotelDetailTitleContent">
							<h3>Well Furnished Apartment</h3>
							<span>100 Smart Street, LA, USA</span>
						</div>
						<div className="hotelDetailAction">
							<FontAwesomeIcon icon={ faHeart } />
							<FontAwesomeIcon icon={ faShareFromSquare } />
						</div>
					</div>
					<div className="hotelDetailAmenities">
						<div className="hotelDetailAmenity">
							<FontAwesomeIcon icon={ faBed } className='hotelDetailAmenityIcon' />
							<span>3 Bedrooms</span>
						</div>
						<div className="hotelDetailAmenity">
							<FontAwesomeIcon icon={ faBath } className='hotelDetailAmenityIcon' />
							<span>2 Bathrooms</span>
						</div>
						<div className="hotelDetailAmenity">
							<FontAwesomeIcon icon={ faCar } className='hotelDetailAmenityIcon' />
							<span>3 Cars/2 Bikes</span>
						</div>
						<div className="hotelDetailAmenity">
							<FontAwesomeIcon icon={ faPaw } className='hotelDetailAmenityIcon' />
							<span>0 Pets Allowed</span>
						</div>
					</div>
					<div className="hotelDetailDesc">
						<h3>Apartment Description</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
					<div className="hotelDetailMapLocation">
						<MapContainer center={ [16.06827770014092, 108.2009288146462] } zoom={ 18 } scrollWheelZoom={ false } style={ { height: '400px', width: '100%' } }>
							<TileLayer
								attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							<Marker position={ [16.06827770014092, 108.2009288146462] } icon={ markerIcon }>
								<Popup>
									The hotel's location.
								</Popup>
							</Marker>
							{/* <MapClickHandler /> */ }
						</MapContainer>
					</div>

				</div>
				<div className="hotelDetailReserve">
					<div className="reserveBox">
						<div className="reserveBoxPrice">
							<h3>$ 1000 - $ 3000</h3>
						</div>
						<hr className='thin-line' />
						<div className="reserveBoxPriceDesc">
							<span>Short Period: $ 1000</span>
							<span>Medium Period: $ 2000</span>
							<span>Long Period: $ 3000</span>
						</div>
						<div className="reserveBtnComponent">
							<div className="reserveBtn">
								<span>Reserve Now</span>
							</div>
						</div>
						<div className="reserveBoxFuncs">
							<div className="reserveBoxFunc">
								<FontAwesomeIcon icon={ faBuilding } className='reserveBoxIcon' />
								<span>Property Inquiry</span>
							</div>
							<div className="reserveBoxFunc">
								<FontAwesomeIcon icon={ faPhone } className='reserveBoxIcon' />
								<span>Contact Host</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default HostCreateHotel;