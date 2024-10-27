import React from 'react';
import ReactDOM from 'react-dom/client';
import './AboutSection.scss'
import logo from "../../Assets/images/logo-page.jpeg"
import starImg from "../../Assets/images/star.png"
import { useTranslation } from 'react-i18next';


function AboutSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className='about-section'>

      <article className='intro-article'>
        <h1>{t('אחזקת דירות - למה זה חשוב?')}</h1>
        <p>{t(`אחזקת דירות היא תהליך מתמשך וחיוני לשמירה על ערך הנכס שלך ועל איכות החיים בו. נכס שאינו מתוחזק כראוי עלול לגרום לבעיות רבות כגון נזקים מבניים, בעיות בריאותיות, והוצאות בלתי צפויות לתיקונים. תחזוקה נכונה תסייע להימנע מבעיות אלו, להבטיח שהדירה תישאר במצב מצוין לאורך זמן, וכן לשמור על ערכה בשוק הנדלן.`)}</p>
      </article>

      <article id='advantages'>
        <h2>{t(`היתרונות של אחזקת דירות מקצועית`)}</h2>
        <p>{t(`פנייה לשירותי תחזוקה מקצועיים מבטיחה שהדירה שלך תטופל על ידי אנשי מקצוע מיומנים, עם ניסיון וידע בטיפול בבעיות נפוצות ולא צפויות. מעבר לכך, אנשי תחזוקה מקצועיים מביאים איתם ציוד מתקדם, חומרי גלם איכותיים ויכולים להציע פתרונות ארוכי טווח ולא זמניים.`)}</p>
      </article>

      <article id='who-are-we'>
        <h2>{t(`מי אנחנו?`)}</h2>
        <p>{t(`אנו מציעים שירותי גבייה עבור תחומים כמו תחזוקת מעליות, חשמל, וביטוחי צד ג' הנדרשים. בנוסף, אנו מספקים ליווי משפטי לטיפול בסרבני תשלום בעזרת עורכי דין מנוסים. באמצעות ניהול מקצועי ומסודר של תשלומים שוטפים, שליחת תזכורות ומכתבי התראה, תוכלו לחסוך זמן יקר בטיפול בנושאים אלו ולהקטין את הסיכון לסכסוכים עם סרבני תשלום.`)}</p>
      </article>

      <article>
        <h2>{t(`מה כוללת תחזוקת דירות?`)}</h2>
        <p>{t(`תחזוקת דירות כוללת מגוון רחב של שירותים, שכל אחד מהם תורם לשמירה על בטיחות, נוחות ואסתטיקה בדירה. אלו כוללים:`)}</p>
        <ul className='includes'>
          <li>
            <strong>{t(`תחזוקה שוטפת:`)}</strong>{t(`תחזוקה שוטפת כוללת פעולות קטנות אך חשובות כמו בדיקת מערכות החשמל, תיקוני צבע וטיפול ברטיבות. תחזוקה כזו תסייע במניעת נזקים גדולים יותר בעתיד.`)}</li>
          <li>
            <strong>{t(`תיקוני אינסטלציה:`)}</strong>{t(`בעיות אינסטלציה כמו נזילות, סתימות והצפות הן מהבעיות הנפוצות ביותר בדירות. תחזוקה נכונה תסייע לזהות בעיות אלו בזמן ולפתור אותן לפני שהן מחמירות.`)}</li>
          <li>
            <strong>{t(`שיפוצי פנים:`)}</strong>{t(`שיפוצים חלקיים או מלאים של הדירה יכולים לשדרג משמעותית את איכות החיים בה ולהעלות את ערכה. שיפוצים כוללים החלפת ריצוף, שדרוג המטבח, שיפוץ חדרי האמבטיה ועוד.`)}</li>
          <li>
            <strong>{t(`עבודות חשמל:`)}</strong>{t(`מערכת החשמל היא אחת המערכות הקריטיות בכל דירה. תחזוקה שוטפת כוללת בדיקות תקופתיות, טיפול בתקלות והחלפת מערכות ישנות במערכות מודרניות ובטוחות יותר.`)}</li>
          <li>
            <strong>{t(`תחזוקת גינה:`)}</strong>{t(`אם הדירה כוללת מרפסת או גינה, חשוב לשמור עליה מטופחת. תחזוקת גינה כוללת גיזום, השקיה, טיפול במדשאות והדברה בעת הצורך.`)}</li>
        </ul>
      </article>

      <article>
        <h2>{t(`שירותים שאנו מציעים`)}</h2>
        <ul className='offers'>
          <li>
            <img src={starImg} alt="star" />{t(`תיקוני אינסטלציה ואיתור נזילות`)}</li>
          <li>
            <img src={starImg} alt="star" />{t(`עבודות חשמל ושדרוג מערכות`)}</li>
          <li>
            <img src={starImg} alt="star" />{t(`שיפוצים כלליים, כולל מטבחים וחדרי אמבטיה`)}</li>
          <li>
            <img src={starImg} alt="star" />{t(`תחזוקה שוטפת וניקוי מרזבים`)}</li>
          <li>
            <img src={starImg} alt="star" />{t(` תחזוקת גינות ומרפסות`)}</li>
          <li>
            <img src={starImg} alt="star" />{t(`שירותי ניקיון, וסידור לפני כניסה לדירה`)}</li>
        </ul>
        <p>{t(`צוות המומחים שלנו זמין 24/7 לתת שירות מהיר, מקצועי ואמין. אם אתם מעוניינים להבטיח שהדירה שלכם תישאר במצב מצוין לאורך זמן, פנו אלינו עוד היום. נשמח לספק ייעוץ מקצועי, תיאום שירותי תחזוקה והצעת מחיר מותאמת אישית לצרכים שלכם`)}</p>
      </article>

      <article>
        <h2>{t(`למה לבחור בנו?`)}</h2>
        <p>{t(`אנו מציעים ניסיון רב שנים בתחום תחזוקת הדירות, שירות לקוחות אדיב, ועבודה עם כלים וחומרים באיכות הגבוהה ביותר. בין אם אתם זקוקים לתחזוקה שוטפת או לשיפוצים נרחבים, אנחנו כאן כדי להעניק לכם שירות ברמה הגבוהה ביותר.`)}</p>

        <p>{t(`שמרו על הנכס שלכם מתוחזק כראוי והימנעו מהפתעות לא נעימות. צרו קשר עוד היום לקבלת הצעת מחיר מותאמת אישית.`)}</p>
      </article>
    </div>
  );
};
export default AboutSection;