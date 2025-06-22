"use client";
import React from "react";
import Image from "next/image";
import Footer from "../components/footer/page";
import Header from "../components/header/page";

function Buyinsta() {
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
                  <p>
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
            <div className="col-md-4">
              <div className="our-packinner">
                <h6>צפיות</h6>
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
                          <span>-</span>
                          <label>3000</label>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pack-btn">
                    <h4>
                      ₪ 10.8 <span>₪ 12</span>
                    </h4>
                    <a href="/instadetail">קנה צפיות</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="our-packinner red">
                <h6>לייקים</h6>
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
                          <span>-</span>
                          <label>3000</label>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pack-btn">
                    <h4>
                      ₪ 10.8 <span>₪ 12</span>
                    </h4>
                    <a href="/instadetail">קנה צפיות</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="our-packinner pink">
                <h6>עוקבים</h6>
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
                          <span>-</span>
                          <label>3000</label>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pack-btn">
                    <h4>
                      ₪ 10.8 <span>₪ 12</span>
                    </h4>
                    <a href="/instadetail">קנה צפיות</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="our-packinner org">
                <h6>עוקבים</h6>
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
                          <span>-</span>
                          <label>3000</label>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pack-btn">
                    <h4>
                      ₪ 10.8 <span>₪ 12</span>
                    </h4>
                    <a href="/instadetail">קנה צפיות</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="our-packinner pink">
                <h6>עוקבים</h6>
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
                          <span>-</span>
                          <label>3000</label>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pack-btn">
                    <h4>
                      ₪ 10.8 <span>₪ 12</span>
                    </h4>
                    <a href="/instadetail">קנה צפיות</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="our-packinner">
                <h6>עוקבים</h6>
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
                          <span>-</span>
                          <label>3000</label>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pack-btn">
                    <h4>
                      ₪ 10.8 <span>₪ 12</span>
                    </h4>
                    <a href="/instadetail">קנה צפיות</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="our-packinner prp-light">
                <h6>עוקבים</h6>
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
                          <span>-</span>
                          <label>3000</label>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pack-btn">
                    <h4>
                      ₪ 10.8 <span>₪ 12</span>
                    </h4>
                    <a href="/instadetail">קנה צפיות</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="our-packinner prp-dark">
                <h6>עוקבים</h6>
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
                          <span>-</span>
                          <label>3000</label>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pack-btn">
                    <h4>
                      ₪ 10.8 <span>₪ 12</span>
                    </h4>
                    <a href="/instadetail">קנה צפיות</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="our-packinner purple">
                <h6>עוקבים</h6>
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
                          <span>-</span>
                          <label>3000</label>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pack-btn">
                    <h4>
                      ₪ 10.8 <span>₪ 12</span>
                    </h4>
                    <a href="/instadetail">קנה צפיות</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-points">
        <div className="container">
          <h3>
            Lorem <span>Ipsum</span>
          </h3>
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
                  <p>
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
                  <p>
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
                  <p>
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
                  <p>
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
          <h2>
            קידום באי <span>נסטגרם</span>
          </h2>
          <p className="extra-para">
            <a href="#">Social Boost </a>מובילה את מהפכת הקידום באינסטגרם
            ומאפשרת לכל מי שמעוניין לשפר את תדמית הדף לרכוש מגוון שירותים שיקנו
            לו את הבאזז הנכון. כידוע, תדמית בדף האינסטגרם מורכבת משני פרמטרים
            חשובים – מהתמונות, הסרטונים והפוסטים שתעלו, ובכן מכמות הצפיות,
            העוקבים והלייקים. מן הסתם, דף שיכיל כמות רבה של עוקבים ידורג בעיניי
            הגולש לבעל עניין ופופולרי, ובדרך זו יוכל להגביר התעניינות ולייעל את
            קידום הפרסום בדף. את הפרמטר הראשון שהוא ניהול הדף - אנו סומכים עליכם
            שתבצעו זאת בצורה הטובה ביותר, ואת כמות העוקבים, הלייקים והצפיות
            אנחנו נספק לכם. בניהול דף באינסטגרם, הכמות בהחלט קובעת ויכולה לעשות
            את ההבדל בין דף סטנדרטי לדף פופולרי ובעל עניין. כן, כאלה אנחנו, מה
            שוויראלי, פופולרי, עם כמות גדולה של עוקבים ולייקים – מעניין אותנו.
            חשבו לרגע, כמה פעמים יצא לכם להיכנס לדף מעניין בהחלט, אבל כמות
            העוקבים שלו הייתה נמוכה, אז וודאי הנחתם שאם אין התעניינות - הדף לא
            מי יודע מה. אומנם תפיסה מוטעית, אבל כאלה אנחנו, העולם הווירטואלי גבה
            מחיר והוא – 'הפופולריות'. ראשית נזכיר כי רשת האינסטגרם מונה כיום כ-
            90 מיליון משתמשים בכל רחבי העולם, ובכל יום מצטרפים אליה משתמשים
            חדשים ש"חיים" ברשת. הרשת נחשבת לפופולרית בכל רחבי העולם ואפיק פרסומי
            נהדר לחברות, בעלי עסקים קטנים וגדולים, יוצרים, אושיות וסתם פרופילים
            רגילים. כלל אנשים אלה מעוניינים לזכות בחשיפה מסיבות שונות, אם זה כדי
            לקדם מוצרים/שירותים או כדי להפוך לאושיית אינסטגרם ולקבל הצעות שונות
            מחברות ומותגים, ממש.
          </p>
          <div className="row">
            <div className="col-md-12">
              <div className="tetxo-inner">
                <div className="row align-items-center">
                  <div className="col-md-9">
                    <div className="tetxo-dec">
                      <p>
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
                      <h3>היתרונות של קניית עוקבים באינסטגרם</h3>
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
                <h3>אז מה אנחנו מציעים לקידום האינסטגרם ?</h3>
                <ul>
                  <li>
                    <a href="#">קניית לייקים באינסטגרם</a>
                  </li>
                  <li>
                    <a href="#">קניית עוקבים באינסטגרם</a>
                  </li>
                  <li>
                    <a href="#">קניית תגובות באינסטגרם</a>
                  </li>
                  <li>
                    <a href="#">קניית צפיות באינסטגרם</a>
                  </li>
                  <li>
                    <a href="#">קניית צפיות לסטורי באינסטגרם</a>
                  </li>
                  <li>
                    <a href="#">קניית צפיות לייב באינסטגרם</a>
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
                <h3>איך זה עובד ?</h3>
                <p>
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
