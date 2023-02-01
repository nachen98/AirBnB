
import React, { useState } from "react";
import './BookingCardInTrips.css'
import { useSelector } from "react-redux";
import { EditBookingModal } from '../EditBookingModal';
import { DeleteBookingModal } from '../DeleteBookingModal';

const formatedDate = (dateStr) => {
    
    const date = new Date(dateStr)
    const options = { month: 'short', day: 'numeric', year: 'numeric' }
    return date.toLocaleDateString('en-US', options);
}
export function BookingCardInTrips({ futureBooking }) {

    const currUser = useSelector(state=> state.session.user)
    const [showBookingDeleteModal, setShowBookingDeleteModal] = useState(false)
    const [showBookingEditModal, setShowBookingEditModal] = useState(false)
    return (
        <div className="future-booking-card-container">
            <div className="booking-card-left">
                <div className="booking-card-site-name">{futureBooking?.Spot.name}</div>
                <div className="owner-name">Home hosted by {futureBooking.Spot.ownerInfo.firstName} {futureBooking.Spot.ownerInfo.lastName} </div>
            </div>
            <div className="booking-date-address">
                <div className="booking-date">
                    {formatedDate(futureBooking.startDate)} - {formatedDate(futureBooking.endDate)}
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
            <div className="edit-delete-booking">
                {!!currUser && (
                    <>
                        <button onClick={() => setShowBookingEditModal(true)} id="edit-booking-button">Edit</button>
                        {showBookingEditModal && <EditBookingModal futureBooking={futureBooking}  showBookingEditModal={showBookingEditModal} setShowBookingEditModal={setShowBookingEditModal}/>}
                        <button onClick={() => setShowBookingDeleteModal(true)} id="delete-booking-button">Delete</button>
                        {showBookingDeleteModal && <DeleteBookingModal futureBooking={futureBooking} showBookingDeleteModal={showBookingDeleteModal} setShowBookingDeleteModal={setShowBookingDeleteModal} />}
                    </>
                )}


            </div>
            <img src={futureBooking.Spot.previewImage} className='bookingcard-img' />
        </div>
    )
}