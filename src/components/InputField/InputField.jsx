import React from "react";
import './InputField.css';

const InputField = ({ name, id, value, onChange, placeholder, label, type }) => {
	return (
		<div className="input-field">
			<label htmlFor={ id }>{ label }</label>
			<input type={ type } name={ name } id={ id } value={ value } placeholder={ placeholder } onChange={ onChange } />
		</div>
	)
}
export default InputField;