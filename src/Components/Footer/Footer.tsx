import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.scss';
import { NavLink } from 'react-router-dom';


const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <span className='Footer'>
      כל הזכויות שמורות E.I GROUP©️ | האתר פותח ומתוחזק על ידי&nbsp;
      <a href="https://alexandervasilenko.com" target='_blank'>אלכסנדר וסילנקו</a>
      &nbsp;
      <a href="https://alexandervasilenko.com" target='_blank'>וישראל סופר</a>
    </span>
  );
};

export default Footer;
