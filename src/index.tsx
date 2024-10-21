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

const services: MaintenanceService[] = [
  {
    id: 1,
    title: 'Plumbing',
    description: 'Fix leaks, install new faucets, and more.',
    price: 120,
    duration: '2 hours',
  },
  {
    id: 2,
    title: 'Electrical',
    description: 'Electrical repairs and new installations.',
    price: 150,
    duration: '3 hours',
  },
];

const testimonials: TestimonialModel[] = [
  {
    id: 1,
    customerName: 'John Doe',
    feedback: 'Excellent service! Highly recommend.',
    rating: 5,
    date: '2024-10-01',
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    feedback: 'Very professional and quick!',
    rating: 4,
    date: '2024-09-20',
  },
];


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.title = "E.I Group";

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
