import React from 'react';

function Logo() {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="16" cy="26" rx="12" ry="4" fill="#b2e0db"/>
        <rect x="10" y="14" width="12" height="8" rx="2" fill="#fff" stroke="#1a7e6a" strokeWidth="1.5"/>
        <polygon points="16,7 22,14 10,14" fill="#1a7e6a"/>
        <rect x="14.2" y="17" width="3.6" height="5" rx="1.2" fill="#b2e0db" stroke="#1a7e6a" strokeWidth="1"/>
        <rect x="15.2" y="10.5" width="1.6" height="3.5" rx="0.7" fill="#fff" stroke="#1a7e6a" strokeWidth="0.7"/>
      </svg>
      <span style={{ fontWeight: 700, fontSize: '1.25rem', color: '#1a7e6a', letterSpacing: '-0.01em' }}>
        교회 재정관리
      </span>
    </span>
  );
}

export default Logo; 