import React from 'react';
import styles from '../styles/Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  className?: string;
  style?: React.CSSProperties;
};

function Button({ children, onClick, type = 'button', variant = 'primary', className, style }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        styles.btn,
        variant === 'secondary' ? styles.secondary : '',
        className || '',
      ].join(' ')}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button; 