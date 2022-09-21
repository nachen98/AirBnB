import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSpotForm from './EditSpotForm.js';

function EditSpotModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit your spot</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditSpotForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditSpotModal;