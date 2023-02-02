import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBookingForm from './EditBookingForm.js';
import './EditBooking.css'

export function EditBookingModal({ futureBooking, showBookingEditModal, setShowBookingEditModal}) {

    return(
        <>
           
                { showBookingEditModal && (
                    <Modal onClose={()=>setShowBookingEditModal(false)}>
                        <EditBookingForm setShowBookingEditModal={setShowBookingEditModal} futureBooking={futureBooking} oldStartDate={futureBooking.startDate.split('T')[0]} oldEndDate={futureBooking.endDate.split('T')[0]} />
                    </Modal>
                )}
     
        </>
    )
}
