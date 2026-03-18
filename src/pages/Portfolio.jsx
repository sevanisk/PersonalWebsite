import { useLayoutEffect } from 'react';
import { usePopup } from '../context/PopupContext';
import CES from '../assets/CES2026.jpg';
import GrimEncounters from '../assets/GrimEncounters.png';

export default function AboutMe() {
  const { createPopup, closeAll } = usePopup();

  useLayoutEffect(() => {
    createPopup({
      title: 'SC24',
      children: (
        <div style={{fontFamily: 'Courier New', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, boxSizing: 'border-box' }}>
          Competing in the student cluster competition at SC24, a high-powered computing convention.
          I was responsible for optimizing and parallelizing runs of a molecular dynamics simulation known as NAMD.
          <div className="popup-media">
            <img
              src={CES}
              alt="High Powered Computing"
            />
          </div>
        </div>
      ),
      widthPercent: 30,
      heightPercent: 40,
      xPercent: 15,
      yPercent: 2,
    });

    createPopup({
      title: 'CES 2026',
      children: (
        <div style={{fontFamily: 'Courier New', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, boxSizing: 'border-box' }}>
          <div className="popup-media">
            The Consumer Electronics Show (CES) is the world's largest technology trade show.
            Each year, companies showcase their latest innovations and products across various industries, including consumer electronics, automotive technology, smart home devices, and more.
            <div className="popup-media">
              <img
                src={CES}
                alt="Consumer Electronics Show 2026"
              />
            </div>
          </div>
        </div>
      ),
      widthPercent: 40,
      heightPercent: 23,
      xPercent: 58,
      yPercent: 20,
    });

    createPopup({
      title: 'Grim Encounters',
      children: (
        <div style={{fontFamily: 'Courier New', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, boxSizing: 'border-box' }}>
          I enjoy developing games in my free time! Grim Encounters is a strategy and roguelike game I developed with a team of other students for our college's game jam-- it won best overall, best in art, best in sound, and crowd favorite for the semester!
          More updates are on the way :)
          Check it out at <a href="https://akxgo.itch.io/grim-encounters">this link</a>!
          <div className="popup-media">
            <img
              src={GrimEncounters}
              alt="Grim Encounters"
            />
          </div>
        </div>
      ),
      widthPercent: 40,
      heightPercent: 40,
      xPercent: 38,
      yPercent: 55,
    });

    return () => {
      closeAll();
    };
  }, [createPopup, closeAll]);

  return (
    <div className="portfolio-page">
      <section className="portfolio">
        <h2>Portfolio</h2>
      </section>
    </div>
  );
}