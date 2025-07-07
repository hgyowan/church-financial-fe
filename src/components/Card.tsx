import React from 'react';
import styles from '../styles/Card.module.css';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function Card({ children, className, style }: CardProps) {
  return (
    <div className={[styles.card, className || ''].join(' ')} style={style}>
      {children}
    </div>
  );
}

export default Card; 