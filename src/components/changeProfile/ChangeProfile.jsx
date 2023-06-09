import React, { useContext, useState } from "react";
import './changeProfile.css';
import { APP_CONTEXT } from "../../App";

const ChangeProfile = () => {

  const context = useContext(APP_CONTEXT);

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(context.user.name);
  const [tempName, setTempName] = useState(name);

  const [emailAddress, setEmailAddress] = useState(context.user.email);
  const [tempEmailAddress, setTempEmailAddress] = useState(emailAddress);

  const [phoneNumber, setPhoneNumber] = useState(context.user.phone_number);
  const [tempPhoneNumber, setTempPhoneNumber] = useState(phoneNumber);

  const [dateOfBirth, setDateOfBirth] = useState(context.user.date_of_birth);
  const [tempDateOfBirth, setTempDateOfBirth] = useState(dateOfBirth);

  const [gender, setGender] = useState(context.user.gender);
  const [tempGender, setTempGender] = useState(gender);

  const [address, setAddress] = useState(context.user.address);
  const [tempAddress, setTempAddress] = useState(address);

  const [error, setError] = useState("");

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");


  const handleEditClick = () => {
    if (editing) {
      setTempName(name);
      setTempEmailAddress(emailAddress);
      setTempPhoneNumber(phoneNumber);
      setTempDateOfBirth(dateOfBirth);
      setTempGender(gender);
      setTempAddress(address);
    }
    setEditing(!editing);
  };

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
    setTempGender(parseInt(event.target.value));
  };

  const handleSaveClick = () => {

    setEmailError("");
    setPhoneError("");

    console.log("gender", gender, tempGender);

    if (
      !tempName ||
      !tempEmailAddress ||
      !tempPhoneNumber ||
      !tempDateOfBirth ||
      !tempAddress
    ) {
      setError('Please fill in all the required fields');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^\d{10}$/;

    if (!emailRegex.test(tempEmailAddress)) {
      setEmailError("Your email is invalid");
      return;
    }

    if (!phoneNumberRegex.test(tempPhoneNumber)) {
      setPhoneError("Your phone number is invalid");
      return;
    }


    setName(tempName);
    setEmailAddress(tempEmailAddress);
    setPhoneNumber(tempPhoneNumber);
    setDateOfBirth(tempDateOfBirth);
    setGender(tempGender);
    setAddress(tempAddress);
    setEditing(false);

    setError("");
    setPhoneError("");
    setEmailError("");
  };

  const handleCancelClick = () => {
    setTempName(name);
    setTempEmailAddress(emailAddress);
    setTempPhoneNumber(phoneNumber);
    setTempGender(gender);
    setTempAddress(address);
    setEditing(false);

    setError("");
    setPhoneError("");
    setEmailError("");
  };


  return (
    <div>
      <div className="profileContainer">
        <div className="changeProfileContainer">
          <h3>Personal details</h3>
          {<p>{error}</p>}
        </div>
        <div className="information">
          <p className="label">Name</p>
          {editing ? (
            <input
              type="text"
              value={tempName}
              onChange={(event) => handleInputChange(event, setTempName)}
              className="input-field"
            />
          ) : (
            <p className="info-field">{name}</p>
          )}
        </div>
        <div className="information">
          <div className="infoLabel">
            <p className="label">Email Address</p>
            <span>{emailError}</span>
          </div>
          {editing ? (
            <input
              type="text"
              value={tempEmailAddress}
              onChange={(event) => handleInputChange(event, setTempEmailAddress)}
              className="input-field"
            />
          ) : (
            <p className="info-field">{emailAddress}</p>
          )}
        </div>
        <div className="information">
          <div className="infoLabel">
            <p className="label">Phone Number</p>
            <span>{phoneError}</span>
          </div>
          {editing ? (
            <input
              type="text"
              value={tempPhoneNumber}
              onChange={(event) => handleInputChange(event, setTempPhoneNumber)}
              className="input-field"
            />
          ) : (
            <p className="info-field">{phoneNumber}</p>
          )}
        </div>
        <div className="information">
          <p className="label">Date of Birth</p>
          {editing ? (
            <input
              type="date"
              value={tempDateOfBirth}
              onChange={(event) => handleInputChange(event, setTempDateOfBirth)}
              className="input-field"
            />
          ) : (
            <p className="info-field">{dateOfBirth}</p>
          )}
        </div>
        <div className="information">
          <p className="label">Gender</p>
          {editing ? (
            <select
              value={tempGender}
              onChange={(event) => handleInputChange(event, setTempGender)}
              className="input-field"
            >
              <option value={0}>Male</option>
              <option value={1}>Female</option>
            </select>
          ) : (
            <p className="info-field">{gender === 0 ? "Male" : "Female"}</p>
          )}
        </div>
        <div className="information">
          <p className="label">Address</p>
          {editing ? (
            <input
              type="text"
              value={tempAddress}
              onChange={(event) => handleInputChange(event, setTempAddress)}
              className="input-field"
            />
          ) : (
            <p className="info-field">{address}</p>
          )}
        </div>
      </div>
      <div className="actions">
        {editing ? (
          <>
            <button className="save-btn" onClick={handleSaveClick}>
              Save
            </button>
            <button className="cancel-btn" onClick={handleCancelClick}>
              Cancel
            </button>
          </>
        ) : (
          <button className="edit-btn" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default ChangeProfile;
