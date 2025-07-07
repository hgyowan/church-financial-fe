import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <p>문의: church-finance@email.com | &copy; 2025 상봉교회 재정관리 프로그램</p>
      </div>
    </footer>
  );
}

export default Footer; 