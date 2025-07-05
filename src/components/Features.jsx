function Features() {
  return (
    <section className="features" id="features">
      <h2>주요 기능</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <h3>수입/지출 관리</h3>
          <p>모든 재정 흐름을 한눈에 파악하고, 투명하게 관리하세요.</p>
        </div>
        <div className="feature-card">
          <h3>보고서 자동 생성</h3>
          <p>월별/연도별 보고서를 클릭 한 번으로 생성할 수 있습니다.</p>
        </div>
        <div className="feature-card">
          <h3>권한별 접근 제어</h3>
          <p>담당자, 회계, 목회자 등 역할별로 안전하게 접근을 제한합니다.</p>
        </div>
        <div className="feature-card">
          <h3>데이터 백업</h3>
          <p>중요한 재정 데이터를 안전하게 백업하고 복원할 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
}

export default Features; 