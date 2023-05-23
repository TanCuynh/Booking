import React, { useEffect, useMemo, useState } from "react";
import './HostCreateHotel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faBuilding, faCar, faPhone, faPaw, faPencil, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import L from 'leaflet';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useNavigate } from "react-router";
import ImageSelect from "./components/ImageSelect/ImageSelect";
import AddImage from "./components/AddImage/AddImage";
import { toast } from "react-hot-toast";


const markerIcon = L.icon({
	iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
});

const HostCreateHotel = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [openDate, setOpenDate] = useState(false);
	const [totalImg, setTotalImg] = useState(1);

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
	const [imgFiles, setImgFiles] = useState({ img_1: '' });
	const handleChangeImg = (e) => {
		const file = e.target.files[0];
		file.preview = URL.createObjectURL(file);
		setImgFiles({ ...imgFiles, [e.target.name]: file });
	}

	const handleRatingChange = (event, newValue) => {
		setValue(newValue);
	};
	const handleClear = () => {
		setImgFiles({ ...imgFiles, img_1: '' })
	}
	const handleClickAdd = () => {
		const temp = { ...imgFiles };
		if (Object.keys(temp).length >= 5) {
			toast.error('Qua 5 anh');
		} else {
			const addNew = `img_${Object.keys(temp).length + 1}`;
			temp[addNew] = '';
			setImgFiles(temp);
		}
	}
	const renderView = useMemo(() => {
		const temp = { ...imgFiles };
		const entries = Object.entries(temp);
		const slicedEntries = entries.slice(1);
		const updatedImgFiles = Object.fromEntries(slicedEntries);
		console.log(updatedImgFiles)
		if (Object.keys(updatedImgFiles).length > 0) {
			return (
				<>
					{ Object.entries(updatedImgFiles).map(([key, value]) => {
						if (parseInt(key.split('_')[1]) > 1) {
							return <>
								<ImageSelect key={ key } handleClear={ handleClear } border={ true } handleChange={ handleChangeImg } imgUrl={ value } />
							</>
						}
					}
					) }
					{
						Object.keys(updatedImgFiles).length < 4 && <AddImage handleClick={ handleClickAdd } />
					}


				</>
			)
		}
		else {
			console.log(1)
			return <AddImage handleClick={ handleClickAdd } />
		}
	}, [imgFiles])

	return (
		<div className="hotelDetailComponent">
			<div className="hotelDetailImg">

				<div className="hotelDetailImgLarge">
					<ImageSelect handleClear={ handleClear } handleChange={ handleChangeImg } imgUrl={ imgFiles.img_1?.preview } />
				</div>

				<div className="hotelDetailImgSmall">
					{
						renderView
					}
					{/* <ImageSelect handleClear={ handleClear } border={ true } handleChange={ handleChangeImg } imgUrl='https://cf.bstatic.com/xdata/images/hotel/max1280x900/409418368.jpg?k=579dbcfeac8598858a58d4e529aa9b81a0b58873433ff364716ec45d3b228673&o=&hp=1' /> */ }
					{

					}


					{/* <span onClick={ () => console.log(imgFiles) }>ssss</span> */ }
					{/* <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/409418397.jpg?k=41d6819de7f349f0ee02538d5a1a038259156dccaefd22d5fb1c7a994339335f&o=&hp=1" alt="hotelImg2" /> */ }
					{/* <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/409418368.jpg?k=579dbcfeac8598858a58d4e529aa9b81a0b58873433ff364716ec45d3b228673&o=&hp=1" alt="hotelImg3" /> */ }
					{/* <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/409418275.jpg?k=91693ba2206542fa332133eb5d2cb1ec096f2b91c0c14b747cc35c9b8186de11&o=&hp=1" alt="hotelImg4" /> */ }
					{/* <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/409418256.jpg?k=2658b42e78a63e74689ac5234e05cba716cf39be71dc152642c5756a4e7a4f78&o=&hp=1" alt="hotelImg5" /> */ }
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