import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./EditBooking.css"
import { updateBooking } from '../../store/bookings';
import { getCurrUserBookings } from '../../store/bookings';

export default function EditBookingForm ({ futureBooking, setShowModal, oldStartDate, oldEndDate }){
    const dispatch = useDispatch();
    const history = useHistory()

    const currUser = useSelector(state=> state.session.user)
    const today = new Date().toISOString().split('T')[0];
    console.log("@@@@@@@@@@@@@@@@@@@@@oldStartDate", oldStartDate)
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

        if (startDate > endDate) {
            errors.push("End date cannot be earlier than start date.")
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

                    console.log("##############################gets here")
                    setErrors([])
                    setShowModal(false)
                    dispatch(getCurrUserBookings())
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
                    setErrors(errors)
                }

            })
    }
    return (
        <div className='edit-booking-container'>
            <div className='edit-booking-title'>
                Update Booking for {futureBooking.Spot.name}
            </div>
            <form onSubmit={handleSubmit} className="booking-form">
                {errors.length > 0 && (<div className="error-message-create-booking">

                    {errors.map((error, idx) => <div key={idx}>{error}</div>)}

                </div>)}

                {(!currUser || (currUser && currUser.id !== futureBooking.Spot.ownerId)) &&
                    <>
                        <div className="booking-dates-container">
                            <div className="check-in-container">
                                <span className='check-in-lable'>CHECK-IN</span>
                                <input
                                    type="date"
                                    id="check-in-date"
                                    value={startDate}
                                    min={today}
                                    required
                                    onChange={e => setStartDate(e.target.value)}
                   
                                />
                            </div>
                            <div className="check-out-container">
                                <span className='check-out-lable'>CHECK-OUT</span>
                                <input
                                    type="date"
                                    id="check-out-date"
                                    value={endDate}
                                    min={startDate}
                                    required
                                    onChange={e => setEndDate(e.target.value)}

                                />
                            </div>


                            <button className="reserve-button"
                                type="submit"

                                disabled={errors.length > 0}
                            >
                                Confirm
                            </button>


                        </div>
                        <span className='not-charging-message'>You won't be charged yet</span>
                        <div className="reserved-nights-section">
                            <div>
                                {futureBooking.Spot.price} x {numDays} nights
                            </div>

                            <div>
                                {futureBooking.Spot.price * numDays}
                            </div>
                        </div>

                        <div className="cleaning-fee-section">
                            <div>
                                Cleaning fee
                            </div>

                            <div>
                                ${parseInt(futureBooking.Spot.price * numDays * 0.02)}
                            </div>
                        </div>

                        <div className="service-fee-section">
                            <div>
                                Service fee
                            </div>
                            <div>
                                ${parseInt(futureBooking.Spot.price * numDays * 0.05)}
                            </div>
                        </div>
                        <div>

                        </div>

                        <div className="total-section">
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
