import { useLayoutEffect } from 'react';
import { usePopup } from '../context/PopupContext';
import GrandCanyon1 from '../assets/GrandCanyon1.jpg';
import CameraHiding from '../assets/CameraHiding.jpg';

export default function AboutMe() {
  const { createPopup } = usePopup();

  useLayoutEffect(() => {
    createPopup({
      title: 'GrandCanyon1.jpg',
      children: (
        <div style={{fontFamily: 'Courier New', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, boxSizing: 'border-box' }}>
          <div className="popup-media">
            <img
              src={GrandCanyon1}
              alt="Grand Canyon"
            />
          </div>
        </div>
      ),
      widthPercent: 15,
      heightPercent: 29,
      xPercent: 15,
      yPercent: 2,
    });

    createPopup({
      title: 'Grindelwald.jpg',
      children: (
        <div style={{fontFamily: 'Courier New', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, boxSizing: 'border-box' }}>
          <div className="popup-media">
            <img
              src={CameraHiding}
              alt="Camera hiding"
            />
          </div>
        </div>
      ),
      widthPercent: 11,
      heightPercent: 23,
      xPercent: 84,
      yPercent: 13,
    });

    createPopup({
      title: 'About_Me',
      children: (
        <div style={{fontFamily: 'Courier New'}} className="pop-up-inner border-faint text-box">
          I am a resourceful, ambitious, and adventurous embedded junior software engineer with experience in real-time operating systems and developing low-level drivers. 
          I graduated May of 2025 from Texas A&M with a degree in Computer Science and Applied Mathematics, but just because I pursue analytical
          fields doesn't mean I don't have a creative side! <br /><br />
          In my free time, I enjoy DMing Dungeons and Dragons games with my friends,
          writing science fiction novels, playing my bass, and nerding out over high 
          fantasy games like Baldur's Gate 3 and Elden Ring. <br /><br />
          I also love to spend time in nature! Hiking has always been a great way for me to challenge myself and 
          see more of the world. Some of my recent conquests include hiking down to the bottom of Grand Canyon (and worse, back up) and Mount Olympus in Greece --
          and just next month I'm hiking up an active volcano! I hope to one day climb all of the Seven Summits, 
          but that's still a LONG way off. <br /><br />
          All my time in nature has made me an avid animal person. I have a cat named Scout 
          (after the Team Fortress 2 class or the main character of To Kill A Mockingbird, whichever you think is more impressive), 
          and another named Mouse (seen pictured on the home page). <br /><br />
        </div>
      ),
      widthPercent: 30,
      heightPercent: 50,
      xPercent: 34,
      yPercent: 18,
    });

    createPopup({
      title: 'FAST_FACTS!',
      children: (
        <div style={{fontFamily: 'Courier New'}} className="pop-up-inner border-faint text-box">
          <strong>Personality type:</strong> INTP <br /> <br />
          <strong>Favorite Books:</strong> Lockwood &amp; Co., Katabasis, The Minecraft Redstone Handbook<br /> <br />
          <strong>Currently Reading:</strong> Red Rising by Pierce Brown, The Tainted Cup<br /> <br />
          <strong>Favorite Band:</strong> The Strokes <br /> <br />
          <strong>Favorite Song:</strong> Why Are Sundays So Depressing<br /><br /> 
          <strong>Favorite Movie:</strong> Pride and Prejudice and Zombies <br /> <br />
          <strong>Bucket List Items: </strong>Go skydiving, publish a book, learn to rock climb <br /><br />
          <strong>Mother's Maiden Name:</strong> <strong>[REDACTED]</strong><br /> <br />
        </div>
      ),
      widthPercent: 22,
      heightPercent: 55,
      xPercent: 70,
      yPercent: 42,
    });

  }, [createPopup]);

  return (
    <div className="about-page">
        <section className="about">
        </section>
    </div>
  );
}