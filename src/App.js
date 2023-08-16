import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import TablePage from './page/TablePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="siteinfo" />} />
          <Route path="instruction" element={<TablePage />} />
          <Route path="price" element={<TablePage />} />
          <Route path="siteinfo" element={<TablePage />} />
          <Route path="newmessage" element={<TablePage />} />
          <Route path="activity" element={<TablePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
