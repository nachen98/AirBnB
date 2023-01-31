
import React from "react";

export function BookingCardInTrips({ futureBooking }) {

    const formatedDate = (dateStr) => {
        const date = new Date(dateStr)
        const options = { month: 'short', day: 'numeric', year: 'numeric' }
        return date.toLocaleDateString('en-US', options);
    }
    return (
        <div className="future-booking-card-container">
            <div className="booking-card-left">
                <span className="booking-card-site-name">{futureBooking.Spot.name}</span>
                <span className="owner-name">Home hosted by {futureBooking.Spot.ownerInfo.firstName} {futureBooking.Spot.ownerInfo.firstName} </span>
            </div>
            <div className="booking-date-address">
                <div className="booking-date">
                    {formatedDate(futureBooking.startDate) - formatedDate(futureBooking.endDate)}
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
                        <EditBookingModal futureBooking={futureBooking} />
                        <button onClick={() => setShowBookingDeleteModal(true)} id="delete-booking-button">Delete</button>
                        {showBookingDeleteModal && <DeleteBookingModal futureBooking={futureBooking} showBookingDeleteModal={showBookingDeleteModal} setShowBookingDeleteModal={setShowBookingDeleteModal} />}
                    </>
                )}


            </div>
            <img src={futureBooking.Spot.previewImage} className='bookingcard-img' />
        </div>
    )
}