import React, { useState } from "react";
import './hotelItem.css';
import { useNavigate } from "react-router-dom";
import { Dialog, DialogTitle, DialogContentText, DialogActions, DialogContent } from "@mui/material";
const HotelItem = () => {
	const [open, setOpen] = useState(false);


	const handleClose = () => {
		setOpen(false);
	};
	const navigate = useNavigate();
	const handleOnClickModify = () => {
		navigate('/host/modify');
	};

	const handleOnClickRemove = () => {
		setOpen(true);
	};

	return (
		<div className="hotel-item">
			<div className="hotel-item-content">
				<img src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/297693925.jpg?k=c5cfc34421f30c8fb83452c7a9be6b0741e55bcbcc02b4e5c61fa500b99b8f80&o=&hp=1' alt="img-hotel" className="hotel-item-img" />
				<div className="short-description">
					<h1 className="short-description-h1">Family Apartment</h1>
					<span className="short-description-span">100 Smart Street,LA,USA</span>
				</div>
			</div>
			<div className="hotel-item-action">
				<button className="btn-custom btn-custom-primary " onClick={ handleOnClickModify }>Modify</button>
				<button className="btn-custom btn-custom-default " onClick={ handleOnClickRemove }>Remove</button>
			</div>
			<Dialog
				open={ open }
				keepMounted
				onClose={ handleClose }
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>{ "Are you sure delete this hotel ?" }</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						When you delete the hotel, all data about the room will be deleted.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<button onClick={ handleClose } className="btn-custom btn-custom-default">Cancel</button>
					<button onClick={ handleClose } className="btn-custom btn-custom-danger">Delete</button>
				</DialogActions>
			</Dialog>
		</div>


	)
}

export default HotelItem;