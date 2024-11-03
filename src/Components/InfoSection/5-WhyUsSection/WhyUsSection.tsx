import { useTranslation } from 'react-i18next';
import './WhyUsSection.scss';


function WhyUsSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <article className='WhyUsSection' id='why-choose-us'>
      <h2>{t(`למה לבחור בנו?`)}</h2>
        <p>{t(`אנו מציעים ניסיון רב שנים בתחום תחזוקת הדירות, שירות לקוחות אדיב, ועבודה עם כלים וחומרים באיכות הגבוהה ביותר. בין אם אתם זקוקים לתחזוקה שוטפת או לשיפוצים נרחבים, אנחנו כאן כדי להעניק לכם שירות ברמה הגבוהה ביותר.`)}</p>
        <p>{t(`שמרו על הנכס שלכם מתוחזק כראוי והימנעו מהפתעות לא נעימות. צרו קשר עוד היום לקבלת הצעת מחיר מותאמת אישית.`)}</p>
    </article>
  );
};
export default WhyUsSection;