import { useTranslation } from 'react-i18next';
import './TitleSection.scss';

function TitleSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <div className='TitleSection'>
        <div className='EIGroup'>
          <span className='heading'>E.I Group</span>
          <span>{t('אחזקת דירות ברמה מעל כולם')}</span>
          <span><a href='tel:0509043131' className='phone'>050-904-3131</a></span>
        </div>
      </div>
    </>
  );
};
export default TitleSection;