import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateSpotForm from './CreateSpotForm.js';

function CreateSpotModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="host-button">Become a Host</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSpotForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CreateSpotModal;