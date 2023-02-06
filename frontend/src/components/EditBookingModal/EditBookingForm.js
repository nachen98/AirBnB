import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./EditBooking.css"
import { updateBooking } from '../../store/bookings';
import { getCurrUserBookings } from '../../store/bookings';

export default function EditBookingForm({ futureBooking, setShowBookingEditModal, oldStartDate, oldEndDate }) {
    const dispatch = useDispatch();
    const history = useHistory()

    const currUser = useSelector(state => state.session.user)
    const today = new Date().toISOString().split('T')[0];

    const [startDate, setStartDate] = useState(oldStartDate)
    const [endDate, setEndDate] = useState(oldEndDate)
    const [numDays, setNumDays] = useState(Math.floor(((new Date(oldEndDate).getTime()) - (new Date(oldStartDate).getTime())) / 1000 / 60 / 60 / 24))
    const [errors, setErrors] = useState([])
    const [total, setTotal] = useState(futureBooking.Spot.price * numDays + parseInt(futureBooking.Spot.price * numDays * 0.02) + parseInt(futureBooking.Spot.price * numDays * 0.05))

    useEffect(() => {
        const errors = [];


        if (startDate < today || endDate < today) {
            errors.push("Please book dates after today.")
        }

        if (startDate >= endDate) {
            errors.push("End date has to be at least 1 day after the start date.")
        }

        setErrors(errors)
    }, [startDate, endDate])

    useEffect(() => {
        setNumDays(Math.floor(((new Date(endDate).getTime()) - (new Date(startDate).getTime())) / 1000 / 60 / 60 / 24));
    }, [startDate, endDate])

    useEffect(() => {
        setTotal(futureBooking.Spot.price * numDays + parseInt(futureBooking.Spot.price * numDays * 0.02) + parseInt(futureBooking.Spot.price * numDays * 0.05));
    }, [numDays])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedBooking = { startDate, endDate }

        dispatch(updateBooking(futureBooking.id, updatedBooking))
            .then(async (res) => {
                console.log("res.ok#################", res.ok)
                if (res.ok) {
                    setErrors([])
                    setShowBookingEditModal(false)
                    dispatch(getCurrUserBookings())
                    setNumDays(Math.floor(((new Date(endDate).getTime()) - (new Date(startDate).getTime())) / 1000 / 60 / 60 / 24));
                    // history.push('/mytrips')
                } else {

                    const result = await res.json()

                    const errors = []

                    if (result && result.message) {
                        errors.push(result.message)

                    }
                    setErrors(errors)
                }

            })
    }
    return (
        <div className='edit-booking-container flx-col-align-ctr'>

            <div className='edit-booking-title'>
                Update Booking for {futureBooking.Spot.name}

            </div>
            <form onSubmit={handleSubmit} className="booking-form">
                {errors.length > 0 && (<div className="error-message-create-booking ctr-algn-text">

                    {errors.map((error, idx) => <div key={idx}>{error}</div>)}

                </div>)}

                {(!currUser || (currUser && currUser.id !== futureBooking.Spot.ownerId)) &&
                    <>
                        <div className="booking-dates-container flx-col">
                            <div className="checkin-checkout-container flx-row">
                                <div className="check-in-container  cur-poi">
                                    <div className="check-in-inner-container flx-col-align-start-justify-ctr">
                                        <span className='check-in-label'>CHECK-IN</span>
                                        <input
                                            type="date"
                                            className="check-in-date"
                                            value={startDate}
                                            min={today}
                                            required
                                            onChange={e => setStartDate(e.target.value)}

                                        />
                                    </div>
                                </div>
                                <div className="check-in-container cur-poi">
                                <div className="check-in-inner-container flx-col-align-start-justify-ctr">
                                    <span className='check-in-label'>CHECK-OUT</span>
                                    <input
                                        type="date"
                                        className="check-in-date"
                                        value={endDate}
                                        min={startDate}
                                        required
                                        onChange={e => setEndDate(e.target.value)}

                                    />
                                  </div>
                                </div>
                            </div>

                            <button className="reserve-button cur-poi"
                                type="submit"

                                disabled={errors.length > 0}
                            >
                                Confirm
                            </button>


                        </div>
                        <div className='not-charging-message ctr-algn-text'>You won't be charged yet</div>
                        <div className="pricing-info flx-row-space-btw">
                            <div className="text-deco">
                                ${futureBooking.Spot.price} x {numDays} {numDays === 1? 'night' : 'nights'}
                            </div>

                            <div>
                                ${futureBooking.Spot.price * numDays}
                            </div>
                        </div>

                        <div className="pricing-info flx-row-space-btw">
                            <div className="text-deco">
                                Cleaning fee
                            </div>

                            <div>
                                ${parseInt(futureBooking.Spot.price * numDays * 0.02)}
                            </div>
                        </div>

                        <div className="pricing-info flx-row-space-btw">
                            <div className="text-deco">
                                Service fee
                            </div>
                            <div>
                                ${parseInt(futureBooking.Spot.price * numDays * 0.05)}
                            </div>
                        </div>
                        <div>

                        </div>

                        <div className="total-section flx-row-space-btw">
                            <div>
                                Total before taxes
                            </div>
                            <div>
                                ${(futureBooking.Spot.price * numDays + parseInt(futureBooking.Spot.price * numDays * 0.02) + parseInt(futureBooking.Spot.price * numDays * 0.05))}
                            </div>
                        </div>

                    </>
                }
            </form>
        </div>

    )

}
