import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutSection from '../src/Components/AboutSection/AboutSection';
import ContactForm from './Components/ContactsForm/Contact';
import Navbar from './Components/NavBar/Navbar';
import './index.scss';

import i18n from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationFR from './Languages/FR/fr.json';
import translationRU from './Languages/RU/ru.json';
import translationUS from './Languages/US/us.json';
import Footer from './Components/Footer/Footer';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.title = "E.I Group";

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    lng: 'IL',
    debug: false,
    fallbackLng: 'IL',
    interpolation: {
      escapeValue: false
    },
    resources: {
      US: { translation: translationUS },
      FR: { translation: translationFR },
      RU: { translation: translationRU },
    }
  });

root.render(
  <React.StrictMode>
    <Navbar />
    <div className="main-content">
      <AboutSection />
    </div>
    <ContactForm />
    <footer>
      <Footer />
    </footer>
  </React.StrictMode>
);
