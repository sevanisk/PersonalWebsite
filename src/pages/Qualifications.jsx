import { useLayoutEffect } from 'react';
import { usePopup } from '../context/PopupContext';
import Graduated from '../assets/IGraduated.jpg';
import DiplomaPdf from '../assets/Diploma.pdf';
import ResumePdf from '../assets/Evanisko_Sophia_2026_Software.pdf';

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
      heightPercent: 20,
      xPercent: 44,
      yPercent: 24,
    });

    createPopup({
      title: 'Resume',
      children: (
        <div style={{fontFamily: 'Courier New', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, boxSizing: 'border-box' }}>
          See my resume for more details on my education, experience, and skills!
          <div className="popup-media">
            <a href={ResumePdf} download="EvaniskoSophia_Resume.pdf"><strong>Download My Resume</strong></a>
          </div>
        </div>
      ),
      widthPercent: 18,
      heightPercent: 20,
      xPercent: 70,
      yPercent: 50,
    });

    createPopup({
      title: 'I Graduated!',
      children: (
        <div style={{fontFamily: 'Courier New', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, boxSizing: 'border-box' }}>
          <div className="popup-media">
            <img
              src={Graduated}
              alt="I Graduated!"
            />
          </div>
        </div>
      ),
      widthPercent: 22,
      heightPercent: 48,
      xPercent: 16,
      yPercent: 45,
    });

    createPopup({
      title: 'International Engineering',
      children: (
        <div style={{fontFamily: 'Courier New', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, boxSizing: 'border-box' }}>
          I also obtained a certificate in International Engineering, which included courses in global engineering practices, cross-cultural communication, and international project management.
        </div>
      ),
      widthPercent: 18,
      heightPercent: 20,
      xPercent: 76,
      yPercent: 20,
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