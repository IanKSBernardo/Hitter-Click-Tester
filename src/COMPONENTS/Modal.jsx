import React, { useEffect, useRef } from 'react';
import '../CSS/Modal.css';

const Modal = ({ clickCount, closeModal }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
    return () => {
      if (dialogRef.current) {
        dialogRef.current.close();
      }
    };
  }, []);

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    closeModal();
  };

  return (
    <dialog ref={dialogRef} className="modal">
      <h2>¡Terminó el Test!</h2>
      <p>¡Clickeaste {clickCount} veces!</p>
      <button onClick={handleClose}>Intentar de nuevo</button>
    </dialog>
  );
};

export default Modal;
