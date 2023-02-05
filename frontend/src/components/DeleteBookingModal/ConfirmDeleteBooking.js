import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteBooking } from "../../store/bookings"
import "./ConfirmDeleteBooking.css"

export function ConfirmDeleteBooking({ futureBooking, setShowBookingDeleteModal }) {

    const dispatch = useDispatch()
    const history = useHistory()

    const deleteBookingButton = async (e) => {

        e.preventDefault();
        await dispatch(deleteBooking(futureBooking.id))
        history.push('/mytrips')
    }

    const cancelDeleteButton = async (e) => {
        e.preventDefault()
        setShowBookingDeleteModal(false)
    }

    return (
        <div className="delete-modal-container">
            <div className="delete-header">
                Delete Booking
            </div>
            <div className="delete-messages">
                Are you sure you want to cancel this booking?
            </div>
            <div className="confirm-delete-comments-buttons flx-row-space-btw">
                <button className="cancel-delete-comment-and-booking cur-poi" onClick={cancelDeleteButton}>Cancel</button>
                <button  className="confirm-delete-comment-and-booking cur-poi" onClick={deleteBookingButton}>Delete</button>

            </div>
        </div>

    )
}