"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../components/footer/page";
import Header from "../components/header/page";

function Buyinsta() {
  // State for each package (assuming 8 packages as in the markup)
  const [amounts, setAmounts] = useState(Array(8).fill(3000));

  // Handlers for increment/decrement
  const handleDecrement = (idx: number) => {
    setAmounts((prev) =>
      prev.map((amt, i) => (i === idx ? Math.max(100, amt - 100) : amt))
    );
  };
  const handleIncrement = (idx: number) => {
    setAmounts((prev) => prev.map((amt, i) => (i === idx ? amt + 100 : amt)));
  };

  // Helper to render a package card
  const renderPackage = (
    idx: number,
    title: string,
    className: string,
    link: string = "/instadetail"
  ) => (
    <div className="col-md-4" key={idx}>
      <div className={`our-packinner${className ? " " + className : ""}`}>
        <h6>{title}</h6>
        <div className="pack-white">
          <div className="doted-pack">
            <div className="pack-head">
              <span>% 10 הנחה</span>
              <h5>קניית צפיות באינסטגרם</h5>
            </div>
            <div className="count-pack">
              <div className="left-count-pack">
                <h4>
                  ₪ 0.03 <span>/view</span>
                </h4>
                <div className="in-dec">
                  <span
                    onClick={() => handleDecrement(idx)}
                    style={{ cursor: "pointer" }}
                  >
                    -
                  </span>
                  <label>{amounts[idx]}</label>
                  <span
                    onClick={() => handleIncrement(idx)}
                    style={{ cursor: "pointer" }}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pack-btn">
            <h4>
              ₪ {(amounts[idx] * 0.03 * 0.9).toFixed(2)}{" "}
              <span>₪ {(amounts[idx] * 0.03).toFixed(2)}</span>
            </h4>
            <a href={link}>קנה צפיות</a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      <section>
        <div className="banner-top insta-bnr no-image">
          <Image
            className="banar-bk"
            src="/assets/images/insta-bk.png"
            width={1920}
            height={362}
            alt=""
          />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="left-insta-detial">
                  <Image
                    className=""
                    src="/assets/images/question.png"
                    width={335}
                    height={456}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-insta-detial">
                  <h2>
                    {" "}
                    <Image
                      className=""
                      src="/assets/images/insta-ic.png"
                      width={41}
                      height={41}
                      alt=""
                    />
                    שירותי הקידום <span>לאינסטגרם</span>
                  </h2>
                  <p dir="rtl">
                    קניית עוקבים ולייקים באינסטגרם המגיעים ממשתמשים אמיתיים
                    מחו"ל. התשלום חד פעמי, מאובטח לגמרי והרכישה דיסקרטית לחלוטין
                    - שמות הלקוחות מוצפנים ולעולם לא ייחשפו.
                  </p>
                  <div className="ft-btn">
                    <a href="#" className="com-btn">
                      חקור שירותים
                    </a>
                    <a href="/instadetail" className="com-btn">
                      התחילו
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="don-ar">
              <Image
                className=""
                src="/assets/images/down-ar.png"
                width={58}
                height={58}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="our-packinner-outer">
        <div className="container">
          <h3>
            החבילות שלנו <span></span>
          </h3>
          <div className="row">
            {renderPackage(0, "צפיות", "", "/instadetail")}
            {renderPackage(1, "לייקים", "red", "/instadetail")}
            {renderPackage(2, "עוקבים", "pink", "/instadetail")}
            {renderPackage(3, "עוקבים", "org", "/instadetail")}
            {renderPackage(4, "עוקבים", "pink", "/instadetail")}
            {renderPackage(5, "עוקבים", "", "/instadetail")}
            {renderPackage(6, "עוקבים", "prp-light", "/instadetail")}
            {renderPackage(7, "עוקבים", "prp-dark", "/instadetail")}
            {renderPackage(8, "עוקבים", "purple", "/instadetail")}
          </div>
        </div>
      </section>

      <section className="about-points">
        <div className="container">
          <h3>הסבר על קידום אינסטגרם</h3>
          <div className="about-box">
            <div className="row">
              <div className="col-md-6">
                <div className="about-inner">
                  <h5>
                    הכי זולים{" "}
                    <Image
                      className=""
                      src="/assets/images/ab-one.png"
                      width={198}
                      height={198}
                      alt=""
                    />
                  </h5>
                  <p dir="rtl">
                    כדי לשמר את לקוחותינו, אנו בSocialBoost מאמינים כי המחיר
                    הזול ביותר בשוק הוא הדרך הטובה ביותר לעשות זאת – וזה בדוק!
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-inner">
                  <h5>
                    אבטחה{" "}
                    <Image
                      className=""
                      src="/assets/images/ab-two.png"
                      width={198}
                      height={198}
                      alt=""
                    />
                  </h5>
                  <p dir="rtl">
                    התשלום מתבצע בדיסקרטיות ובחסיון מלא ומאובטח על ידי Paypal או
                    על ידי חברת הסליקה הישראלית הגדולה בארץ - קארד קום, כך שפרטי
                    האשראי נשמרים דיסקרטיים לחלוטין. בנוסף אנחנו לעולם{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-inner">
                  <h5>
                    תמיכה{" "}
                    <Image
                      className=""
                      src="/assets/images/ab-three.png"
                      width={198}
                      height={198}
                      alt=""
                    />
                  </h5>
                  <p dir="rtl">
                    החוויה הכוללת שלך היא בראש סדר העדיפויות שלנו ולכן אנו
                    מציעים ללקוחותינו תמיכה אישית מהשורה הראשונה. אנחנו זמינים
                    24/7 דרך הצאט שלמטה ובנייד.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-inner">
                  <h5>
                    אספקה מהירה{" "}
                    <Image
                      className=""
                      src="/assets/images/ab-four.png"
                      width={198}
                      height={198}
                      alt=""
                    />
                  </h5>
                  <p dir="rtl">
                    המוצרים שלנו מסופקים ללקוח באופן אוטומטי ובמהירות ביחס
                    למתחרים!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tetxo">
        <div className="container">
          <h2 dir="rtl">
            קידום באי <span>נסטגרם</span>
          </h2>
          <p dir="rtl" style={{ textAlign: "right" }}>
            <a href="#">Social Boost </a>
            מובילה את מהפכת הקידום באינסטגרם ומאפשרת לכל מי שמעוניין לשפר את
            תדמית הדף לרכוש מגוון שירותים שיקנו לו את הבאזז הנכון. כידוע, תדמית
            בדף האינסטגרם מורכבת משני פרמטרים חשובים – מהתמונות, הסרטונים
            והפוסטים שתעלו, ובכן מכמות הצפיות, העוקבים והלייקים. מן הסתם, דף
            שיכיל כמות רבה של עוקבים ידורג בעיניי הגולש לבעל עניין ופופולרי,
            ובדרך זו יוכל להגביר התעניינות ולייעל את קידום הפרסום בדף. את הפרמטר
            הראשון שהוא ניהול הדף – אנו סומכים עליכם שתבצעו זאת בצורה הטובה
            ביותר, ואת כמות העוקבים, הלייקים והצפיות אנחנו נספק לכם.
            <br />
            בניהול דף באינסטגרם, הכמות בהחלט קובעת ויכולה לעשות את ההבדל בין דף
            סטנדרטי לדף פופולרי ובעל עניין. כן, כאלה אנחנו, מה שוויראלי,
            פופולרי, מה שישראלי, פופולרי. עם כמות גדולה של עוקבים ולייקים –
            מעניין אותנו. חשבו לרגע, כמה פעמים יצא לכם להיכנס לדף מעניין בהחלט,
            אבל כמות העוקבים שלו הייתה נמוכה, אז וודאי הנחתם שאם אין התעניינות –
            הדף לא מי יודע מה. אומנם תפיסה מוטעית, אבל כאלה אנחנו, העולם
            הווירטואלי גבה מחיר והוא – "הפופולריות".
            <br />
            ראשית נזכיר כי רשת האינסטגרם מונה כיום כ־90 מיליון משתמשים בכל רחבי
            העולם, ובכל יום מצטרפים אליה משתמשים חדשים ש"חיים" ברשת. הרשת נחשבת
            לפופולרית בכל רחבי העולם ואפיק פרסומי נהדר לחברות, בעלי עסקים קטנים
            וגדולים, יוצרים, אושיות וסתם פרופילים רגילים. כלל אנשים אלה
            מעוניינים לזכות בחשיפה מסיבות שונות, אם זה כדי לקדם מוצרים/שירותים
            או כדי להפוך לאושיית אינסטגרם ולקבל הצעות שונות מחברות ומותגים, ממש
            כפי שמקובל בעידן החדש.
          </p>

          <div className="row">
            <div className="col-md-12">
              <div className="tetxo-inner">
                <div className="row align-items-center">
                  <div className="col-md-9">
                    <div className="tetxo-dec">
                      <p dir="rtl">
                        הגדלת כמות הלידים של העסק – באופן אוטומטי הדף יהיה
                        פופולרי ויביא תנועה, כך גם המכירות של העסק יגדלו. הגברת
                        הנוכחות ברשת – קניית עוקבים באינסטגרם מחשבונות איכותייים
                        ובנוסף , לייקים וצפיות באינסטגרם מאפשרת הגברת נוכחות,
                        משום שהדף נעשה פופולרי עם כמות עוקבים גבוהה, וכפי שאתם
                        יודעים – הכמות בהחלט קובעת. מקור להגדלת עוקבים אורגניים
                        – ככל שכמות העוקבים גדלה, כך באופן טבעי הוא יהיה מקור
                        לחשיפה אורגנית – טבעית לחלוטין, כך שתוכלו להגדיל את
                        העוקבים פי שתיים ואולי גם שלוש - רק מקניית עוקבים
                        לאינסטגרם.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="tetxo-img">
                      <Image
                        className=""
                        src="/assets/images/tx-one.png"
                        width={198}
                        height={198}
                        alt=""
                      />
                      <h3 dir="rtl">היתרונות של קניית עוקבים באינסטגרם</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tetxo-inner">
                <Image
                  className=""
                  src="/assets/images/tx-two.png"
                  width={198}
                  height={198}
                  alt=""
                />
                <h3 dir="rtl">אז מה אנחנו מציעים לקידום האינסטגרם ?</h3>
                <ul>
                  <li>
                    <a href="#" dir="rtl">
                      קניית לייקים באינסטגרם
                    </a>
                  </li>
                  <li>
                    <a href="#" dir="rtl">
                      קניית עוקבים באינסטגרם
                    </a>
                  </li>
                  <li>
                    <a href="#" dir="rtl">
                      קניית תגובות באינסטגרם
                    </a>
                  </li>
                  <li>
                    <a href="#" dir="rtl">
                      קניית צפיות באינסטגרם
                    </a>
                  </li>
                  <li>
                    <a href="#" dir="rtl">
                      קניית צפיות לסטורי באינסטגרם
                    </a>
                  </li>
                  <li>
                    <a href="#" dir="rtl">
                      קניית צפיות לייב באינסטגרם
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tetxo-inner">
                <Image
                  className=""
                  src="/assets/images/tx-three.png"
                  width={198}
                  height={198}
                  alt=""
                />
                <h3 dir="rtl">איך זה עובד ?</h3>
                <p dir="rtl">
                  {" "}
                  באתר Social Boost תוכלו לרכוש את כמות העוקבים או לבצע{" "}
                  <a href="/instagram-likes">קניית לייקים לאינסטגרם</a> בכמות
                  הרצויה. בהמשך יהיה עליכם לקשר את הקנייה לחשבון האינסטגרם שלכם,
                  לבצע רכישה על ידי כרטיס האשראי והעוקבים יתווספו באופן אוטומטי
                  לדף. רק נסביר כי העוקבים, הלייקים והצפיות הם מיוזרים אמיתיים
                  של משתמשים מחו"ל. דבר נוסף, התשלום באתר מאובטח לחלוטין.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Buyinsta;
