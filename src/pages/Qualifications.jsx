import { useEffect } from 'react';
import { usePopup } from '../context/PopupContext';
import DiplomaPdf from '../assets/Diploma.pdf';

export default function Qualifications() {
  const { createPopup } = usePopup();

  useEffect(() => {
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
      widthPercent: 12,
      heightPercent: 20,
      xPercent: 15,
      yPercent: 2,
    });

  }, [createPopup]);

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