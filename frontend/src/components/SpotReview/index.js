import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './SpotReview.css'
import { deleteReview } from "../../store/review";

function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString([], {
      month: 'long',
    });
  }

  export default function SpotReview({reviewContent}){
    //console.log('reviewContent!!!!!!!!!!', reviewContent)
    const dispatch = useDispatch()
    const currUser = useSelector(state => state.session.user)

    const monthPart = reviewContent.createdAt.split('-')[1]
    const month = toMonthName(monthPart)
    const year = reviewContent.createdAt.split('-')[0]

    return(
        <div className="reviews-container">
            <div className="user-name">
                Reviewed by: {reviewContent.User.firstName}
            </div>
            <div className="review-time">
                {`${month} ${year}`}
            </div>
            <div className="review-info">
                {reviewContent.review}
            </div>
            {currUser && (currUser.id === reviewContent.User.id) && 
            <div className='delete-review'>
                    <button onClick={() => dispatch(deleteReview(reviewContent.id))}>Delete your Review</button>
                </div>}
        </div>
    )
}
