import React from 'react';
import './UpButton.css'; // Подключаем файл стилей

const UpButton = ({ onClick }) => {
  return (
    <button className="up-button" onClick={onClick}>
      UP
    </button>
  );
};

export default UpButton;