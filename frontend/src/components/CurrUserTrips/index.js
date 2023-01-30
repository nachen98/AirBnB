import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import booking from "../../../../backend/db/models/booking";
import { getCurrUserBookings } from "../../store/bookings";
import { dateToStr } from "../BookingCard";
import { BookingCardInTrips } from "../BookingCardInTrips";
import { PreviousBooking } from "../PreviousBooking";

export default function CurrUserTrips() {
    const dispatch = useDispatch();
    const history = useHistory()

    const currUser = useSelector(state => state.session.user)
    const currUserBookings = useSelector(state => state.booking.user)
    const [futureBookings, setFutureBookings] = useState([])
    const [previousBookings, setPreviousBookings] = useState([])
    const futureBookingArr = []
    const previousBookingArr = []
    console.log("@@@@@@@@@@@@@@@currUserBooking", currUserBookings )

    const bookingValues = Object.values(currUserBookings)
    console.log("@@@@@@@@@@@@@@@bookingValues", bookingValues )
    // useEffect(() => {
    //     dispatch(getCurrUserBookings())
    // }, [dispatch, currUser])


    useEffect(() =>{
        if(bookingValues?.length > 0){
            for (let individualBooking of bookingValues){
                if (dateToStr(individualBooking.startDate) < new Date().toISOString().split('T')[0]){
                    previousBookingArr.push(individualBooking)
                }else{
                    futureBookingArr.push(individualBooking)
                }
            }
            setPreviousBookings(previousBookingArr)
            setFutureBookings(futureBookingArr)
        }   
    }, [bookingValues])


    useEffect(() => {
        if(!currUser) {
            history.push('/');
        }
    }, [currUser])

    if (Object.keys(currUserBookings).length === 0) return null

    return (
        <div className="trips-page-container">

            <div className="trips-title">
                Trips
            </div>

            <div className="upcoming-reservations">
                {futureBookingArr?.length > 0 && (
                    <>
                    <div className="upcoming-title"> Upcoming reservations</div> 
                    {futureBookingArr.map(booking => <BookingCardInTrips key={booking.id} booking={booking}/>)}
                    </>
                )}

                {futureBookingArr?.length === 0 && (
                    <div className="empty-booking-container">
                        <span className="no-booking-title">No trips booked...yet!</span>
                        <span className="no-booking-message">Time to dust off your bags and start planning your next adventure</span>
                        <button
                        onClick={()=> history.push('/')}
                        >
                            Start searching
                        </button>
                    </div>

                )}
            </div>

            {previousBookingArr.length > 0 && (
                <div className="previous-bookings">
                    <span className="previous-booking-title">Where You've Been</span>
                    <div>
                        {previousBookingArr?.map(previousBooking => <PreviousBooking key = {previousBooking.id} previousBooking={previousBooking}/>)}
                        </div>
                    </div>
            )}

      

        </div>




    )
}