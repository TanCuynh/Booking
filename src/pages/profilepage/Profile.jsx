import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import UserReview from "../../components/userReview/UserReview";
import "./profile.css";

const Profile = () => {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
            <div className="main-layoutt">
                <div className="verify-layout">
                    <div className="avatar">
                        <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/273163403_1119529748849359_6980097327525230278_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=oKc1wENFVegAX-JPV-M&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCTNGYbgo0hex-yUAWzYJUm2FlSNHmN09E3dpDJNWe2Vg&oe=64777543" alt="avartar" className="imagee  " />
                    </div>

                    <div className="hostAccountVerify">
                        <h3>Identity Verification</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                    </div>

                    <div className="confirmed-container">
                        <p className="name-confirmed">Trần Hồng Đức</p>
                        <div className="hostAccountVerifyConfirm">
                            <FontAwesomeIcon icon={faCheck} />
                            <span>Email Confirm</span>
                        </div>
                        <div className="hostAccountVerifyConfirm">
                            <FontAwesomeIcon icon={faCheck} />
                            <span>Email Confirm</span>
                        </div>
                    </div>
                </div>

                <div className="profile-layout">
                    <div className="profile-container">
                        <p className="hello-text">Hello, Trần Hồng Đức</p>
                        <p className="time-join">Joined in 2023</p>
                        <button className="btn-edit-profile">
                            Edit Profile
                        </button>
                        <p className="reviews-text">&#x2605; 0 Reviews</p>
                    </div>

                    <div class="horizontal-vector"></div>

                    <div className="review-container">
                        <Link>Show All Reviews</Link>
                        <UserReview/>
                        <UserReview/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;