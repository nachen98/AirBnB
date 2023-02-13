import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CreateReview.css"
import { addReview } from '../../store/review';
import { useParams } from "react-router-dom";
import {getOneSpot} from "../../store/spots"
function CreateReviewForm({ setShowModal }) {
    const { spotId } = useParams()
    const dispatch = useDispatch();
    const user = useSelector(state => state.session)
    const [stars, setStars] = useState("")
    const [review, setReview] = useState("")
    const [errors, setErrors] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        const validationErrors = []
        const numberStar = Number(stars)
        //if (stars.length === 0) validationErrors.push("Please provide an integer between 1-5")
        if (numberStar > 5 || numberStar < 1 || numberStar % 1 !== 0) validationErrors.push("Please provide an integer between 1-5")
        if (review.length === 0) validationErrors.push("Review text is required")

        if (validationErrors.length > 0) {
            setErrors(validationErrors)
            return;
        }

        // dispatch(addReview({ stars, review }, spotId, user)).then(
        //     async (res) => {
        //         //console.log('res%%%%%%%%%%%%', res)
        //         const data = res;//await res.json();
        //         if (data && data.errors) {
        //             setErrors(data.errors);
        //         } else {
        //             setShowModal(false)
        //         }
        //     }
        // )
        dispatch (addReview({stars, review}, spotId, user)).then(
            async(res) => {
                if(res && res.errors){
                    setErrors(res.errors);
                } else {
                    dispatch(getOneSpot(spotId))
                    setShowModal(false)
                }
            }
        )
    };

    return (
        <div className="create-review-form-container flx-col-align-ctr">
            <div className="loginsignup-nav-container flx-col-justify-align-ctr">
                Create a Review
            </div>

   
                <form onSubmit={handleSubmit} className="review-form-container">
                    {errors.length > 0 && (<div className="signup-error-message">

                        <ul>
                            {errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>
                    </div>)}
                 
                                <input
                                className="login-username-input"
                                    type="number"
                                    value={stars}
                                    placeholder="Rating from 1 to 5"
                                    onChange={(e) => setStars(e.target.value)}
                                    style={{ borderBottom: 'none' }}
                                    min='1'
                                    max='5'
                                    required
                                />
                     
                                <textarea
                                 className="text-area"
                                    value={review}
                                    placeholder='Type your review here...'
                                    onChange={(e) => setReview(e.target.value)}
                                    required
                                />
           
   

              
           <button
            className="spot-submit"
              type="submit"
              disabled={isSubmitted && errors.length > 0}
            >
              Submit

            </button>
         
                </form>

            </div>
  
    )

};
export default CreateReviewForm