import React from 'react';
import './ServicesList.scss';
import MaintenanceServiceModel from '../../Models/MaintenanceService';

interface ServiceListProps {
  services: MaintenanceServiceModel[];
}

// const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
export default function ServicesList(props:ServiceListProps): JSX.Element {
//   const services: MaintenanceServiceModel[] = [
//     new MaintenanceServiceModel(
//         "Websites",
//         "I develop new websites from scratch custom made specifically for your business needs.",
//         "websites7.1.png",
//         'tech1.png'),
//     new MaintenanceServiceModel(
//         "Landing Pages",
//         "I make a simple web pages usually designed for selling a product or pulling in leeds.",
//         "websites9.1.png",
//         "domain1.png"),
//     new MaintenanceServiceModel(
//         "Management",
//         "Already have a website and looking for someone to manage it? look no further!",
//         "websites8.png",
//         "landing1.png")
// ]
  //console.log('Services:', services);
  return (
    <div>
      {props.services.map((service:MaintenanceServiceModel) => (
        <div key={service.id}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <p>Price: ${service.price}</p>
          <p>Duration: {service.duration}</p>
        </div>
       ))}
    </div>
  );
};

//export default ServicesList;