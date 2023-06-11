import React, { useState } from "react";
import './hotelItem.css';
import { useNavigate } from "react-router-dom";
import { Dialog, DialogTitle, DialogContentText, DialogActions, DialogContent } from "@mui/material";
const HotelItem = (dataHotel) => {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};
	const navigate = useNavigate();

	const handleOnClickModify = () => {
		navigate('/host/modify');
	};

	const handleHostProperty = () => {
		navigate(`/hotel/${dataHotel?.dataHotel.id}`);
	}

	const handleOnClickRemove = () => {
		setOpen(true);
	};

	return (
		<div className="hotel-item">
			<div className="hotel-item-content">
				<img onClick={handleHostProperty} src={dataHotel?.dataHotel.hotel_image[0].image_url} alt="img-hotel" className="hotel-item-img" />
				<div className="short-description">
					<h1 className="short-description-h1" onClick={handleHostProperty}>{dataHotel?.dataHotel.name}</h1>
					<span className="short-description-span">{dataHotel?.dataHotel.address}</span>
				</div>
			</div>
			<div className="hotel-item-action">
				<button className="btn-custom btn-custom-default " onClick={handleOnClickRemove}>Remove</button>
			</div>
			<Dialog
				open={open}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle style={{ fontFamily: "Montserrat", fontWeight: "800", color: "#484848" }}>{"Are you sure delete this hotel?"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description" style={{ fontFamily: "Montserrat", fontWeight: "700" }}>
						When you delete the hotel, all data about the room will be deleted.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<button onClick={handleClose} className="btn-custom btn-custom-default">Cancel</button>
					<button onClick={handleClose} className="btn-custom btn-custom-danger">Delete</button>
				</DialogActions>
			</Dialog>
		</div>


	)
}

export default HotelItem;