import { useTranslation } from 'react-i18next';
import './AboutSection.scss';


function AboutSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <article className='AboutSection' id='who-are-we'>
      <h1>{t('אודותינו')}</h1>
      <p>{t(`חברת E.i Grupe מתמחה במתן שירותי ניהול ואחזקת מבנים ברמה גבוהה, עבור בתי עסק, חברות, וועדי בתים. החברה מנוהלת על ידי אלירן שמואל וצחי וקנין, בעלי ניסיון רב שנים בתחום. אנו מציעים מגוון שירותי אחזקת מבנים, כוללשירותי גבייה מהשוכרים תחזוקת המבנה להבטחת מגורים תקינים,ניהול המבנה וטיפול בתקלות אינסטלציה, חשמל ועוד.השירותים ניתנים בעזרת בעלי המקצוע הטובים ביותר בתחום, ואנו מתחייבים לשירות אמין ויעיל, עם זמינות מענה 24/6 לכל תקלה במבנה.`)}</p>
    </article>
  );
};
export default AboutSection;