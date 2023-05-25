import React from 'react'
import './reviewComment.css'
import { Rating } from '@mui/material'

const ReviewComment = () => {
    return (
        <div className="reviewCommentContainer">
            <div className="reviewCommentHeader">
                <div className="reviewCommentUserAvt"></div>
                <div className="reviewCommentInfo">
                    <Rating 
                        name="my-rating"
                        value={5}
                        readOnly
                    />
                    <h3 className="reviewCommentUsername">John Dobberman</h3>
                    <span className="reviewCommentDate">Mar 12 2020</span>
                </div>
            </div>
            <div className="reviewCommentContent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}

export default ReviewComment