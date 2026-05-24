import { useLayoutEffect } from 'react';
import { usePopup } from '../context/PopupContext';
import { getImageUrl } from '../utils/imageCdn';
import City from '../assets/city.png';
import Sunset from '../assets/Sunbeam.JPG';

export default function ContactMe() {
  const { createPopup, closeAll } = usePopup();

  useLayoutEffect(() => {
    createPopup({
      title: 'LinkedIn',
      children: (
        <div style={{fontFamily: 'Courier New'}} className="pop-up-inner border-faint text-box">
          See my professional experience and endorsements on LinkedIn.
          <br /><br />
          <a href="https://www.linkedin.com/in/sophiaevanisko/">LinkedIn</a>
        </div>
      ),
      widthPercent: 25,
      heightPercent: 22,
      xPercent: 21,
      yPercent: 21,
    });

    createPopup({
      title: 'Github',
      children: (
        <div style={{fontFamily: 'Courier New'}} className="pop-up-inner border-faint text-box">
          See my coding projects and contributions on GitHub. I'm always working on something new!
          <br /><br />
          <a href="https://github.com/sevanisk">GitHub</a>
        </div>
      ),
      widthPercent: 20,
      heightPercent: 24,
      xPercent: 76,
      yPercent: 12,
    });

    createPopup({
      title: 'Instagram',
      children: (
        <div style={{fontFamily: 'Courier New'}} className="pop-up-inner border-faint text-box">
          See my photos (mostly just places I'm hiking, if I'm honest).
          <br /><br />
          <a href="https://www.instagram.com/sophiaevanisko/">Instagram</a>
        </div>
      ),
      widthPercent: 18,
      heightPercent: 20,
      xPercent: 30,
      yPercent: 60,
    });

    createPopup({
      title: 'Reach Me At',
      children: (
        <div style={{fontFamily: 'Courier New'}} className="pop-up-inner border-faint text-box">
          Reach me via email for any inquiries or collaborations!
          <br /><br />
          <a href="mailto:sevanisko04@gmail.com">Email Me</a>
          <br /><br />
          Phone: (571) 521-9966
        </div>
      ),
      widthPercent: 22,
      heightPercent: 20,
      xPercent: 70,
      yPercent: 42,
    });

    createPopup({
      title: 'City',
      variant: 'image',
      children: (
        <div style={{fontFamily: 'Courier New', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, boxSizing: 'border-box' }}>
          <div className="popup-media">
            <img
              src={getImageUrl('/assets/city.png', City)}
              alt="City"
            />
          </div>
        </div>
      ),
      widthPercent: 20,
      heightPercent: 20,
      xPercent: 48,
      yPercent: 40,
    });

    createPopup({
      title: 'Sunset.jpg',
      children: (
        <div style={{fontFamily: 'Courier New', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, boxSizing: 'border-box' }}>
          <div className="popup-media">
            <img
              src={getImageUrl('/assets/Sunbeam.JPG', Sunset)}
              alt="Sunset"
            />
          </div>
        </div>
      ),
      widthPercent: 32,
      heightPercent: 30,
      xPercent: 60,
      yPercent: 66,
    });

    return () => {
      closeAll();
    };
  }, [createPopup, closeAll]);

return (
    <div className="contact-page">
      <section className="contact">
        <h2>Get In Touch</h2>
        <div className="social-links">
        </div>
      </section>
    </div>
  );
}
