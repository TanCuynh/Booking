import React from 'react';
import './ImageSelect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const ImageSelect = () => {
	return (
		<div className='image-select'>
			<label htmlFor='image-select' className='image-select-label'>
				<FontAwesomeIcon icon={ faUpload } />
				<span>
					Upload Image
				</span>
			</label>
			<input type='file' id='image-select' className='image-select-input' accept=".png, .jpg, .jpeg" />
		</div>
	)
}

export default ImageSelect;