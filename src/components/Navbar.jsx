import { Link } from 'react-router-dom';
import './Navbar.css';
import homeIcon from '../assets/react.svg';
import aboutIcon from '../assets/aboutme.svg';
import projectsIcon from '../assets/camera.svg';
import qualificationsIcon from '../assets/certificate.svg';
import compsciIcon from '../assets/globe_map-0.svg';
import actuaryIcon from '../assets/game_freecell-1.svg';
import serviceIcon from '../assets/overlay_share-4.svg';
import contactIcon from '../assets/loudspeaker_rays-0.svg';

const navItems = [
  { to: '/', label: 'Home', icon: homeIcon },
  { to: '/about', label: 'About Me', icon: aboutIcon },
  { to: '/portfolio', label: 'My Projects', icon: projectsIcon },
  { to: '/qualifications', label: 'Qualifications', icon: qualificationsIcon },
  { to: '/compsci', label: 'Computer Science', icon: compsciIcon },
  { to: '/actuary', label: 'Actuarial Work', icon: actuaryIcon },
  { to: '/service', label: 'Service', icon: serviceIcon },
  { to: '/contactme', label: 'Contact Me', icon: contactIcon },
];

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <ul className="navbar-grid">
        {navItems.map((item) => (
          <li className="navbar-item" key={item.to}>
            <Link to={item.to} className="navbar-link">
              <img src={item.icon} alt="" className="navbar-icon" aria-hidden="true" />
              <span className="navbar-label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
