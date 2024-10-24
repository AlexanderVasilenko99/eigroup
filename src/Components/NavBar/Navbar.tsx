import React, { useRef, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.scss';
import logo from "../../Assets/images/logo-page.jpeg"
import hamburgerMenu from "../../Assets/images/hamburger-menu.png"
import LangSwitcher from './LangSwitcher/LangSwitcher';
import { useTranslation } from "react-i18next";


const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="Navbar">
      <></>
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
              }}>יתרונות</a>
              <a onClick={(e) => {
                e.preventDefault();
                document.getElementById('who-are-we').scrollIntoView({ behavior: "smooth" })
              }}>מי אנחנו</a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-us').scrollIntoView({ behavior: "smooth" })
                }}>צור קשר</a>
              <a>{t('טסט')}</a>
              {/* <a> */}
                <LangSwitcher />
              {/* </a> */}
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
