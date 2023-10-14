// Modal.js
import React from 'react';
import Modal from 'react-modal';
const customStyles = {
    overlay: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
    },
    content: {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
      maxWidth: '80%',
      maxHeight: '80%',
      padding: '20px',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: 'white',
      overflow: 'auto',
    },
  };

Modal.setAppElement('#root'); // Set the root element for accessibility

const MyModal = ({ isOpen, closeModal, data }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={data.image} style={{ width: '500px', height: '350px' }} alt="Modal Image"  className="centered-image"  />

      <h2>{data?.name}</h2>
      <p>{data?.about}.</p>
      <button onClick={closeModal} className="close-button" >Close Modal</button>
    </Modal>
  );
};

export default MyModal;
