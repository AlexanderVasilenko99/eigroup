import React, { useRef, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './LangSwitcher.scss';
import logo from "../../Assets/images/logo-page.jpeg"
import hamburgerMenu from "../../Assets/images/hamburger-menu.png"

import { useTranslation } from 'react-i18next';

const LangSwitcher: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<string>("IL");
  const { i18n } = useTranslation();

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {!isOpen && <img className='country-image' src={`https://flagsapi.com/${lang}/shiny/32.png`} alt='language-image' onClick={handleClick} />}
      {isOpen &&
        <select className="LangSwitcher"
          onChange={(e) => {
            setLang(e.target.value);
            handleClick();
          }}>
          <option disabled selected>Language</option>
          <option value="US">English</option>
          <option value="IL">עברית</option>
          <option value="FR">Français</option>
          <option value="RU">Русский </option>
        </select>}
    </>
  );
};

export default LangSwitcher;

{/* <img src={isLanguageEnglish ? 'https://flagsapi.com/GB/shiny/64.png' : 'https://flagsapi.com/IL/shiny/64.png'} className="LanguageSwitcher"
          onClick={() => {
            i18n.changeLanguage(isLanguageEnglish ? 'he' : 'en');
            setIsLanguageEnglish(!isLanguageEnglish);
          }} >
        </ img> */}