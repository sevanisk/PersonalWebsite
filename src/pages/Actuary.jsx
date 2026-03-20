import { useLayoutEffect } from 'react';
import { usePopup } from '../context/PopupContext';

export default function Actuary() {
  const { createPopup, closeAll } = usePopup();

  useLayoutEffect(() => {
    createPopup({
      title: 'Exams',
      children: (
        <div style={{fontFamily: 'Courier New'}} className="pop-up-inner border-faint text-box">
          Exam P - <em> Passed September 2025 </em> <br/><br/>
          Exam FM - <em> Sitting April 2026 </em> <br/><br/>
          Exam SRM - <em> Sitting September 2026 </em> <br/><br/>
          <br />
        </div>
      ),
      widthPercent: 25,
      heightPercent: 22,
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

    return () => {
      closeAll();
    };
  }, [createPopup, closeAll]);


  return (
    <div className="actuary-page">
        <section className="actuary">
            <h2>Actuary</h2>
            <p>
            My actuarial exams and progress towards .
            </p>
        </section>
    </div>
  );
}