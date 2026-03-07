import { useEffect } from 'react';
import { usePopup } from '../context/PopupContext';

export default function HomePage() {
  const { createPopup } = usePopup();

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
      widthPercent: 38,
      heightPercent: 25,
      xPercent: 58,
      yPercent: 12,
    });

    createPopup({
      title: 'cat.png',
      children: (
        <div style={{ padding: '10px', fontFamily: 'Courier New' , textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', height: '100%', minHeight: 0 }}>
          <p>As an apology for the empty pages, please enjoy this photo of my cat.</p>
          <div className="popup-media">
            <img 
              src="/cat_with_tongue.jpg" 
              alt="Cat with tongue"
            />
          </div>
        </div>
      ),
      widthPercent: 20,
      heightPercent: 50,
      xPercent: 34,
      yPercent: 40,
    });
  }, [createPopup]);

  return (
    <>
      <section className="hero">
        <h1>Pardon my dust. I'm learning React -_-</h1>
      </section>
    </>
  );
}