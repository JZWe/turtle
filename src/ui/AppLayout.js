import { Outlet } from 'react-router-dom';
import Header from './Header';
import './AppLayout.css';

function AppLayout() {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
