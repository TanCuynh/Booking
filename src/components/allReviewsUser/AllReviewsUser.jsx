import React from "react";
import UserReview from "../userReview/UserReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './allReviewsUser.css'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Margin } from "@mui/icons-material";

const AllReviewsUser = ({ onClose }) => {

    const handleClose = () => {
        onClose();
    };
    return (
        <div className="all-reviews-layout">
            <p style={
                {
                    fontSize: '24px',
                    fontWeight: "bold",
                    marginTop: '15px',
                    marginLeft: '25px'
                }
            }>Review của Trần Hồng Đức</p>
            <FontAwesomeIcon icon={faXmark} className='allReviewsCloseBtn' onClick={handleClose} />
            <div className="search-review-layout">
                
            </div>
        </div>
    );
}

export default AllReviewsUser;
    