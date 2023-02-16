import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCurrUserBookings } from "../../store/bookings";
import { BookingCardInTrips } from "../BookingCardInTrips";
import { PreviousBooking } from "../PreviousBooking";
import "./CurrUserTrips.css"
import noTripImage from "../../Images/travel-family.jpg"
export default function CurrUserTrips() {
    const dispatch = useDispatch();
    const history = useHistory()

    const currUser = useSelector(state => state.session.user)
    const currUserBookings = useSelector(state => state.booking.user)
    const bookingValues = Object.values(currUserBookings)

    useEffect(() => {
        dispatch(getCurrUserBookings())
    }, [dispatch])


    let futureBookingArr = []
    let previousBookingArr = []


    for (let i = 0; i < bookingValues.length; i++) {
        let individualBooking = bookingValues[i]

        if (new Date(individualBooking.startDate).toISOString().split('T')[0] < new Date().toISOString().split('T')[0]) {
            previousBookingArr.push(individualBooking)
        } else {
            futureBookingArr.push(individualBooking)
        }
    }


    useEffect(() => {
        if (!currUser) {
            history.push('/');
        }
    }, [currUser])

    //if (Object.keys(currUserBookings).length === 0) return null

    return (
        <div className="trips-page-container">

            <div className="trips-title">
                Trips
            </div>

            <div className="upcoming-title"> Upcoming reservations</div>
            {futureBookingArr.map(futureBooking => {
                return (<BookingCardInTrips key={futureBooking.id} futureBooking={futureBooking} />)
            })}

            {(futureBookingArr.length === 0) && (
                <div className="empty-booking-container flx-row-space-btw-no-aln-ctr ">
                    <div className="no-trip-card-left">
                        <i class="fa-solid fa-hand-sparkles fa-3x"></i>
                        <div className="no-booking-title">No trips booked...yet!</div>
                        <div className="no-booking-message">Time to dust off your bags and start planning your next adventure</div>
                        <button className="start-searching-button cur-poi"
                            onClick={() => history.push('/')}
                        >
                            Start searching
                        </button>
                    </div>
                    <img src={noTripImage} className="bookingcard-img"></img>


                </div>

            )}



            {previousBookingArr.length > 0 && (
                <div className="previous-bookings">
                    {/* <span className="previous-booking-title">Where You've Been</span> */}
                    <div>
                        {previousBookingArr.map(previousBooking => <PreviousBooking key={previousBooking.id} previousBooking={previousBooking} />)}
                    </div>
                </div>
            )}
        </div>
    )
}