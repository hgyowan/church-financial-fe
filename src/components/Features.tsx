import Card from './Card';

function Features() {
  const features = [
    {
      title: '수입/지출 관리',
      desc: '모든 재정 흐름을 한눈에 파악하고, 투명하게 관리하세요.',
    },
    {
      title: '보고서 자동 생성',
      desc: '월별/연도별 보고서를 클릭 한 번으로 생성할 수 있습니다.',
    },
    {
      title: '권한별 접근 제어',
      desc: '담당자, 회계, 목회자 등 역할별로 안전하게 접근을 제한합니다.',
    },
    {
      title: '데이터 백업',
      desc: '중요한 재정 데이터를 안전하게 백업하고 복원할 수 있습니다.',
    },
  ];
  // 2개씩 나누기
  const rows = [features.slice(0,2), features.slice(2,4)];
  return (
    <section id="features" style={{ width: '100%', maxWidth: 1100, margin: '0 auto 2.5rem auto' }}>
      <h2 style={{ fontSize: '1.7rem', fontWeight: 700, color: '#1a7e6a', textAlign: 'center', marginBottom: '2rem' }}>주요 기능</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
        {rows.map((row, i) => (
          <div key={i} style={{ display: 'flex', gap: '2rem', justifyContent: 'center', width: '100%' }}>
            {row.map((item) => (
              <Card key={item.title}>
                <h3 style={{ fontSize: '1.13rem', fontWeight: 600, color: '#1a7e6a', marginBottom: '0.7rem', letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p style={{ fontSize: '1.01rem', color: '#334155', margin: 0 }}>{item.desc}</p>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features; 