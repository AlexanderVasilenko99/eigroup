import AboutSection from './1-AboutSection/AboutSection';
import IncludesSection from './2-IncludesSection/IncludesSection';
import './InfoSection.scss';
import ServicesSection from './3-ServicesSection/ServicesSection';
import WhyUsSection from './4-WhyUsSection/WhyUsSection';


function InfoSection(): JSX.Element {

  return (
    <div className='InfoSection'>
      <AboutSection />
      <IncludesSection />
      <ServicesSection />
      <WhyUsSection />
    </div>
  );
};
export default InfoSection;