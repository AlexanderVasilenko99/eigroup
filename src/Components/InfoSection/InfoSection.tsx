import AboutSection from './2-AboutSection/AboutSection';
import IncludesSection from './3-IncludesSection/IncludesSection';
import './InfoSection.scss';
import ServicesSection from './4-ServicesSection/ServicesSection';
import WhyUsSection from './5-WhyUsSection/WhyUsSection';
import TitleSection from './1-TitleSection/TitleSection';


function InfoSection(): JSX.Element {

  return (
    <div className='InfoSection'>
      <TitleSection />
        <AboutSection />
        <IncludesSection />
        <ServicesSection />
        <WhyUsSection />
    </div>
  );
};
export default InfoSection;