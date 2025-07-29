"use client";

import Image from "next/image";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import React, { useState } from "react";

export default function Home() {
  const faqs = [
    {
      question: "האם קניית עוקבים ולייקים עלולה לסכן את החשבון?",
      answer:
        "קניית עוקבים, לייקים, או כל שירות אחר באתר אינו מסכן או מזיק לחשבון שלכם ואנו מבטיחים בזאת שלא ייחסם בעקבות שימוש בשירות. ישנן סיבות אחרות שבגללן החשבון יכול להחסם שלא קשורות לקניית השירות.",
    },
    {
      question: "למה כדאי לקנות את שירותי הקידום באינסטגרם?",
      answer:
        "שירותי הקידום באינסטגרם שאנו מציעים הם באחריות מלאה לכל החיים! קניית עוקבים ולייקים באינסטגרם ובשאר הרשתות נותנת לחשבון שלכם אמינות ומגדילה את המעורבות של הגולשים, ולבסוף גם את המכירות בעסק שלכם.",
    },
    {
      question: "מה זמן אספקת השירות?",
      answer:
        "רוב השירותים באתר מסופקים לחשבון תוך דקות. ישנם שירותים שזמן ההתחלה שלהם יכול להימשך עד מספר שעות, כמו עוקבים באינסטגרם או צפיות ביוטיוב.",
    },
    {
      question: "למה לקנות בסושיאל בוסט ולא מחברות אחרות?",
      answer:
        "סושיאל בוסט היא מהראשונות בשוק - עוד ב-2016 התחלנו למכור שירותי קידום באינסטגרם ובמהלך השנים עזרנו לאלפי לקוחות ישראלים לקדם את החשבון שלהם ברשתות. אנו היחידים שמציעים אחריות מלאה על כל השירותים לכל החיים, ומספקים עבורכם אספקה של חשבונות אותנטיים, אמיתיים וישראלים.",
    },
    {
      question: "למה אנשים קונים עוקבים ולייקים באינסטגרם?",
      answer:
        "בעולם המדיה, הנראות משחקת תפקיד חשוב במשיכת הגולשים. חשבון עם כמות עוקבים ולייקים גדולה מספיק תיצור עניין אצל הגולש ותגרום לו לבחון את התוכן בעמוד שלכם.",
    },
    {
      question: "האם צריך לספק סיסמה?",
      answer:
        "בקניית המוצרים שלנו אין צורך לספק את הסיסמה. אנחנו שומרים על פרטיות החשבון שלך ואנחנו רק צריכים את שם המשתמש או את הפוסט אליו תרצה לקבל את השירות.",
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Header />
      <section>
        <div className="banner-top">
          <div className="container">
            <h2>
              קניית עוקבים לייקים וצפיות <span>וברשתות החברתיות</span> באינסטגרם
            </h2>
            {/* <p>
              האתר הותיק בישראל לקידום באינסטגרם - קידום עוקבים, לייקים, צפיות
              ותגובות בכל הרשתות במקום אחד. אנו מספקים חשבונות באיכות הגבוהה
              ביותר עם אספקה מהירה ואחריות מלאה.
            </p> */}
            <p dir="rtl">
              האתר הותיק בישראל לקידום באינסטגרם – קידום עוקבים, לייקים, צפיות
              ותגובות בכל הרשתות במקום אחד. אנו מספקים חשבונות באיכות הגבוהה
              ביותר עם אספקה מהירה ואחריות מלאה.
            </p>
            {/* <a href="#" className="com-btn">
            התחילו
            </a> */}
            <ul>
              <li>
                משלוח מהיר{" "}
                <Image
                  className=""
                  src="/assets/images/quick.svg"
                  width={25}
                  height={25}
                  alt=""
                />
              </li>
              <li>
                תוצאות אמיתיות{" "}
                <Image
                  className=""
                  src="/assets/images/results.svg"
                  width={25}
                  height={25}
                  alt=""
                />
              </li>
              <li>
                אנשים אמיתיים{" "}
                <Image
                  className=""
                  src="/assets/images/people.svg"
                  width={25}
                  height={25}
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="medias-main">
        <div className="container">
          <div className="media-outer-box">
            <div className="media-link">
              <a href="#">
                סמן את כל השירותים{" "}
                <Image
                  className=""
                  src="/assets/images/arrow.svg"
                  width={25}
                  height={25}
                  alt=""
                />
              </a>
            </div>
            <h3>שירותים פופולריים</h3>
            <p>גלה את משחק המדיה החברתית הפופולרי שלנו והרחיב אותו</p>
            <div className="row">
              <div className="col-md-3">
                <div className="media-box">
                  <h4>
                    לקנות מנויי יוטיוב{" "}
                    <Image
                      className=""
                      src="/assets/images/youtube.svg"
                      width={40}
                      height={40}
                      alt=""
                    />
                  </h4>
                  <h6>המחיר מתחיל מ-₪3</h6>
                  <div className="order-bk">
                    <a href="#">הזמן עכשיו</a>
                    <Image
                      className=""
                      src="/assets/images/stars.svg"
                      width={80}
                      height={17}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="media-box">
                  <h4>
                    לקנות מנויי סאונדקלאוד{" "}
                    <Image
                      className=""
                      src="/assets/images/cloud.svg"
                      width={40}
                      height={40}
                      alt=""
                    />
                  </h4>
                  <h6>המחיר מתחיל מ-₪3</h6>
                  <div className="order-bk">
                    <a href="#">הזמן עכשיו</a>
                    <Image
                      className=""
                      src="/assets/images/stars.svg"
                      width={80}
                      height={17}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="media-box">
                  <h4>
                    לקנות מנויי פייסבוק{" "}
                    <Image
                      className=""
                      src="/assets/images/fb.svg"
                      width={40}
                      height={40}
                      alt=""
                    />
                  </h4>
                  <h6>המחיר מתחיל מ-₪3</h6>
                  <div className="order-bk">
                    <a href="#">הזמן עכשיו</a>
                    <Image
                      className=""
                      src="/assets/images/stars.svg"
                      width={80}
                      height={17}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="media-box">
                  <h4>
                    לקנות מנויי אינסטגרם{" "}
                    <Image
                      className=""
                      src="/assets/images/insta.svg"
                      width={40}
                      height={40}
                      alt=""
                    />
                  </h4>
                  <h6>המחיר מתחיל מ-₪3</h6>
                  <div className="order-bk">
                    <a href="#">הזמן עכשיו</a>
                    <Image
                      className=""
                      src="/assets/images/stars.svg"
                      width={80}
                      height={17}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-block">
        <div className="container">
          <h6>ברוכים הבאים ל</h6>
          <h2>
            המקום הטוב ביותר לקניית עוקבים, לייקים <br />
            <span>ברשת החברתית</span> וצפיות
          </h2>
          <p>
            מחפש את הדרך הזולה והטובה ביותר לשפר את הנוכחות שלך במדיה חברתית ?
            אנו כחברה המובילה והותיקה בשוק סושיאל בוסט הוא הפתרון בשבילך נספק
            עבורך שירותי קניית עוקבים, לייקים וצפיות ברשתות החברתיות - באיכות
            הגבוהה ביותר ובאחריות מלאה
          </p>
          <div className="row">
            <div className="col-md-6">
              <div className="block-social">
                <div className="image-wrp">
                  <Image
                    className=""
                    src="/assets/images/ly-one.svg"
                    width={70}
                    height={70}
                    alt=""
                  />
                </div>
                <div>
                  <h5>
                    הכי זולים בשוק <span>4</span>
                  </h5>
                  <p>
                    כדי לשמר את לקוחותינו, אנו בSocialBoost מאמינים כי המחיר
                    הזול ביותר בשוק הוא הדרך הטובה ביותר לעשות זאת – וזה בדוק!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="block-social">
                <div className="image-wrp">
                  <Image
                    className=""
                    src="/assets/images/ly-two.svg"
                    width={70}
                    height={70}
                    alt=""
                  />
                </div>
                <div>
                  <h5>
                    אמינות<span className="prp">3</span>
                  </h5>
                  <p>
                    כחברה המובילה בשוק הקיימת מ2016, אנו מבטיחים לספק את
                    השירותים באיכות הגבוהה ביותר ובאופן המאובטח ביותר לחשבונך.
                    הצטרף עוד היום לעשרות אלפי הלקוחות המרוצים שלנו שהגדילו את
                    נוכחותם החברתית ברשת
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="block-social">
                <div className="image-wrp">
                  <Image
                    className=""
                    src="/assets/images/ly-three.svg"
                    width={57}
                    height={70}
                    alt=""
                  />
                </div>
                <div>
                  <h5>
                    האחריות שלנו<span className="pnk">2</span>
                  </h5>
                  <p>
                    אנחנו שואפים להשאיר רושם מצוין על לקוחותינו. אם אינך מרוצה
                    מאיכות המוצר, מזמן המשלוח או שלא קיבלת את ההזמנה – פנה אלינו
                    ותקבל החזר כספי מלא. הרכישה באתר מאובטחת באמצעות פייפל
                    וקארדקום.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="block-social">
                <div className="image-wrp">
                  <Image
                    className=""
                    src="/assets/images/ly-four.svg"
                    width={60}
                    height={70}
                    alt=""
                  />
                </div>
                <div>
                  <h5>
                    תמיכה 24/7<span className="org">1</span>
                  </h5>
                  <p>
                    החוויה הכוללת שלך היא בראש סדר העדיפויות שלנו ולכן אנו
                    מציעים ללקוחותינו תמיכה אישית מהשורה הראשונה. יש לך שאלות?
                    צוות התמיכה המסור שלנו זמין תמיד וכאן לכל שאלה או בעיה, אנא
                    אל תהסס לפנות אלינו
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <h6 dir="rtl">למה לקנות?</h6>

          <h2>
            למה לקנות עוקבים ולייקים ברשת <br />
            <span dir="rtl">החברתית ?</span>
          </h2>
          <p dir="rtl">
            גם אם אתה מבלה שעות על יצירת פרופיל מושלם והעלאת תוכן מעניין כי אתה
            בטוח שאנשים ירצו לראות אותו, עליך לתת את הרושם הראשוני הטוב ביותר.
            רוב האנשים לא יביעו עניין בדף רשת חברתי לא ויראלי שאין לו עוקבים,
            לייקים ותנועה עוצמתית. אבל אם הם רואים שהרבה אנשים מתעניינים בדף
            שלך, הם מיד יתעניינו גם כן, ויבדקו בעצמם על מה מדובר SocialBoost כאן
            כדי לעזור לך!
          </p>
          <p dir="rtl">
            קניית עוקבים ולייקים היא דרך מעולה להפוך את דף הרשת החברתית שלך לדף
            פופולארי שימשוך את הקהל הנחשף אליו. באמצעות שירותי הקידום שלנו תוכל
            למשוך את הקהל המבקר בעמוד שלך ובכך להפוך אותו לדף ויראלי שכולם ידברו
            עליו. כך תשיג את התוצאות שתמיד חלמת עליהם במהירות וביעילות. חבילות
            קניית העוקבים והלייקים באינסטגרם, בפייסבוק וביוטיוב נועדו להגביר את
            מסעות הפרסום שלך ברשת החברתית במהירות וביעילות.
          </p>
          <ul>
            <li>
              <Image
                className=""
                src="/assets/images/st-one.png"
                width={186}
                height={177}
                alt=""
              />
              הגדלת המכירות והלידים של <br />
              העסק
            </li>
            <li>
              <Image
                className=""
                src="/assets/images/st-two.png"
                width={186}
                height={177}
                alt=""
              />
              הגברת המוניטין של העסק <br />
              בקרב קהל היעד
            </li>
            <li>
              <Image
                className=""
                src="/assets/images/st-three.png"
                width={186}
                height={177}
                alt=""
              />
              הגברת הנוכחות במדיה <br /> החברתית
            </li>
            <li>
              <Image
                className=""
                src="/assets/images/st-four.png"
                width={186}
                height={177}
                alt=""
              />
              מקור להגדלת עוקבים <br />
              אורגניים
            </li>
          </ul>
        </div>
      </section>

      <section className="tube-outer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="tube-outer-left">
                <ul>
                  <li>
                    <a href="#">
                      <Image
                        className=""
                        src="/assets/images/sv-bt-one.svg"
                        width={273}
                        height={52}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        className=""
                        src="/assets/images/sv-bt-two.svg"
                        width={273}
                        height={52}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        className=""
                        src="/assets/images/sv-bt-three.svg"
                        width={273}
                        height={52}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        className=""
                        src="/assets/images/sv-bt-four.svg"
                        width={273}
                        height={52}
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tube-outer-right">
                <h2 dir="rtl">
                  <span>מוכנים</span><span> להתחיל ?</span>
                </h2>
                <p>
                  כל מה שעליכם לעשות, הוא לבחור את הרשת החברתית, להכניס את הלינק
                  שאותו אתם רוצים לקדם, ואנחנו נדאג לשאר
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testo-secion">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="testo-left">
                <Image
                  className=""
                  src="/assets/images/question.png"
                  width={517}
                  height={662}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="testo-right">
                {/* <h6>שאלות תשובות</h6> */}
                <h2>
                  תשובות<span> שאלות</span>
                </h2>
                <div className="accordion" id="accordionExample">
                  {faqs.map((faq, idx) => (
                    <div className="accordion-item" key={idx}>
                      <h2 className="accordion-header" id={`heading${idx}`}>
                        <button
                          className={`accordion-button${
                            openIndex === idx ? "" : " collapsed"
                          }`}
                          type="button"
                          aria-expanded={openIndex === idx}
                          aria-controls={`collapse${idx}`}
                          onClick={() =>
                            setOpenIndex(openIndex === idx ? null : idx)
                          }
                          style={{justifyContent:'flex-start'}}
                          dir="rtl"
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse${idx}`}
                        className={`accordion-collapse collapse${
                          openIndex === idx ? " show" : ""
                        }`}
                        aria-labelledby={`heading${idx}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p dir="rtl">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
