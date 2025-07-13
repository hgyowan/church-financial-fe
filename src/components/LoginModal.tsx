import React, { useState, useEffect } from 'react';
import styles from '../styles/LoginModal.module.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
  onGoogleLogin: () => void;
  onEmailSignup: (email: string) => void;
}

function LoginModal({ isOpen, onClose, onLogin, onGoogleLogin, onEmailSignup }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('이메일과 비밀번호를 입력해주세요.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('올바른 이메일 형식을 입력해주세요.');
      return;
    }

    if (isSignup) {
      // 이메일 인증 가입
      onEmailSignup(email);
      setSuccess('인증 이메일이 발송되었습니다. 이메일을 확인해주세요.');
    } else {
      // 로그인
      onLogin(email, password);
    }
  };

  const handleGoogleLogin = () => {
    setError('');
    onGoogleLogin();
  };

  const handleEmailSignup = () => {
    setError('');
    setSuccess('');
    setIsSignup(true);
  };

  const handleBackToLogin = () => {
    setError('');
    setSuccess('');
    setIsSignup(false);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose} aria-label="닫기">
          ×
        </button>
        
        <h2 className={styles.title}>
          {isSignup ? '회원가입' : '로그인'}
        </h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              이메일
            </label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              className={styles.input}
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className={styles.error}>{error}</div>}
          {success && <div className={styles.success}>{success}</div>}

          <button type="submit" className={styles.loginButton}>
            {isSignup ? '인증 이메일 발송' : '로그인'}
          </button>
        </form>

        <div className={styles.divider}>
          <span>또는</span>
        </div>

        <button className={styles.socialButton} onClick={handleGoogleLogin}>
          <svg className={styles.googleIcon} viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google로 {isSignup ? '가입하기' : '로그인'}
        </button>

        <div className={styles.footer}>
          {isSignup ? (
            <>
              이미 계정이 있으신가요?{' '}
              <button 
                onClick={handleBackToLogin}
                style={{ background: 'none', border: 'none', color: '#1a7e6a', textDecoration: 'underline', cursor: 'pointer', fontWeight: 500 }}
              >
                로그인하기
              </button>
            </>
          ) : (
            <>
              계정이 없으신가요?{' '}
              <button 
                onClick={handleEmailSignup}
                style={{ background: 'none', border: 'none', color: '#1a7e6a', textDecoration: 'underline', cursor: 'pointer', fontWeight: 500 }}
              >
                회원가입
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginModal; 