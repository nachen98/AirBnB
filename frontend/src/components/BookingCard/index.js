import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBooking, getCurrUserBookings } from "../../store/bookings";
import LoginForm from '../LoginFormModal/LoginForm';
import { Modal } from '../../context/Modal';
import "./BookingCard.css"
export const dateToStr = (date) => {
    if (Object.prototype.toString.call(date) === "[object Date]") {
        return date.toISOString().split('T')[0];
    }
    return null;
}

const today = new Date().toISOString().split('T')[0];
const fiveDaysLater = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
const fiveDaysLaterString = dateToStr(fiveDaysLater);

export function BookingCard({ oneSpotById, currUser }) {

    const dispatch = useDispatch();
    const history = useHistory();
    const [numDays, setNumDays] = useState(5)
    const [startDate, setStartDate] = useState(`${today}`)
    const [endDate, setEndDate] = useState(`${fiveDaysLaterString}`)
    const [total, setTotal] = useState((oneSpotById.price * numDays + parseInt(oneSpotById.price * numDays * 0.02) + parseInt(oneSpotById.price * numDays * 0.05)))
    const [errors, setError] = useState([])
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        const errors = [];


        if (startDate < today || endDate < today) {
            errors.push("Please book dates after today.")
        }

        if (startDate > endDate) {
            errors.push("End date cannot be earlier than start date.")
        }

        setError(errors)
        console.log('@@@@@@@@@@@startdate in useEffect', startDate)
    }, [startDate, endDate])


    useEffect(() => {
        setNumDays(Math.ceil(((new Date(endDate).getTime()) - (new Date(startDate).getTime())) / 1000 / 60 / 60 / 24));
    }, [startDate, endDate])

    useEffect(() => {
        setTotal((oneSpotById.price * numDays + parseInt(oneSpotById.price * numDays * 0.02) + parseInt(oneSpotById.price * numDays * 0.05)));
    }, [numDays])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const addedBooking = { startDate, endDate }

        console.log('startdate at submit#########################', startDate)
        dispatch(createBooking(oneSpotById.id, addedBooking))
            .then(async (res) => {
                console.log("res.ok#################", res.ok)
                if (res.ok) {

                    console.log("##############################gets here")
                    setError([])
                    history.push('/mytrips')
                } else {
                    console.log('res@@@@@@@@@@@@@@@@@@@@@@', res)
                    const result = await res.json()

                    const errors = []
                    // console.log('result@@@@@@@@@@@@@@@@@', result)
                    if (result && result.message) {
                        errors.push(result.message)
                        console.log('errors!!!!!!!!!!!!!!!!!!', errors)
                    }
                    setError(errors)
                }

            })
    }


    return (
        <div className='spot-info-right'>
            <form onSubmit={handleSubmit} className="booking-form">
                {errors.length > 0 && (<div className="error-message-create-booking">

                    {errors.map((error, idx) => <div key={idx}>{error}</div>)}

                </div>)}
                <div className="price-review-header flx-row-space-btw">
                    <div className='single-spot-price'>
                        <span style={{ fontWeight: 'bold' }}> {`$${oneSpotById.price} `}</span> night
                    </div>
                    <div className='star-reviews'>

                        <div className='rating-star'>
                            <i className="fa-solid fa-star"></i>
                            {Number(oneSpotById.avgStarRating) !== 0 ? Number(oneSpotById.avgStarRating).toFixed(1) : ` New`}
                        </div>
                        <div className="space">  ·  </div>
                        <div className='single-spot-review'>

                            {oneSpotById?.numReviews} {oneSpotById?.numReviews <= 1 ? "review" : "reviews"}

                        </div>
                    </div>



                </div>
                {(!currUser || (currUser && currUser.id !== oneSpotById.ownerId)) &&
                    <>
                        <div className="booking-dates-container flx-col">
                            <div className="checkin-checkout-container flx-row">
                                <div className="check-in-container flx-col-justify-align-ctr cur-poi">
                                    <div className="check-in-inner-container">
                                        <span className='check-in-label'>CHECK-IN</span>
                                        <input
                                            type="date"
                                            className="check-in-date"
                                            value={startDate}
                                            min={today}
                                            required
                                            onChange={e => setStartDate(e.target.value)}
                                            onClick={(e) => e.target.focus()}
                                        />
                                    </div>

                                </div>
                                <div className="check-out-container">
                                    <div className="check-out-inner-container">
                                        <span className='check-in-label'>CHECK-OUT</span>
                                        <input
                                            type="date"
                                            className="check-in-date"
                                            value={endDate}
                                            min={startDate}
                                            required
                                            onChange={e => setEndDate(e.target.value)}
                                            onClick={(e) => e.target.focus()}

                                        />
                                    </div>
                                </div>
                            </div>


                            {!!currUser ?
                                <button className="reserve-button cur-poi"
                                    type="submit"

                                    disabled={errors.length > 0}
                                >
                                    Reserve
                                </button>
                                :
                                <>
                                    <button onClick={() => setShowModal(true)} className="reserve-to-login">Reserve</button>
                                    {showModal && (
                                        <Modal onClose={() => setShowModal(false)}>
                                            <LoginForm />                              </Modal>
                                    )}
                                </>
                            }

                        </div>
                        <span className='not-charging-message'>You won't be charged yet</span>
                        <div className="reserved-nights-section">
                            <div>
                                {oneSpotById.price} x {numDays} nights
                            </div>

                            <div>
                                {oneSpotById.price * numDays}
                            </div>
                        </div>

                        <div className="cleaning-fee-section">
                            <div>
                                Cleaning fee
                            </div>

                            <div>
                                ${parseInt(oneSpotById.price * numDays * 0.02)}
                            </div>
                        </div>

                        <div className="service-fee-section">
                            <div>
                                Service fee
                            </div>
                            <div>
                                ${parseInt(oneSpotById.price * numDays * 0.05)}
                            </div>
                        </div>
                        <div>

                        </div>

                        <div className="total-section">
                            <div>
                                Total before taxes
                            </div>
                            <div>
                                ${(oneSpotById.price * numDays + parseInt(oneSpotById.price * numDays * 0.02) + parseInt(oneSpotById.price * numDays * 0.05))}
                            </div>
                        </div>

                    </>
                }
            </form>
        </div>
    )
}


