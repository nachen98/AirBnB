import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './SpotReview.css'
import { deleteReview } from "../../store/review";
import { getOneSpot } from "../../store/spots";
import { useParams } from "react-router-dom";

function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString([], {
        month: 'long',
    });
}

export default function SpotReview({ reviewContent }) {
    //console.log('reviewContent!!!!!!!!!!', reviewContent)
    const{spotId} = useParams()
    const dispatch = useDispatch()
    const currUser = useSelector(state => state.session.user)

    const monthPart = reviewContent.createdAt.split('-')[1]
    const month = toMonthName(monthPart)
    const year = reviewContent.createdAt.split('-')[0]
    
    const deleteReviewButton = async () =>{
        await dispatch(deleteReview(reviewContent.id))
        await dispatch(getOneSpot(spotId))
    }

  
    return (
        

            <div className="individual-review-container">
                <div className="user-name">
                    {reviewContent.User.firstName}
                </div>
                <div className="review-time">
                    {`${month} ${year}`}
                </div>
                <div className="review-info">
                    {reviewContent.review}
                </div>
          
            {currUser && (currUser.id === reviewContent.User.id) &&
                <div className='delete-review-button'>
                    <button onClick={() => (deleteReviewButton())}>Delete your Review</button>
                </div>}
        </div>
    )
}
