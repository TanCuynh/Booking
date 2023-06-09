import React from 'react'
import './reviewComment.css'
import { Rating } from '@mui/material'

const ReviewComment = (dataReview) => {

    // console.log("one Review", dataReview?.dataReview.name)

    return (
        <div className="reviewCommentContainer">
            <div className="reviewCommentHeader">
                <div className="reviewCommentUserAvt"></div>
                <div className="reviewCommentInfo">
                    <Rating
                        name="my-rating"
                        value={dataReview?.dataReview.rating}
                        precision={0.5}
                        readOnly
                    />
                    <h3 className="reviewCommentUsername">{dataReview?.dataReview.name}</h3>
                    <span className="reviewCommentDate">{dataReview?.dataReview.updated_at}</span>
                </div>
            </div>
            <div className="reviewCommentContent">
                <p>{dataReview?.dataReview.content}</p>
            </div>
        </div>
    )
}

export default ReviewComment