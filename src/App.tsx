import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Ledger from './pages/Ledger';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <MainLayout>
          <Home />
        </MainLayout>
      } />
      <Route path="/ledger" element={
        <MainLayout>
          <Ledger />
        </MainLayout>
      } />
    </Routes>
  );
}

export default App; 