import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
  color: 'blue' | 'gray';
  size: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color, size }) => {
  return (
    <button className={`${classes.button} ${classes[size]} ${classes[color]}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
