import React from "react";
import HotelItem from "../../components/hotelItem/HotelItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './hostProperties.css';
import { useNavigate } from "react-router-dom";
const HostProperties = () => {

	const navigate = useNavigate();
	const handleClickCreate = () => {
		navigate('/host/create');
	};
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
					<HotelItem />
				</div>
			</div>

		</div>
	)
}
export default HostProperties;