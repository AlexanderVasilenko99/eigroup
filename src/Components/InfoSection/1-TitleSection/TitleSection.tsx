import { useTranslation } from 'react-i18next';
import './TitleSection.scss';

function TitleSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <div className='TitleSection'>
        <div className='EIGroup'>
          <span className='phone'>050-904-3131</span>
          <span className='heading'>E.I Group</span>
          <span>{t('אחזקת דירות ברמה מעל כולם')}</span>
        </div>
      </div>
    </>
  );
};
export default TitleSection;