import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './BackgroundLayout.css';

export default function BackgroundLayout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-content">
        {children ?? <Outlet />}
      </main>
    </div>
  );
}