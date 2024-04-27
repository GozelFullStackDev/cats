import React from 'react';
import './Header.css'; // Подключаем файл стилей

const Header = ({ title }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;