import React, { useState, useEffect } from 'react';
import './App.css';
import Modal from './COMPONENTS/Modal.jsx';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [testStarted, setTestStarted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let timer;
    if (testStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTestStarted(false);
      setShowModal(true);
    }

    return () => clearInterval(timer);
  }, [testStarted, timeLeft]);

  const handleClick = () => {
    if (testStarted) {
      setClickCount((prevCount) => prevCount + 1);
    } else {
      setClickCount(0);
      setTimeLeft(10);
      setTestStarted(true);
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <div className="click-area" onClick={handleClick}>
        <h1>{testStarted ? `${timeLeft}` : 'Click para empezar'}</h1>
      </div>
      {showModal && <Modal clickCount={clickCount} closeModal={closeModal} />}
    </div>
  );
}

export default App;
