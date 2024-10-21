import React from 'react';
import Testimonial from '../../Models/Testimonial';

interface TestimonialListProps {
  testimonials: Testimonial[];
}

// const TestimonialList: React.FC<TestimonialListProps> = ({ testimonials }) => {
  function TestimonialList(props:TestimonialListProps): JSX.Element {
  console.log('Testimonials:', props.testimonials);
  return (
    <div>
      {props.testimonials.map((testimonial:any) => (
        <div key={testimonial.id}>
          <h3>{testimonial.customerName}</h3>
          <p>{testimonial.feedback}</p>
          <p>Rating: {testimonial.rating}</p>
          <p>Date: {testimonial.date}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialList;
