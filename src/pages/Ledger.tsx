import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Card from '../components/Card';
import styles from '../styles/Ledger.module.css';

const columns: GridColDef[] = [
  { field: 'id', headerName: '금전 출납 번호', width: 140 },
  { field: 'name', headerName: '금전 출납 명', width: 200 },
  { field: 'note', headerName: '비고', width: 200 },
  { field: 'createdAt', headerName: '입력일자', width: 180 },
  { field: 'updatedAt', headerName: '수정일자', width: 180 },
];

const rows = [
  {
    id: 'CA001',
    name: '2023년도 금전출납부',
    note: '2023년도 금전출납부',
    createdAt: '2020-01-27 02:47:01.977',
    updatedAt: '2023-01-14 14:38:35.107',
  },
];

function Ledger() {
  const [selected, setSelected] = useState('2023년도 금전출납부 CA001');
  return (
    <section className={styles.ledgerSection} data-ledger-section>
      <Card className={styles.searchCard}>
        <div className={styles.searchTitle}>검색조건</div>
        <div className={styles.searchForm}>
          <label
            htmlFor="ledger-select"
            className={styles.searchLabel}
          >
            금전 출납 번호
          </label>
          <select
            id="ledger-select"
            value={selected}
            onChange={e => setSelected(e.target.value)}
            className={styles.searchSelect}
          >
            <option value="2023년도 금전출납부 CA001">2023년도 금전출납부 CA001</option>
            <option value="2022년도 금전출납부 CA002">2022년도 금전출납부 CA002</option>
          </select>
        </div>
      </Card>
      <div className={styles.dataGridContainer}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight={false}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
          className={styles.dataGrid}
        />
      </div>
    </section>
  );
}

export default Ledger; 