// src/layouts/BackgroundLayout.jsx
import './BackgroundLayout.css';

export default function BackgroundLayout({ children }) {
  return (
    <div className="background-layout">
      {/* header/nav could go here too */}
      {children}
      {/* footer etc. */}
    </div>
  );
}