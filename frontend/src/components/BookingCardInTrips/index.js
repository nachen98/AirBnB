
import React, { useState } from "react";
import './BookingCardInTrips.css'
import { useSelector } from "react-redux";
import { EditBookingModal } from '../EditBookingModal';
import { DeleteBookingModal } from '../DeleteBookingModal';

const formatedDate = (dateStr) => {
    let date
    if (typeof dateStr === 'string') {
        date = new Date(dateStr);
    } else if (dateStr instanceof Date) {
        date = dateStr;
    } else {
        console.error('Invalid date input: ', dateStr);
        return;
    }
    date = new Date(Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate() + 1,
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
    ))

    const options = { month: 'short', day: 'numeric', year: 'numeric' }
    return date.toLocaleDateString('en-US', options);
}
export function BookingCardInTrips({ futureBooking }) {

    const currUser = useSelector(state => state.session.user)
    const [numNights, setNumNights] = useState(Math.ceil(((new Date(futureBooking.endDate).getTime()) - (new Date(futureBooking.startDate).getTime())) / 1000 / 60 / 60 / 24))
    const [showBookingDeleteModal, setShowBookingDeleteModal] = useState(false)
    const [showBookingEditModal, setShowBookingEditModal] = useState(false)

    //console.log('futureBooking@@@@@@@@@@@@@@', futureBooking)
    return (

        <div className="future-booking-card-container">
            <div className="booking-card-left">
                <div className="booking-card-left-upper flx-col">
                    <div className="booking-card-site-name">{futureBooking.Spot.name}</div>
                    <div className="owner-name">Home hosted by {futureBooking.Spot.ownerInfo.firstName} {futureBooking.Spot.ownerInfo.lastName} </div>
                </div>

                <div className="booking-card-left-lower flx-row">
                    <div className="booking-date-night-buttons">
                        <div className="booking-dates">
                            <div className="booking-startdate">
                                {formatedDate(futureBooking.startDate)}
                                <div className="dash-sign">
                                    |
                                </div>
                                <div className="booking-enddate">
                                    {formatedDate(futureBooking.endDate)}
                                </div>
                            </div>


                        </div>
                        <div className="num-nights">
                            {numNights} {numNights === 1? 'night' : 'nights'}
                        </div>

                        <div className="edit-delete-booking flx-row-space-btw">
                            {!!currUser && (
                                <>
                                    <button onClick={() => setShowBookingEditModal(true)} className="edit-delete-booking-button cur-poi">Edit</button>
                                    {showBookingEditModal && <EditBookingModal futureBooking={futureBooking} showBookingEditModal={showBookingEditModal} setShowBookingEditModal={setShowBookingEditModal} />}
                                    <button onClick={() => setShowBookingDeleteModal(true)} className="edit-delete-booking-button  cur-poi">Delete</button>
                                    {showBookingDeleteModal && <DeleteBookingModal futureBooking={futureBooking} showBookingDeleteModal={showBookingDeleteModal} setShowBookingDeleteModal={setShowBookingDeleteModal} />}
                                </>
                            )}


                        </div>
                    </div>

                    <div className="booking-full-address">
                        <div className="booking-address">
                            {futureBooking.Spot.address}
                        </div>

                        <div className="booking-city">
                            {futureBooking.Spot.city}
                        </div>
                        <div className="booking-country">
                            {futureBooking.Spot.country}
                        </div>
                    </div>

                </div>

            </div>

            <img src={futureBooking.Spot.previewImage} className='bookingcard-img' />
        </div>

    )
}