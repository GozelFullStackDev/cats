import React from 'react';
import './Input.css'; // Подключаем файл стилей

const Input = ({ value, onChange }) => {
  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
