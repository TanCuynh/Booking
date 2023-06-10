import React, { useContext, useEffect, useState } from "react";
import './changeProfile.css';
import { APP_CONTEXT } from "../../App";
import { AuthAPI } from "../../api/AuthAPI";
import { toast } from "react-hot-toast";

const ChangeProfile = () => {

  const context = useContext(APP_CONTEXT);

  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(context.user.name);
  const [tempName, setTempName] = useState(name);

  const [emailAddress, setEmailAddress] = useState(context.user.email);

  const [phoneNumber, setPhoneNumber] = useState(context.user.phone_number);
  const [tempPhoneNumber, setTempPhoneNumber] = useState(phoneNumber);

  const [dateOfBirth, setDateOfBirth] = useState(context.user.date_of_birth);
  const [tempDateOfBirth, setTempDateOfBirth] = useState(dateOfBirth);

  const [gender, setGender] = useState(0);
  useEffect(() => {
    setGender(context.user.gender);
  }, [context.user.gender])
  const [tempGender, setTempGender] = useState(gender);

  const [address, setAddress] = useState(context.user.address);
  const [tempAddress, setTempAddress] = useState(address);

  const [error, setError] = useState("");

  const [phoneError, setPhoneError] = useState("");


  const handleEditClick = () => {
    if (editing) {
      setTempName(name);
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

  const [accId, setAccId] = useState(context.user.id);

  const handleSaveClick = async () => {
    setPhoneError("");
    setPhoneError("");

    if (
      !tempName ||
      !tempPhoneNumber ||
      !tempDateOfBirth ||
      !tempAddress
    ) {
      setError('Please fill in all the required fields');
      return;
    }
    const phoneNumberRegex = /^\d{10}$/;

    if (!phoneNumberRegex.test(tempPhoneNumber)) {
      setPhoneError("Your phone number is invalid");
      return;
    }

    try {
      const res = await AuthAPI.editProfile(accId, {
        name: tempName,
        phone_number: tempPhoneNumber,
        date_of_birth: tempDateOfBirth,
        gender: tempGender,
        address: tempAddress,
      });

      if (res.status === 200) {
        setName(tempName);
        setPhoneNumber(tempPhoneNumber);
        setDateOfBirth(tempDateOfBirth);
        setGender(tempGender);
        setAddress(tempAddress);

        setEditing(false);
      } else {
        setError("Failed to update the profile");
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile");
    }
  };

  const handleCancelClick = () => {
    setTempName(name);
    setTempPhoneNumber(phoneNumber);
    setTempGender(gender);
    setTempAddress(address);
    setEditing(false);

    setError("");
    setPhoneError("");
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
          </div>
          <p className="info-field">{emailAddress}</p>
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
              className="select-field"
            >
              <option className="select-option" value={0}>Male</option>
              <option className="select-option" value={1}>Female</option>
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
