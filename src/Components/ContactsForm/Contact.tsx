import React, { useState } from 'react';
import './Contact.scss';
import { useForm } from '@formspree/react';
import { useTranslation } from 'react-i18next';


const ContactForm: React.FC = () => {

  const [state, handleSubmit] = useForm("xxxxxx"); //xkgnnbgw
  const { t } = useTranslation();

  if (state.succeeded) {
    return <form className='form'>
      <h2>{t('צרו קשר')}</h2>
      <p>{t('המידע התקבל אצלנו, בקרוב נהיה בקשר!')}</p>
    </form>
  }

  return (
    <form onSubmit={handleSubmit} className='form' id='contact-us'>
      <h2>{t('צרו קשר')}</h2>
      <div className="inputs-container">
        <div className='input-container'>
          <label htmlFor="name">{t('שם')}</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            minLength={2}
            maxLength={15}
          // placeholder="שם"
          />
        </div>
        <div className='input-container'>
          <label htmlFor="name">{t('מייל')}</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            minLength={2}
            maxLength={30}
          // placeholder="מייל"
          />
        </div>
        <div className='input-container'>
          <label htmlFor="name">{t('נייד')}</label>
          <input
            required
            type="tel"
            name="tel"
            id="tel"
            minLength={9}
            maxLength={15}
          // placeholder="נייד"
          />
        </div>
      </div>

      <button type="submit" disabled={state.submitting}>
        {t('שלח')}
      </button>
    </form>
  );
};

export default ContactForm;
