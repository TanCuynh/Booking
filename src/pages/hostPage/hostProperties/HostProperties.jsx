import React, { useContext, useEffect, useState } from "react";
import HotelItem from "../../../components/hotelItem/HotelItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './hostProperties.css';
import { useNavigate } from "react-router-dom";
import { APP_CONTEXT } from "../../../App";
import hotelAPI from "../../../api/hotelAPI";
const HostProperties = () => {
	const navigate = useNavigate();
	const context = useContext(APP_CONTEXT);
	const [hotels, setHotels] = useState([]);

	const handleClickCreate = () => {
		navigate('/host/create');
	};

	const getHotelByHost = async () => {
		const res = await hotelAPI.getHotelByHost();
		if (res.status === 200) {
			setHotels(res.data.data.data);
		} else {
			setHotels([]);
			console.log("Error")
		}
	}

	useEffect(() => {
		getHotelByHost();
	}, []);

	return (
		<div className="host-properties">
			<div className="list-properties">
				<div className="host-properties-header">
					<h1 className="host-properties-title">List Properties</h1>
					<div>
						<button className="btn-create" onClick={handleClickCreate}>
							<FontAwesomeIcon icon={faPlus} />
							<span>
								Create new hotel
							</span>
						</button>
					</div>
				</div>
				<div className="host-properties-container">
					{
						hotels.map((hotel, index) => {
							return (
								<HotelItem key={index} dataHotel={hotel} />
							)
						})
					}

				</div>
			</div>

		</div>
	)
}
export default HostProperties;