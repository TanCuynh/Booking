import React, { useState } from "react";
import ImageSelect from "./components/ImageSelect/ImageSelect";
import InputField from "../../components/InputField/InputField";
import './HostCreateHotel.css';

const HostCreateHotel = () => {
	const [name, setName] = useState('');
	const handleChange = (e) => {
		console.log(e.target.value);
		setName(e.target.value);
	}
	return (
		<div className="host-create-wrapper">
			<div className="host-create-form">
				<div className="host-create-form-left">
					<InputField id="name" placeholder="Name" type="text" value={ name } onChange={ handleChange } label="Name" />
					<InputField id="name" placeholder="Name" type="text" value={ name } onChange={ handleChange } label="Name" />
					<InputField id="name" placeholder="Name" type="text" value={ name } onChange={ handleChange } label="Name" />
					<ImageSelect />
				</div>
				<div className="host-create-form-center">
					<div className="divider">

					</div>
				</div>
				<div className="host-create-form-right">
					<InputField id="name" placeholder="Name" type="text" value={ name } onChange={ handleChange } label="Name" />
					<InputField id="name" placeholder="Name" type="text" value={ name } onChange={ handleChange } label="Name" />
					<InputField id="name" placeholder="Name" type="text" value={ name } onChange={ handleChange } label="Name" />
					<InputField id="name" placeholder="Name" type="text" value={ name } onChange={ handleChange } label="Name" />
				</div>
			</div>
		</div>
	)
}
export default HostCreateHotel;