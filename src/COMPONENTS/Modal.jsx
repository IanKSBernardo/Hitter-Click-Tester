import React from 'react';
import '../CSS/Modal.css';

const Modal = ({ clickCount, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>¡Termino el Test!</h2>
        <p>Clickeaste {clickCount} veces!</p>
        <button onClick={closeModal}>Intentar de nuevo</button>
      </div>
    </div>
  );
};

export default Modal;
