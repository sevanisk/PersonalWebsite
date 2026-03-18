import { useLayoutEffect } from 'react';
import { usePopup } from '../context/PopupContext';
import DiplomaPdf from '../assets/Diploma.pdf';

export default function Qualifications() {
  const { createPopup, closeAll } = usePopup();

  useLayoutEffect(() => {
    createPopup({
      title: 'My Education',
      children: (
        <div style={{fontFamily: 'Courier New', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, boxSizing: 'border-box' }}>
          I have a Bachelors of Science in Computer Science and Applied Mathematics, and minors in Cybersecurity and Statistics.
          <div className="popup-media">
            <a href={DiplomaPdf} download="EvaniskoSophia_Diploma.pdf"><strong>Download My Diploma</strong></a>
          </div>
        </div>
      ),
      widthPercent: 18,
      heightPercent: 25,
      xPercent: 44,
      yPercent: 24,
    });

    return () => {
      closeAll();
    };
  }, [createPopup, closeAll]);

  return (
    <div className="qualifications-page">
      <section className="qualifications">
        <h2>Qualifications</h2>
        <p>
        My degrees and certifications.
        </p>
      </section>
    </div>
  );
}