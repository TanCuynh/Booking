import React from 'react';
import './ImageSelect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPencil } from '@fortawesome/free-solid-svg-icons';

const ImageSelect = ({ handleClear, handleChange, imgUrl, border = false, name }) => {
	console.log(name, imgUrl)
	return (
		<div className={ border ? 'selectImgWapper borderCustom' : "selectImgWapper" } style={ { backgroundImage: `url(${imgUrl?.preview})` } }>
			{
				imgUrl?.preview ? <button onClick={ handleClear } className="editBtn editClear"><FontAwesomeIcon icon={ faXmark } /></button>
					:
					<label className="editBtn" htmlFor={ name }>
						<FontAwesomeIcon icon={ faPencil } className="iconEdit" />
					</label>
			}
			<input type="file" className="inputEdit" id={ name } name={ name } onChange={ handleChange } />
		</div>
	)
}

export default ImageSelect;