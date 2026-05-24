import { useLayoutEffect } from 'react';
import { usePopup } from '../context/PopupContext';
import usePageMeta from '../hooks/usePageMeta';

export default function CompSci() {
  const { createPopup, closeAll } = usePopup();

  usePageMeta({
    title: 'Computer Science Experience - Sophia Evanisko',
    description: 'Learn about Sophia\'s computer science experience and projects.',
  });

  useLayoutEffect(() => {
    createPopup({
      title: 'Embedded Systems',
      children: (
        <div style={{fontFamily: 'Courier New', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, boxSizing: 'border-box' }}>
          Green Hills Software
        </div>
      ),
      widthPercent: 18,
      heightPercent: 20,
      xPercent: 44,
      yPercent: 24,
    });

    createPopup({
      title: 'Backend Development',
      children: (
        <div style={{fontFamily: 'Courier New', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, boxSizing: 'border-box' }}>
          USAA Software Engineering
        </div>
      ),
      widthPercent: 18,
      heightPercent: 20,
      xPercent: 70,
      yPercent: 50,
    });

    return () => {
      closeAll();
    };
  }, [createPopup, closeAll]);

  return (
    <div className="comp-sci-page">
      <section className="comp-sci">
        <h2>Computer Science Experience</h2>
        <p>
        My computer science experience.
        </p>
      </section>
    </div>
  );
}