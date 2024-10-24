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
        <input
          required
          type="text"
          name="name"
          id="name"
          minLength={2}
          maxLength={15}
          placeholder="שם"
        />
        <input
          required
          type="email"
          name="email"
          id="email"
          minLength={2}
          maxLength={30}
          placeholder="מייל"
        />
        <input
          required
          type="tel"
          name="tel"
          id="tel"
          minLength={9}
          maxLength={15}
          placeholder="נייד"
        />
      </div>

      <button type="submit" disabled={state.submitting}>
        {t('שלח')}
      </button>
    </form>
  );
};

export default ContactForm;
