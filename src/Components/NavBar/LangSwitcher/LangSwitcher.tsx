import React, { useState } from 'react';
import './LangSwitcher.scss';

import { useTranslation } from 'react-i18next';


interface LangSwitcherProps {
  callbackFunc: () => void;
}

const LangSwitcher: React.FC<LangSwitcherProps> = ({ callbackFunc }) => {

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
          defaultValue={lang}
          onChange={(e) => {

            let lng = e.target.value;
            const html = document.getElementsByTagName('html')[0] as HTMLElement;
            if (html) {
              html.setAttribute('lang', lng);
            }

            setLang(lng);
            i18n.changeLanguage(lng);
            handleClick();
            callbackFunc();
          }}>

          <option value="US" >English</option>
          <option value="IL">עברית</option>
          <option value="FR">Français</option>
          <option value="RU">Русский </option>
        </select>}
    </>
  );
};

export default LangSwitcher;
