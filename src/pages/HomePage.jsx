import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import PopupContainer from '../components/PopupContainer';
import { usePopupManager } from '../hooks/usePopupManager';

export default function HomePage() {
  const { popups, createPopup, closePopup } = usePopupManager();

  useEffect(() => {
    createPopup({
      title: 'Welcome.txt',
      children: (
        <div style={{ padding: '10px', fontFamily: 'Courier New' }}>
          <p>Welcome to my personal website!</p>
          <p>This site is built with React and features Windows 95-style popups.</p>
          <p>Click the X button to close this window, or drag the title bar to move it around.</p>
        </div>
      ),
      width: 450,
      height: 200,
      initialX: 700,
      initialY: 100,
    });
  }, []); // Empty dependency array = runs only once on mount

  return (
    <div className="home-page">
      <Navbar />
      <section className="hero">
        <h1>Pardon my dust. I'm learning React -_-</h1>
      </section>
      <PopupContainer popups={popups} onClosePopup={closePopup} />
    </div>
  );
}