import React from 'react';
import styles from './button.module.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
  color: 'blue' | 'gray';
  size: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color, size }) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[color]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;