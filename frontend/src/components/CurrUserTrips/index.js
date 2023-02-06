import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCurrUserBookings } from "../../store/bookings";
import { dateToStr } from "../BookingCard";
import { BookingCardInTrips } from "../BookingCardInTrips";
import { PreviousBooking } from "../PreviousBooking";
import "./CurrUserTrips.css"
import noTripImage from "../../Images/travel-family.jpg"
export default function CurrUserTrips() {
    const dispatch = useDispatch();
    const history = useHistory()

    const currUser = useSelector(state => state.session.user)
    const currUserBookings = useSelector(state => state.booking.user)

    const [futureBookings, setFutureBookings] = useState([])
    const [previousBookings, setPreviousBookings] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    let futureBookingArr = []
    let previousBookingArr = []

    useEffect(() => {
        dispatch(getCurrUserBookings())
    }, [dispatch])


    useEffect(() => {
        console.log("@@@@@@@@@@@@@@@currUserBooking", currUserBookings)

        const bookingValues = Object.values(currUserBookings)
        console.log("@@@@@@@@@@@@@@@bookingValues", bookingValues)
        if (bookingValues?.length > 0) {
            for (let i = 0; i < bookingValues.length; i++) {
                let individualBooking = bookingValues[i]

                if (new Date(individualBooking.startDate).toISOString().split('T')[0] < new Date().toISOString().split('T')[0]) {
                    previousBookingArr.push(individualBooking)
                } else {
                    futureBookingArr.push(individualBooking)
                }
            }
            setPreviousBookings(previousBookingArr)
            setFutureBookings(futureBookingArr)
            setIsLoaded(true)
        }
    }, [dispatch, currUserBookings])

    useEffect(() => {
        if (!currUser) {
            history.push('/');
        }
    }, [currUser])

    if (Object.keys(currUserBookings).length === 0) return null

    return (
        <div className="trips-page-container">

            <div className="trips-title">
                Trips
            </div>

            {isLoaded && (
                <>
                    <div className="upcoming-title"> Upcoming reservations</div>
                    {futureBookings.map(futureBooking => {
                        return (<BookingCardInTrips key={futureBooking.id} futureBooking={futureBooking} />)
                    })}
                </>
            )}

            {futureBookings.length === 0 && (
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


            {previousBookings.length > 0 && (
                <div className="previous-bookings">
                    {/* <span className="previous-booking-title">Where You've Been</span> */}
                    <div>
                        {previousBookings?.map(previousBooking => <PreviousBooking key={previousBooking.id} previousBooking={previousBooking} />)}
                    </div>
                </div>
            )}
        </div>
    )
}