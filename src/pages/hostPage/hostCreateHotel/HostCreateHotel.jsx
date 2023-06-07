import React, { useEffect, useMemo, useState } from "react";
import './HostCreateHotel.css';
import { TextField, Checkbox, FormGroup, FormControlLabel, TextareaAutosize } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faBuilding, faCar, faPhone, faPaw, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import L from 'leaflet';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import ImageSelect from "./components/ImageSelect/ImageSelect";
import AddImage from "./components/AddImage/AddImage";
import { toast } from "react-hot-toast";
import { amenitieOptions, bathroomFacilitieOptions, directionsViewOptions, safetyHygieneOptions } from "./option";
import { pink } from '@mui/material/colors';
import FileUploader from "../../../firebase/FileUploader";



const markerIcon = L.icon({
	iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneNumberRegex = /^[0-9]{10}$/;

const HostCreateHotel = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	// const [state, setState] = useState({
	//   gilad: true,
	//   jason: false,
	//   antoine: false,
	// });

	const [edit, setEdit] = useState(false);

	const [data, setData] = useState({ name: '', amenities: '', size: 0, bed: 0, bathroomFacilities: '', directionsView: '', price: 0, maxPeople: 0, isSmoking: 0, description: '' });

	const [imgFiles, setImgFiles] = useState([{ img_1: {} }]);

	const handleChangeImg = (e) => {
		const file = e.target.files[0];
		const index = parseInt(e.target.name.split('_')[1]) - 1;
		file.preview = URL.createObjectURL(file);
		const temp = [...imgFiles];
		temp[index][e.target.name] = file;
		setImgFiles(temp);
	}

	const handleClear = (index) => {
		const temp = [...imgFiles];
		const key = `img_${index + 1}`;
		temp[index][key] = {};

		setImgFiles(temp);
	}
	const handleClickAdd = () => {
		const length = imgFiles.length;
		if (length >= 5) {
			toast.error('The number of photos exceeds the allowed limit!');
		} else {
			const newKey = `img_${length + 1}`;
			const newImgFiles = [...imgFiles, { [newKey]: {} }];
			setImgFiles(newImgFiles);
		}
	};
	const renderView = useMemo(() => {
		const temp = [...imgFiles];
		temp.shift(1);

		if (temp.length > 0) {
			return (
				<>
					{ temp.map((ele, index) => {
						const key = `img_${index + 2}`;
						const imgUrl = ele[key];
						return <>
							<ImageSelect key={ index } handleClear={ () => handleClear(index + 1) } border={ true } name={ key } handleChange={ handleChangeImg } imgUrl={ imgUrl } />
						</>
					}
					) }
					{
						temp.length < 4 && <AddImage handleClick={ handleClickAdd } />
					}
				</>
			)
		}
		else {
			return <AddImage handleClick={ handleClickAdd } />
		}
	}, [imgFiles]);

	const [email, setEmail] = useState('');
	const [isValidEmail, setIsValidEmail] = useState(true);

	const handleEmailChange = (event) => {
		const newEmail = event.target.value;
		setEmail(newEmail);
		setIsValidEmail(emailRegex.test(newEmail));
	};

	const [phoneNumber, setPhoneNumber] = useState('');
	const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

	const handlePhoneNumberChange = (event) => {
		const newPhoneNumber = event.target.value;
		setPhoneNumber(newPhoneNumber);
		setIsValidPhoneNumber(phoneNumberRegex.test(newPhoneNumber));
	};

	const [bedrooms, setBedrooms] = useState('');
	const [bathrooms, setBathrooms] = useState('');
	const [parkingslots, setParkingslots] = useState('');
	const [error1, setError1] = useState('');
	const [error2, setError2] = useState('');
	const [error3, setError3] = useState('');

	const handleBedroomsChange = (event) => {
		const inputValue = event.target.value;
		const parsedNumber = parseFloat(inputValue);

		if (isNaN(parsedNumber) || parsedNumber < 0) {
			setError1('Invalid number');
		} else {
			setError1('');
			setBedrooms(inputValue);
		}
	};

	const handleBathroomsChange = (event) => {
		const inputValue = event.target.value;
		const parsedNumber = parseFloat(inputValue);

		if (isNaN(parsedNumber) || parsedNumber < 0) {
			setError2('Invalid number');
		} else {
			setError2('');
			setBathrooms(inputValue);
		}
	};

	const handleParkingslotsChange = (event) => {
		const inputValue = event.target.value;
		const parsedNumber = parseFloat(inputValue);

		if (isNaN(parsedNumber) || parsedNumber < 0) {
			setError3('Invalid number');
		} else {
			setError3('');
			setParkingslots(inputValue);
		}
	};
	// const handleTestUpload = async () => {
	// 	try {
	// 		await FileUploader(imgFiles[0].img_1).then((url) => { console.log('url', url) })
	// 			.catch((error) => console.log(error));
	// 	} catch (error) {
	// 		console.log('Error:', error);
	// 	}
	// };

	const handleTestUpload = async () => {
		try {
			const uploadPromises = imgFiles.map((file, index) => {
				const name = `img_${index++}`;
				const fileUp = file[name];
				return FileUploader(fileUp)
			});
			const responseURLs = await Promise.all(uploadPromises);
			console.log('Response URLs:', responseURLs);
		} catch (error) {
			console.log('Error:', error);
		}
	};
	return (
		<div className="hostCreateHotelComponent">
			<div className="hostCreateHotelImg">

				<div className="hostCreateHotelImgLarge">
					<ImageSelect handleClear={ () => handleClear(0) } name='img_1' handleChange={ handleChangeImg } imgUrl={ imgFiles[0].img_1 } />
				</div>

				<div className="hostCreateHotelImgSmall">
					{
						renderView
					}
				</div>
			</div>
			<div>
				<button className="btn-custom btn-danger" onClick={ handleTestUpload }>
					UPLOAD
				</button>
			</div>

			<div className="hostCreateHotel">
				<div className="hostCreateHotelContent">
					<div className="hostCreateHotelTitle">
						<div className="hostCreateHotelTitleContent">
							<div className="hostCreateHotelName">
								<TextField
									id="outlined-basic"
									label="Your hotel's name"
									variant="standard"
									InputLabelProps={ {
										style: {
											width: "150%",
											fontSize: '18px',
											fontWeight: '500',
											paddingLeft: '1rem',
											fontFamily: 'Montserrat, sans-serif',
											color: '#4173d8',
										}
									} }
									InputProps={ {
										style: {
											width: "200%",
											fontWeight: "700",
											fontSize: "28px",
											lineHeight: "34px",
											color: "#484848",
											fontFamily: 'Montserrat, sans-serif',
										}
									} }
								/>
							</div>

							<div className="hostCreateHotelAddress">
								<TextField
									id="outlined-basic"
									label="Your hotel's address"
									variant="standard"
									InputLabelProps={ {
										style: {
											fontSize: '15px',
											paddingLeft: '1rem',
											fontFamily: 'Montserrat, sans-serif',
											color: '#4173d8',
										}
									} }
									InputProps={ {
										style: {
											width: "200%",
											fontWeight: "500",
											fontSize: "16px",
											lineHeight: "20px",
											color: "#9A9A9A",
											fontFamily: 'Montserrat, sans-serif',
										}
									} }
								/>
							</div>

							<div className="hostCreateHotelEmail">
								<TextField
									id="outlined-basic"
									label="Email"
									variant="standard"
									value={ email }
									onChange={ handleEmailChange }
									InputLabelProps={ {
										style: {
											fontSize: '15px',
											paddingLeft: '1rem',
											fontFamily: 'Montserrat, sans-serif',
											color: "#484848",
										}
									} }
									InputProps={ {
										style: {
											width: "200%",
											fontWeight: "500",
											fontSize: "16px",
											lineHeight: "20px",
											color: "#484848",
											fontFamily: 'Montserrat, sans-serif',
										}
									} }
									error={ !isValidEmail }
									helperText={ !isValidEmail ? 'Please enter a valid email address' : '' }
								/>
							</div>

							<div className="hostCreateHotelPhoneNumber">
								<TextField
									id="outlined-basic"
									label="Phone number"
									variant="standard"
									value={ phoneNumber }
									onChange={ handlePhoneNumberChange }
									InputLabelProps={ {
										style: {
											width: '200%',
											fontSize: '15px',
											paddingLeft: '1rem',
											fontFamily: 'Montserrat, sans-serif',
											color: "#484848",
										}
									} }
									InputProps={ {
										style: {
											width: "200%",
											fontWeight: "500",
											fontSize: "16px",
											lineHeight: "20px",
											color: "#484848",
											fontFamily: 'Montserrat, sans-serif',
										}
									} }
									error={ !isValidPhoneNumber }
									helperText={ !isValidPhoneNumber ? 'Please enter a valid phone number' : '' }
								/>
							</div>

							<div className="hostCreateHotelMainAmenities">
								<div className="hostCreateHotelAmenity">
									<FontAwesomeIcon icon={ faBed } className='hostCreateHotelAmenityIcon' />
									<input
										type="number"
										className="mainAmenityQuantity"
										onChange={ handleBedroomsChange }
									/>
									<span>Bedrooms</span>
									{ error1 && <p>{ error1 }</p> }
								</div>
								<div className="hostCreateHotelAmenity">
									<FontAwesomeIcon icon={ faBath } className='hostCreateHotelAmenityIcon' />
									<input
										type="number"
										className="mainAmenityQuantity"
										onChange={ handleBathroomsChange }
									/>
									<span>Bathrooms</span>
									{ error2 && <p>{ error2 }</p> }
								</div>
								<div className="hostCreateHotelAmenity">
									<FontAwesomeIcon icon={ faCar } className='hostCreateHotelAmenityIcon' />
									<input
										type="number"
										className="mainAmenityQuantity"
										onChange={ handleParkingslotsChange }
									/>
									<span>Parking Slots</span>
									{ error3 && <p>{ error3 }</p> }
								</div>
								<div className="hostCreateHotelAmenity">
									<FontAwesomeIcon icon={ faPaw } className='hostCreateHotelAmenityIcon' />
									<Checkbox
										sx={ {
											color: 'white',
											'&.Mui-checked': {
												color: 'white',
											},
											transform: 'scale(1.75)',
										} }
									/>
									<span>Pets Allowed</span>
								</div>
							</div>

							<div className="hostCreateHotelDesc">
								<h3>Description</h3>
								<TextareaAutosize
									aria-label="minimum height"
									minRows={ 7 }
									maxRows={ 7 }
									placeholder="Your hotel description.."
									style={ {
										border: '1px solid #4173d8',
										borderRadius: '10px',
										color: '#484848',
										padding: '10px',
										fontSize: '16px',
										fontFamily: 'Montserrat, sans-serif',
									} }
								/>
							</div>

							<div className="hostCreateHotelMapLocation">
								<h3>Location On Map</h3>
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

							<div className="hostCreateHotelAmenities">
								<h3>Amenity Options</h3>
								<FormGroup sx={ { display: 'grid', gridTemplateColumns: '1fr 1fr' } }>
									{
										amenitieOptions.map((ele) => {
											return (
												<FormControlLabel
													control={
														<Checkbox
															sx={ {
																color: '#4173D8',
																'&.Mui-checked': {
																	color: '#4173D8',
																},
															} }
														/>
													}
													label={
														<span style={ { fontFamily: 'Montserrat, sans-serif' } }>
															{ ele.label }
														</span>
													}
												/>
											)
										})
									}
								</FormGroup>
							</div>

							<div className="hostCreateHotelSafetyAndHygiene">
								<h3>Safety and Hygiene Options</h3>
								<FormGroup sx={ { display: 'grid', gridTemplateColumns: '1fr 1fr' } }>
									{
										safetyHygieneOptions.map((ele) => {
											return (
												<FormControlLabel
													control={
														<Checkbox
															sx={ {
																color: '#4173D8',
																'&.Mui-checked': {
																	color: '#4173D8',
																},
															} }
														/>
													}
													label={
														<span style={ { fontFamily: 'Montserrat, sans-serif' } }>
															{ ele.label }
														</span>
													}
												/>
											)
										})
									}
								</FormGroup>
							</div>
							<div className="hostCreateHotelNextStepBtnContainer">
								<div className="hostCreateHotelNextStepBtn">
									<span>Save your hotel</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default HostCreateHotel;