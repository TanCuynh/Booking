import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

const AddImage = ({ handleClick }) => {
	return (
		<div className="addImageWrapper borderCustom" onClick={ handleClick }>
			<FontAwesomeIcon icon={ faSquarePlus } className="iconAdd" fontSize={ 50 } />
		</div>
	)
}

export default AddImage;