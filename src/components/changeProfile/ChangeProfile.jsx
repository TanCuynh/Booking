import React, { useState } from "react";
import './changeProfile.css';

const ChangeProfile = () => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Trần Hồng Đức");
  const [tempName, setTempName] = useState(name);
  const [emailAddress, setEmailAddress] = useState("tranhongduc@gmail.com");
  const [tempEmailAddress, setTempEmailAddress] = useState(emailAddress);
  const [phoneNumber, setPhoneNumber] = useState("0123456789");
  const [tempPhoneNumber, setTempPhoneNumber] = useState(phoneNumber);
  const [dateOfBirth, setDateOfBirth] = useState("22-03-2002");
  const [tempDateOfBirth, setTempDateOfBirth] = useState(dateOfBirth);
  const [gender, setGender] = useState("Male");
  const [tempGender, setTempGender] = useState(gender);
  const [address, setAddress] = useState("123 Street, City, Country");
  const [tempAddress, setTempAddress] = useState(address);

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
  };

  const handleSaveClick = () => {
    setName(tempName);
    setEmailAddress(tempEmailAddress);
    setPhoneNumber(tempPhoneNumber);
    setDateOfBirth(tempDateOfBirth);
    setGender(tempGender);
    setAddress(tempAddress);
    setEditing(false);
  };

  const handleCancelClick = () => {
    setTempName(name);
    setTempEmailAddress(emailAddress);
    setTempPhoneNumber(phoneNumber);
    setTempDateOfBirth(dateOfBirth);
    setTempGender(gender);
    setTempAddress(address);
    setEditing(false);
  };


  return (
    <div>
      <div className="profileContainer">
        <div className="changeProfileContainer">
          <h3>Personal details</h3>
          <p>Update your information and find out how it's used.</p>
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
          <p className="label">Email Address</p>
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
          <p className="label">Phone Number</p>
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
              type="text"
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
            <input
              type="text"
              value={tempGender}
              onChange={(event) => handleInputChange(event, setTempGender)}
              className="input-field"
            />
          ) : (
            <p className="info-field">{gender}</p>
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
