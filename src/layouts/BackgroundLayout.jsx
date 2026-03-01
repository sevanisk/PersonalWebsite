import './BackgroundLayout.css';

export default function BackgroundLayout({ children }) {
  return (
    <div className="background-layout">
      {children}
    </div>
  );
}