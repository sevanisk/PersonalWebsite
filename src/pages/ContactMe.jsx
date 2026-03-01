import Navbar from '../components/Navbar';

export default function ContactMe() {
  return (
    <div className="contact-page">
      <Navbar />
      <section className="contact">
        <h2>Get In Touch</h2>
        <p>Email: your.email@example.com</p>
        <div className="social-links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </section>
    </div>
  );
}