import { useTranslation } from 'react-i18next';
import './ServicesSection.scss';
import starImg from "../../../Assets/images/star.png";


function ServicesSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <article className='ServicesSection'>
      <h2>{t(`שירותים שאנו מציעים`)}</h2>
        <ul className='offers'>
          <li>
            <img src={starImg} alt="star" />{t(`גבייה - אנחנו נדאג באופן שוטף לתשלום השכירות ושירותים ונספים מול השוכר`)}</li>
          <li>
            <img src={starImg} alt="star" />{t(`תחזוקת המבנה - חברתינו מתמחה במתן שירותים לגבי תחזוקה שוטפת של הנכס`)}</li>
          <li>
            <img src={starImg} alt="star" />{t(`אינטלציה, חשמל חבירתינו תמצא עבורך את הבעלי מקצוע הכי אמינים ומקצוענים בתחום`)}</li>
          <li>
            <img src={starImg} alt="star" />{t(`מענה אנושי - מענה אנושי 24/6 לכל תקלה או שאלה`)}</li>
          <li>
            <img src={starImg} alt="star" />{t(`הכנת הנכס לשכירות - חברתינו מתמחה במתן שירותי השבחת הבית על ידי בעלי מקצוע`)}</li>
          <li>
            <img src={starImg} alt="star" />{t(`הקמת דוח הוצאות שנתי לבעלי הנכס`)}</li>
        </ul>
    </article>
  );
};
export default ServicesSection;