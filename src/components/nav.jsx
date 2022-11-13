import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul id="menu">
        <li>
          <Link to="/" className="navbarLink">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="menu" className="navbarLink">
            Menu
          </Link>
        </li>
        <li>
          <Link to="about" className="navbarLink">
            A propos
          </Link>
        </li>
        <li>
          <Link to="gallery" className="navbarLink">
            Gallerie
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
