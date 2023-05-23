import React from 'react';
import './ImageSelect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPencil } from '@fortawesome/free-solid-svg-icons';

const ImageSelect = ({ handleClear, handleChange, imgUrl, border = false }) => {
	return (
		<div className={ border ? 'selectImgWapper borderCustom' : "selectImgWapper" } style={ { backgroundImage: `url(${imgUrl})` } }>
			{
				imgUrl ? <button onClick={ handleClear } className="editBtn editClear"><FontAwesomeIcon icon={ faXmark } /></button>
					:
					<label className="editBtn" htmlFor="img1">
						<FontAwesomeIcon icon={ faPencil } className="iconEdit" />
					</label>
			}
			<input type="file" className="inputEdit" id="img1" name="img1" onChange={ handleChange } />
		</div>
	)
}

export default ImageSelect;