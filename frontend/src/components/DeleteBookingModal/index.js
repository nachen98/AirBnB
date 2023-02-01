import React from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import { ConfirmDeleteBooking } from './ConfirmDeleteBooking';

export function DeleteBookingModal({ futureBooking, showBookingDeleteModal, setShowBookingDeleteModal }) {
    const sessionUser = useSelector((state) => state.session.user);
    if (!sessionUser) {
        return null;
    }

    return (
        <>
            {showBookingDeleteModal && (
                <Modal onClose={() => setShowBookingDeleteModal(false)}>
                    <ConfirmDeleteBooking futureBooking={futureBooking} setShowBookingDeleteModal={setShowBookingDeleteModal} />
                </Modal>
            )}

        </>
    );
}


