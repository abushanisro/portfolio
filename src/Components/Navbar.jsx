import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../assets/logo.svg';
import underline from '../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
      setIsMenuOpen(true);
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
      setIsMenuOpen(false);
    }
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className='nav-logo' />

      {/* Show open icon when menu is closed */}
      {!isMenuOpen && (
        <button onClick={openMenu} className='nav-mob-open'>
          <img src={menu_open} alt='Open Menu' />
        </button>
      )}

      {/* Show nav menu */}
      <ul ref={menuRef} className='nav-menu'>
        {/* Close icon inside menu */}
        {isMenuOpen && (
          <li className='nav-close-btn'>
            <button onClick={closeMenu} className='nav-mob-close'>
              <img src={menu_close} alt='Close Menu' />
            </button>
          </li>
        )}

        {["home", "about", "services", "work", "contact"].map((item) => (
          <li key={item}>
            <AnchorLink
              className='anchor-link'
              offset={50}
              href={`#${item}`}
              onClick={() => {
                setMenu(item);
                closeMenu(); // optional: auto-close on mobile after click
              }}
            >
              <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
            </AnchorLink>
            {menu === item && <img src={underline} alt="active-underline" />}
          </li>
        ))}
      </ul>

      {/* Connect CTA */}
      <AnchorLink className='anchor-link' offset={50} href='#contact'>
        <div className='nav-connect'>Connect With Me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
