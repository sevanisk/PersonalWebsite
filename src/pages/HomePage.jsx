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
          <p>Welcome to my personal website! This site is built with React and deployed with AWS Amplify.</p>
          <p><b>UNDER CONSTRUCTION!!</b> check in each day for new updates!!</p>
          <p>You can also check my GitHub to see my changelog :)</p>
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