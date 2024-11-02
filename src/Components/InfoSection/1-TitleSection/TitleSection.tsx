import { useTranslation } from 'react-i18next';
import './TitleSection.scss';

function TitleSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <div className='TitleSection'>
        <div className='EIGroup'>
          <span>E.I Group</span>
          <span>{t('אחזקת דירות מקצועית')}</span>
        </div>
      </div>
    </>
  );
};
export default TitleSection;