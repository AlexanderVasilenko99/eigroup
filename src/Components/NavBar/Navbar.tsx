import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import hamburgerMenu from "../../Assets/images/hamburger-menu.png";
import logo from "../../Assets/images/logo-blue-background-white-text.png";
import LangSwitcher from './LangSwitcher/LangSwitcher';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = {
    callbackFunc: () => setIsOpen(false)
  }

  return (
    <nav className="Navbar">
      <ul className='outer-ul'>

        <li className="trigger" onClick={() => setIsOpen(!isOpen)}>
          <a>
            <img src={hamburgerMenu} alt="hamburgerMenu" />
          </a>
        </li>
        <li className="logo">
          <img src={logo} alt="logo" />
        </li>
        <li className={`li-inner-ul ${isOpen ? "is-open" : ""}`}>
          <ul className='inner-ul'>
            <li>
              <a onClick={(e) => {
                e.preventDefault();
                document.getElementById('advantages').scrollIntoView({ behavior: "smooth" })
              }}>{t('יתרונות')}</a>
              <a onClick={(e) => {
                e.preventDefault();
                document.getElementById('who-are-we').scrollIntoView({ behavior: "smooth" })
              }}>{t('מי אנחנו')}</a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-us').scrollIntoView({ behavior: "smooth" })
                }}>{t('צור קשר')}</a>
              <LangSwitcher {...closeNavbar} />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
