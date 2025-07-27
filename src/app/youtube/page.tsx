"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import Link from "next/link";

function Buyyoutube() {
  // State for each package
  const [viewsAmount, setViewsAmount] = useState(3000);
  const [likesAmount, setLikesAmount] = useState(3000);
  const [followersAmount, setFollowersAmount] = useState(3000);

  // Handlers for increment/decrement
  const handleDecrement = (type: string) => {
    if (type === "views") setViewsAmount((prev) => Math.max(100, prev - 100));
    if (type === "likes") setLikesAmount((prev) => Math.max(100, prev - 100));
    if (type === "followers")
      setFollowersAmount((prev) => Math.max(100, prev - 100));
  };
  const handleIncrement = (type: string) => {
    if (type === "views") setViewsAmount((prev) => prev + 100);
    if (type === "likes") setLikesAmount((prev) => prev + 100);
    if (type === "followers") setFollowersAmount((prev) => prev + 100);
  };

  return (
    <div>
      <Header />
      <section>
        <div className="banner-top insta-bnr no-image">
          <Image
            className="banar-bk"
            src="/assets/images/youtube.bk.png"
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
                <div className="right-insta-detial youtube-right">
                  <h2>
                    {" "}
                    <Image
                      className=""
                      src="/assets/images/youtube-ic.png"
                      width={59}
                      height={41}
                      alt=""
                    />
                    שירותי הקידום <span>ביוטיוב</span>
                  </h2>
                  <p dir="rtl">
                    קניית צפיות ביוטיוב ממשתמשים אמיתיים מכל העולם ועוד מגוון
                    שירותי קידום ביוטיוב הכוללים סאבים, לייקים לסרטוני יוטיוב
                    ועוד. התשלום חד פעמי, מאובטח לגמרי והרכישה דיסקרטית לחלוטין
                    - שמות הלקוחות מוצפנים ולעולם לא ייחשפו.
                  </p>
                  <div className="ft-btn">
                    <a href="/youtubedetail" className="com-btn" dir="rtl">
                      חקור שירותים
                    </a>
                    <a href="/youtubedetail" className="com-btn">
                      התחילו
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="don-ar">
              <Image
                className=""
                src="/assets/images/tube-cirlce.png"
                width={58}
                height={58}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="our-packinner-outer youtube-pack">
        <div className="container">
          <h3>
            החבילות שלנו <span></span>
          </h3>
          <div className="row">
            {/* Views Package */}
            <div className="col-md-4">
              <div className="our-packinner youtube-box tube-red-dark">
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
                          ₪ 0.03 <span>/צפייה</span>
                        </h4>
                        <div className="in-dec">
                          <span
                            onClick={() => handleDecrement("views")}
                            style={{ cursor: "pointer" }}
                          >
                            -
                          </span>
                          <label>{viewsAmount}</label>
                          <span
                            onClick={() => handleIncrement("views")}
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
                      ₪ {(viewsAmount * 0.03 * 0.9).toFixed(2)}{" "}
                      <span>₪ {(viewsAmount * 0.03).toFixed(2)}</span>
                    </h4>
                    <Link href="/youtubedetail">קנה צפיות</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Likes Package */}
            <div className="col-md-4">
              <div className="our-packinner youtube-box tube-red-med">
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
                          ₪ 0.03 <span>/צפייה</span>
                        </h4>
                        <div className="in-dec">
                          <span
                            onClick={() => handleDecrement("likes")}
                            style={{ cursor: "pointer" }}
                          >
                            -
                          </span>
                          <label>{likesAmount}</label>
                          <span
                            onClick={() => handleIncrement("likes")}
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
                      ₪ {(likesAmount * 0.03 * 0.9).toFixed(2)}{" "}
                      <span>₪ {(likesAmount * 0.03).toFixed(2)}</span>
                    </h4>
                    <Link href="/youtubedetail">קנה צפיות</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Followers Package */}
            <div className="col-md-4">
              <div className="our-packinner youtube-box tube-red-light">
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
                          ₪ 0.03 <span>/צפייה</span>
                        </h4>
                        <div className="in-dec">
                          <span
                            onClick={() => handleDecrement("followers")}
                            style={{ cursor: "pointer" }}
                          >
                            -
                          </span>
                          <label>{followersAmount}</label>
                          <span
                            onClick={() => handleIncrement("followers")}
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
                      ₪ {(followersAmount * 0.03 * 0.9).toFixed(2)}{" "}
                      <span>₪ {(followersAmount * 0.03).toFixed(2)}</span>
                    </h4>
                    <Link href="/youtubedetail">קנה צפיות</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-points youtube-pack">
        <div className="container">
          <h3 dir="rtl">
            הסבר על קידום ביוטיוב <span></span>
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

      <section className="tetxo youtube-pack">
        <div className="container">
          <h2 dir="rtl">
            קידום <span>ביוטיוב</span>
          </h2>
          <p dir="rtl" style={{ textAlign: "right" }}>
            יוטיוב היא אחת הפלטפורמות השיווק הגדולות ביותר בעולם המאפשרת צפייה
            בסרטונים, קליפים, שירים ועוד. רק לסבר את האוזן, יותר מ־3.5 מיליון
            משתמשים שונים רשומים בה וניתן לדמיין את כמות הצפיות היומית המתרחשת
            דרך הפלטפורמה. דבר נוסף, יוטיוב נחשבת לאתר השני בעולם מבחינת כמות
            כניסות, וזאת אחרי גוגל. רק בכדי שתוכלו לשאול, היא השיקה את יוטיוב
            בשנת 2006.
            <br />
            אם אתם מעלים סרטונים ליוטיוב, או מנויים בערוץ וצוברים מינים, סביר
            להניח כי תרצו להגדיל כמה שיותר את כמות הצפיות. תזכורת חשובה היא
            שלכמות הגדולה של הצפיות לצורך הפופולריות של הסרטון, הרי גולשים באופן
            טבעי מתבססים על כמות אנשים שצפו בסרטון וכך יודעים אם הוא שווה צפייה
            או לא.
          </p>

          <div className="row">
            <div className="col-md-12">
              <div className="tetxo-inner">
                <div className="row align-items-center">
                  <div className="col-md-9">
                    <div className="tetxo-dec">
                      <p dir="rtl">
                        <strong>לצורך חשיפה או יצירת מודעות</strong> – ישנם בעלי
                        עסקים המעוניינים לייצר חשיפה פרסומית של מוצרים/שירותים
                        אצל קהל היעד הרלוונטי על ידי צפייה בסרטון. המטרה היא
                        לאפשר לו לרכוש דבר מה, לקבל מידע שיווקי, לקבל רושם על
                        החברה וכו'. בדרך זו ניתן לייצר לידים איכותיים!
                      </p>

                      <br />
                      <p dir="rtl">
                        <strong>הבאת תנועה איכותית לאתר</strong> – חברות רבות
                        מעוניינות להביא גולשים או לקוחות פוטנציאלים לאתר להם, אם
                        זה לקבלת פרטים נוספים על השירות, להרשמות כלליות, לרכישה
                        אונליין של מוצרים וכו'.
                      </p>
                      <br />

                      <p dir="rtl">
                        <strong>הגדלת ה-Counter</strong> – אחד הפרמטרים העיקריים
                        בייעול ביטוי הוא כמות הצפיות, ככל שהכמות תהיה גדולה
                        יותר, כך הוא יהיה יותר ויראלי ויקודם במנוע החיפוש (גם של
                        גוגל). ולכן, פעמים רבות חברות ועסקים מעוניינים{" "}
                        <a href="#">להגדיל את כמות הצפיות</a> למטרות ויראליות
                        ולפעמים גם פוליטיות.
                      </p>
                      <br />

                      <p dir="rtl">
                        <strong>השקעה נכונה לטווח הארוך</strong> – קידום ותחזוקת
                        דפי אינסטגרם אינם קלים, אך{" "}
                        <a href="#">קניית עוקבים אמיתיים</a> בהחלט יכולה לשפר את
                        התדמית וליצור את הרושם הנכון. באתר Social Boost תוכלו
                        לרכוש את כמות העוקבים הרצויה בצורה ידידותית ונוחה על ידי
                        כרטיס אשראי ומערכת מאובטחת. נציין כי העוקבים הנם מיוזרים
                        אמיתיים של משתמשים מחו"ל.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="tetxo-img">
                      <Image
                        className=""
                        src="/assets/images/you-one.png"
                        width={198}
                        height={198}
                        alt=""
                      />
                      <h3 dir="rtl">
                        אז מה המטרות של הגדלת כמות הצפיות ביוטיוב?
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tetxo-inner">
                <Image
                  className=""
                  src="/assets/images/you-two.png"
                  width={198}
                  height={198}
                  alt=""
                />
                <h3 dir="rtl">מהיום קל יותר לקנות צפיות ביוטיוב!</h3>
                {/* Have to write here */}
                <p dir="rtl">
                  אתר <a href="#">Social Boost</a> מציע קניית עוקבים ביוטיוב,
                  ובנוסף,
                  <a href="#">קניית לייקים לחשבון היוטיוב שלכם</a> במחירים
                  אטרקטיביים ובאתר מאובטח וידידותי לשימוש. רכישת העוקבים
                  והלייקים תהפוך את העמוד שלכם להרבה יותר פופולרי ולהגיע
                  למקסימום חשיפה. נציין כי הצפיות מגיעות מיוזרים אמיתיים מחו"ל
                  והאתר מאובטח לחלוטין!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tetxo-inner">
                <Image
                  className=""
                  src="/assets/images/you-three.png"
                  width={198}
                  height={198}
                  alt=""
                />
                <h3 dir="rtl">רגע, למי זה מתאים?</h3>
                <p dir="rtl">
                  רכישת צפיות ליוטיוב נהדרת עבור חברות ועסקים המעלים סרטונים
                  ביוטיוב ומעוניינים לדחוף את הפרסום קדימה, כמו גם ליוטיוברים
                  המעוניינים להשיג כמות גדולה של עוקבים ולהפוך לנחשקים. בקיצור,
                  אם גם אתם רוצים להפוך את ערוץ היוטיוב שלכם לנחשק – הוסיפו לו
                  צפיות, עוקבים ולייקים.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tetxo-inner">
                <Image
                  className=""
                  src="/assets/images/you-four.png"
                  width={198}
                  height={198}
                  alt=""
                />
                <h3 dir="rtl">לדחוף את הסרטון קדימה ולפרוץ גבולות</h3>
                <p dir="rtl">
                  זה לא סוד שסרטון שמקבל תאוצה של צפיות הופך אותו לפופולרי, חזק
                  ועוצמתי בעיני הצופה, ולכן קניית צפיות ביוטיוב או קניית עוקבים
                  ביוטיוב יכולה בהחלט לתת פוש לסרטון ולאפשר לגולשים להיכנס אליו.
                  חשבו לרגע, נניח שחיפשתם לצפות בסרטון המסביר כיצד להחליף חלק
                  מסוים ברכב, ניגשתם למנוע החיפוש, כתבתם את מה שברצונכם לראות,
                  ועכשיו עליכם לבחור מבין 7-10 אופציות. מה תבחרו? וודאי את
                  הסרטון שיש לו הכי הרבה צפיות. אגב, יוטיוב כבר תדע לקדם את
                  הסרטון הוויראלי לראש התוצאות.
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

export default Buyyoutube;
