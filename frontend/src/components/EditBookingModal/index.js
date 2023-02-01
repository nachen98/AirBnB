import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBookingForm from './EditBookingForm.js';
import './EditBooking.css'

function EditBookingModal({ futureBooking }) {
    const [showModal, setShowModal] = useState(false)

    return(
        <>
            <button onClick={()=>setShowModal(true)} id="edit-booking-button">
                {showModal && (
                    <Modal onClose={()=>setShowModal(false)}>
                        <EditBookingForm setShowModal={setShowModal} futureBooking={futureBooking} oldStartDate={futureBooking.startDate} oldEndDate={futureBooking.endDate} />
                    </Modal>
                )}

            </button>
        </>
    )
}