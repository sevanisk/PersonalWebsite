import { useLayoutEffect } from 'react';
import { usePopup } from '../context/PopupContext';

export default function AboutMe() {
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
      heightPercent: 17,
      xPercent: 76,
      yPercent: 16,
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
      heightPercent: 16,
      xPercent: 34,
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
      heightPercent: 30,
      xPercent: 70,
      yPercent: 42,
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
