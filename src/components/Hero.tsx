import styles from '../styles/Hero.module.css';

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.title}>교회 재정 관리 시스템</h1>
      <p className={styles.subtitle}>교회 재정의 투명성과 효율성을 높여주는 올인원 솔루션</p>
      <div className={styles.intro}>
        교회 재정 관리 시스템은 수입과 지출 내역을 쉽고 안전하게 기록할 수 있습니다.<br />
        다양한 보고서와 권한별 접근 제어로, 누구나 안심하고 사용할 수 있습니다.
      </div>
    </section>
  );
}

export default Hero; 