import { Squash as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
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
            <Hamburger toggled={isOpen} />
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
                document.getElementById('who-are-we').scrollIntoView({ behavior: "smooth" })
              }}>{t('אודותינו')}</a>
              <a onClick={(e) => {
                e.preventDefault();
                document.getElementById('whats-included').scrollIntoView({ behavior: "smooth" })
              }}>{t('מה כוללת תחזוקת דירות?')}</a>
              <a onClick={(e) => {
                e.preventDefault();
                document.getElementById('services-we-offer').scrollIntoView({ behavior: "smooth" })
              }}>{t('שירותים שאנו מציעים')}</a>
              <a onClick={(e) => {
                e.preventDefault();
                document.getElementById('why-choose-us').scrollIntoView({ behavior: "smooth" })
              }}>{t('למה לבחור בנו?')}</a>
              <a onClick={(e) => {
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
