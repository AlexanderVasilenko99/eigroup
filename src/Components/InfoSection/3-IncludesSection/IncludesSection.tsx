import { useTranslation } from 'react-i18next';
import './IncludesSection.scss';
import img1 from '../../../Assets/images/square1.png';
import img2 from '../../../Assets/images/square2.png';
import img3 from '../../../Assets/images/square3.png';

function IncludesSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <article className='IncludesSection' id='whats-included'>
        <h2>{t(`מה כוללת תחזוקת דירות?`)}</h2>
        <p>{t(`תחזוקת דירות כוללת מגוון רחב של שירותים, שכל אחד מהם תורם לשמירה על בטיחות, נוחות ואסתטיקה בדירה. אלו כוללים:`)}</p>
        <ul className='includes'>
          <li>
            <strong>{t(`תחזוקה שוטפת:`)}</strong> {t(`תחזוקה שוטפת כוללת פעולות קטנות אך חשובות כמו בדיקת מערכות החשמל, תיקוני צבע וטיפול ברטיבות. תחזוקה כזו תסייע במניעת נזקים גדולים יותר בעתיד.`)}</li>
          <li>
            <strong>{t(`תיקוני אינסטלציה:`)}</strong> {t(`בעיות אינסטלציה כמו נזילות, סתימות והצפות הן מהבעיות הנפוצות ביותר בדירות. תחזוקה נכונה תסייע לזהות בעיות אלו בזמן ולפתור אותן לפני שהן מחמירות.`)}</li>
          <li>
            <strong>{t(`שיפוצי פנים:`)}</strong> {t(`שיפוצים חלקיים או מלאים של הדירה יכולים לשדרג משמעותית את איכות החיים בה ולהעלות את ערכה. שיפוצים כוללים החלפת ריצוף, שדרוג המטבח, שיפוץ חדרי האמבטיה ועוד.`)}</li>
          <li>
            <strong>{t(`עבודות חשמל:`)}</strong> {t(`מערכת החשמל היא אחת המערכות הקריטיות בכל דירה. תחזוקה שוטפת כוללת בדיקות תקופתיות, טיפול בתקלות והחלפת מערכות ישנות במערכות מודרניות ובטוחות יותר.`)}</li>
          <li>
            <strong>{t(`תחזוקת גינה:`)}</strong> {t(`אם הדירה כוללת מרפסת או גינה, חשוב לשמור עליה מטופחת. תחזוקת גינה כוללת גיזום, השקיה, טיפול במדשאות והדברה בעת הצורך.`)}</li>
        </ul>
      </article>
      <div className="images">
        <div className="image-container">
          <img src={img1} alt="img1" />
        </div>
        <div className="image-container">
          <img src={img2} alt="img2" />
        </div>
        <div className="image-container">
          <img src={img3} alt="img3" />
        </div>
      </div>
    </>
  );
};
export default IncludesSection;