import { useLayoutEffect } from 'react';
import usePageMeta from '../hooks/usePageMeta';
import { usePopup } from '../context/PopupContext';

export default function Actuary() {
  const { createPopup, closeAll } = usePopup();

  usePageMeta({
    title: 'Actuary - Sophia Evanisko',
    description: 'Learn about Sophia\'s actuarial exams and progress towards ASA.',
  });

  useLayoutEffect(() => {
    createPopup({
      title: 'Exams',
      children: (
        <div style={{fontFamily: 'Courier New'}} className="pop-up-inner border-faint text-box">
          Exam P - <em> Passed September 2025 </em> <br/>
          Score: 9 <br/><br/>
          Exam FM - <em> Sitting June 2026 </em> <br/><br/>
          Exam SRM - <em> Sitting September 2026 </em> <br/><br/>
          <br />
        </div>
      ),
      widthPercent: 25,
      heightPercent: 26,
      xPercent: 21,
      yPercent: 21,
    });

    createPopup({
      title: 'Other Requirements',
      children: (
        <div style={{fontFamily: 'Courier New'}} className="pop-up-inner border-faint text-box">
         VEE - <em> In Progress </em> <br/><br/>
          <br /><br />
        </div>
      ),
      widthPercent: 20,
      heightPercent: 17,
      xPercent: 76,
      yPercent: 16,
    });

    createPopup({
      title: 'Experience',
      children: (
        <div style={{fontFamily: 'Courier New'}} className="pop-up-inner border-faint text-box">
         GEHA - <em> Government Employees Health Association </em> <br/><br/>
          <br /><br />
        </div>
      ),
      widthPercent: 40,
      heightPercent: 27,
      xPercent: 39,
      yPercent: 50,
    });

    return () => {
      closeAll();
    };
  }, [createPopup, closeAll]);


  return (
    <div className="actuary-page">
        <section className="actuary">
            <h2>Actuary</h2>
            <p>
            My actuarial exams and progress towards ASA.
            </p>
        </section>
    </div>
  );
}