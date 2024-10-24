import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import ServicesList from './Components/Services/ServicesList';
import TestimonialModel from './Models/Testimonial';
import MaintenanceService from './Models/MaintenanceService';
import Testimonial from './Components/TestimonialList/Testimonial';
import Navbar from './Components/NavBar/Navbar';
import ContactForm from './Components/ContactsForm/Contact';
import AboutSection from '../src/Components/AboutSection/AboutSection'
import logo from "../../Assets/images/logo.jpeg";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector'
import translationUS from './Languages/US/us.json';
import translationFR from './Languages/FR/fr.json';
import translationRU from './Languages/RU/ru.json';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.title = "E.I Group";

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    lng: 'IL',
    debug: true,
    fallbackLng: 'IL',
    interpolation: {
      escapeValue: false
    },
    resources: {

      // US: {
      //   translation: {
      //     טסט: "tets"
      //   }
      // },
      // FR: {
      //   translation: {
      //     טסט: "la testeaux"
      //   }
      // },
      // RU: {
      //   translation: {
      //     טסט: "тест сука"
      //   }
      // }

      US: {translation: translationUS},
      FR: {translation: translationFR},
      RU: {translation: translationRU},
    }
  });

root.render(
  <React.StrictMode>
    <Navbar />
    <div className="main-content">
      {/* <ServicesList services={services} />
    <Testimonial testimonials={testimonials} /> */}
      <AboutSection />
    </div>
    <ContactForm />
    <div>
      לינקים?
    </div>
    <footer>
      זכויות יוצרים וקרדיט לנו
    </footer>
  </React.StrictMode>
);
