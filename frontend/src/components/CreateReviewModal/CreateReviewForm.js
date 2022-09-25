import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CreateReview.css"
import { addReview } from '../../store/review';
import { useParams } from "react-router-dom";

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

        dispatch(addReview({ stars, review }, spotId, user)).then(
            async (res) => {
                //console.log('res%%%%%%%%%%%%', res)
                const data = res;//await res.json();
                if (data && data.errors) {
                    setErrors(data.errors);
                } else {
                    setShowModal(false)
                }
            }
        )
    };

    return (
        <div className="form-container">
            <div className="form-header">
                Create a Review
            </div>

            <div className="form-body">
                <form onSubmit={handleSubmit}>
                    {errors.length > 0 && (<div className="error-message">

                        <ul>
                            {errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>
                    </div>)}
                    <div className="input-field-container">
                        <div className="input-field">
                            <label>
                                <input
                                    type="text"
                                    value={stars}
                                    placeholder="Rating from 1 to 5"
                                    onChange={(e) => setStars(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="input-field">
                            <label>
                                <textarea
                                    value={review}
                                    placeholder='Type your review here...'
                                    onChange={(e) => setReview(e.target.value)}
                                />
                            </label>

                        </div>
                    </div>

                    <div className="submit-button">
                        <button
                            type="submit"
                            disabled={isSubmitted && errors.length > 0}
                        >
                            Submit

                        </button>
                    </div>
                </form>

            </div>
        </div>
    )

};
export default CreateReviewForm