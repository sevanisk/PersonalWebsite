////////////////////////////////////////////////////////////////////////////////
// Navbar.jsx
// The navigation bar component.
// Provides links to all the main sections of the site with icons and labels.
////////////////////////////////////////////////////////////////////////////////

// React objects
import { Link } from 'react-router-dom';

// Styles
import './Navbar.css';

// Icons
import homeIcon from '../assets/home.png';
import aboutIcon from '../assets/aboutme.png';
import projectsIcon from '../assets/camera.png';
import qualificationsIcon from '../assets/certificate.png';
import compsciIcon from '../assets/world.ico';
import actuaryIcon from '../assets/actuary.png';
import serviceIcon from '../assets/service.png';
import contactIcon from '../assets/contactme.png';

////////////////////////////////////////////////////////////////////////////////
// Constants.
////////////////////////////////////////////////////////////////////////////////

// All of the routes and their corresponding labels and icons on the navbar.
const navItems = [
  {to: '/',               label: 'Home',              icon: homeIcon},
  {to: '/about',          label: 'About Me',          icon: aboutIcon},
  {to: '/portfolio',      label: 'My Projects',       icon: projectsIcon},
  {to: '/qualifications', label: 'Qualifications',    icon: qualificationsIcon},
  {to: '/compsci',        label: 'Computer Science',  icon: compsciIcon},
  {to: '/actuary',        label: 'Actuarial Work',    icon: actuaryIcon},
  {to: '/service',        label: 'Service',           icon: serviceIcon},
  {to: '/contactme',      label: 'Contact Me',        icon: contactIcon},
];

////////////////////////////////////////////////////////////////////////////////
// Component definition.
////////////////////////////////////////////////////////////////////////////////

// Returns the actual navbar component with all the links and icons.
// Handles the routing and styling of the navbar.
// Sends the number of items to a CSS variable to help with styling.
export default function Navbar() {
  return(
    <nav className="navbar" style={{'--nav-items': navItems.length}}>
      <ul className="navbar-grid">
        {/* Maps each item in navItems to a navbar link, handles routing */}
        {navItems.map((item) => (
          <li className="navbar-item" key={item.to}>
            <Link to={item.to} className="navbar-link">
              {/* The icon for this navigation item */}
              <img src={item.icon} alt={item.label} className="navbar-icon"/>

              {/* The label for this navigation item */}
              <span className="navbar-label"> {item.label} </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
