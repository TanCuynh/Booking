import React, { useState } from "react";  
import './changePassword.css';
import { Height } from "@mui/icons-material";

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        newPassword2: '',
        verify: ''
      });
    const { currentPassword, newPassword, newPassword2, verify } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (currentPassword.trim() === '') {
          alert('Please enter Current Password');
          return;
        }
    
        if (newPassword.trim() === '') {
          alert('Please enter New Password');
          return;
        }
    
        if (newPassword2.trim() === '') {
          alert('Please enter New Password');
          return;
        }
    
        if (verify.trim() === '') {
          alert('Please enter Verify Code');
          return;
        }
      };

    return (
        <div>
            <p style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    marginLeft: '15px',
            }}
            >Đổi Mật Khẩu</p>
            <div style={{
                fontSize: '20px'
            }}>
                <div className="current-password">
                    <label htmlFor="current-password" className="lable-custom">Current Password</label>
                    <input
                    type="text"
                    id="current-password-input"
                    value={currentPassword}
                    name="currentPassword"
                    className="input-custom"
                    onChange={handleChange}
                    />
                    {currentPassword === '' && <p className='error-message'>Please enter Currentpassword.</p>}
                </div>
                <div className="new-password">
                    <label htmlFor="new-password-input" className="lable-custom">New Password</label>
                    <input
                    type="text"
                    id="new-password-input"
                    value={newPassword}
                    name="newPassword"
                    className="input-custom"
                    onChange={handleChange}
                    />
                    {newPassword === '' && <p className='error-message'>Please enter new Password.</p>}
                </div>
                <div className="new-password2">
                    <label htmlFor="new-password2-input" className="lable-custom">New Password</label>
                    <input
                    type="text"
                    id="new-password2-input"
                    value={newPassword2}
                    name="newPassword2"
                    className="input-custom"
                    onChange={handleChange}
                    />
                    {newPassword2 === '' && <p className='error-message'>Please enter new Password.</p> ||
                    newPassword2 !== newPassword && <p className='error-message'>Password incorrect</p>}
                </div>
                <div className="verify">
                    <label htmlFor="verify-input" className="lable-custom">Verify code</label>
                    <input
                    type="text"
                    id="verify-input"
                    value={verify}
                    name="verify"
                    className="input-custom"
                    onChange={handleChange}
                    />
                    {verify === '' && <p className='error-message'>Please enter verify code.</p>}
                    <button style={{
                        backgroundColor: '#003580',
                        color: '#fff',
                        height: '30px',
                        width: '100px',
                        marginTop: '10px'
                    }}>get code</button>
                </div>
                <div>
                    <button onClick={handleSubmit} style={{
                        marginLeft: '37%',
                        height: '40px',
                        width: '120px',
                        marginTop: '20px',
                        backgroundColor: '#003580',
                        color: '#fff',
                        fontSize: '18px',
                        borderRadius: '3px'
                    }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;