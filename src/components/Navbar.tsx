import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import LoginModal from './LoginModal';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  // 더미 권한 상태: true면 관리자, false면 일반
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    // 실제 로그인 로직 구현
    console.log('로그인 시도:', email, password);
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleGoogleLogin = () => {
    // Google 로그인 로직 구현
    console.log('Google 로그인 시도');
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleEmailSignup = (email: string) => {
    // 이메일 인증 가입 로직 구현
    console.log('이메일 인증 가입 시도:', email);
  };

  // 메뉴 항목
  const menu = (isMobile: boolean) => (
    <div className={isMobile ? styles.navMenuMobile : styles.navMenu}>
      <a href="#hero" className={styles.navLink}>소개</a>
      <a href="#features" className={styles.navLink}>주요기능</a>
      <a href="#contact" className={styles.navLink}>문의</a>
      <Button className={isMobile ? styles.navButtonMobile : styles.navButton} onClick={() => navigate('/ledger')}>시작하기</Button>
      {isLoggedIn ? (
        <>
          {isAdmin && <Button className={isMobile ? styles.navButtonMobile : styles.navButton}>관리자</Button>}
          <Button variant="secondary" className={isMobile ? styles.navButtonMobile : styles.navButton} onClick={() => setIsLoggedIn(false)}>로그아웃</Button>
        </>
      ) : (
        <Button className={isMobile ? styles.navButtonMobile : styles.navButton} onClick={() => setIsLoginModalOpen(true)}>로그인</Button>
      )}
    </div>
  );

  // 모바일 여부 감지
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 700;

  return (
    <>
      <nav className={styles.navRoot}>
        <Logo />
        {/* 데스크탑 메뉴 */}
        <div className={styles.navDesktopMenu}>{menu(false)}</div>
        {/* 모바일 햄버거 */}
        <button className={styles.navHamburger} aria-label="메뉴 열기" onClick={() => setMenuOpen(v => !v)}>
          <svg width="28" height="28" viewBox="0 0 28 28"><rect y="6" width="28" height="2.5" rx="1.2" fill="#1a7e6a"/><rect y="13" width="28" height="2.5" rx="1.2" fill="#1a7e6a"/><rect y="20" width="28" height="2.5" rx="1.2" fill="#1a7e6a"/></svg>
        </button>
        {/* 모바일 메뉴 */}
        {menuOpen && (
          <div className={styles.navMobileMenu}>
            {menu(true)}
          </div>
        )}
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
        onGoogleLogin={handleGoogleLogin}
        onEmailSignup={handleEmailSignup}
      />
    </>
  );
}

export default Navbar; 