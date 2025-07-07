import React, { useState } from 'react';
import Logo from './Logo';
import Button from './Button';

function Navbar() {
  // 더미 권한 상태: true면 관리자, false면 일반
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 메뉴 항목
  const menu = (isMobile: boolean) => (
    <div className="nav-menu" style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '1.2rem' : '2rem', flexDirection: isMobile ? 'column' : 'row', width: isMobile ? '100%' : undefined }}>
      <a href="#hero" style={{ color: '#1a7e6a', textDecoration: 'none', fontWeight: 500, fontSize: '1.08rem' }}>소개</a>
      <a href="#features" style={{ color: '#1a7e6a', textDecoration: 'none', fontWeight: 500, fontSize: '1.08rem' }}>주요기능</a>
      <a href="#contact" style={{ color: '#1a7e6a', textDecoration: 'none', fontWeight: 500, fontSize: '1.08rem' }}>문의</a>
      {isLoggedIn ? (
        <>
          {isAdmin && <Button style={{ marginLeft: isMobile ? 0 : '1rem' }}>관리자</Button>}
          <Button variant="secondary" style={{ marginLeft: isMobile ? 0 : '1rem' }} onClick={() => setIsLoggedIn(false)}>로그아웃</Button>
        </>
      ) : (
        <Button style={{ marginLeft: isMobile ? 0 : '1rem' }} onClick={() => setIsLoggedIn(true)}>로그인</Button>
      )}
    </div>
  );

  // 모바일 여부 감지
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 700;

  return (
    <nav className="nav-root">
      <Logo />
      {/* 데스크탑 메뉴 */}
      <div className="nav-desktop-menu">{menu(false)}</div>
      {/* 모바일 햄버거 */}
      <button className="nav-hamburger" aria-label="메뉴 열기" onClick={() => setMenuOpen(v => !v)}>
        <svg width="28" height="28" viewBox="0 0 28 28"><rect y="6" width="28" height="2.5" rx="1.2" fill="#1a7e6a"/><rect y="13" width="28" height="2.5" rx="1.2" fill="#1a7e6a"/><rect y="20" width="28" height="2.5" rx="1.2" fill="#1a7e6a"/></svg>
      </button>
      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {menu(true)}
        </div>
      )}
    </nav>
  );
}

export default Navbar; 