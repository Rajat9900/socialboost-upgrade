"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import Link from "next/link";

function Buyfacebook() {
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
            src="/assets/images/facebook-bk.png"
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
                <div className="right-insta-detial facebook-right">
                  <h2>
                    {" "}
                    <Image
                      className=""
                      src="/assets/images/facebook-ic.png"
                      width={42}
                      height={42}
                      alt=""
                    />
                    שירותי הקידום <span>בפייסבוק </span>
                  </h2>
                  <p dir="rtl">
                    קניית לייקים בפייסבוק ושירותי קנייה נוספים לתמונות, הפוסטים,
                    הסרטונים ועמוד הפייסבוק שלך. התשלום חד פעמי, מאובטח לגמרי
                    והרכישה דיסקרטית לחלוטין - שמות הלקוחות מוצפנים ולעולם לא
                    ייחשפו.
                  </p>
                  <div className="ft-btn">
                    <a href="/facebookdetail" className="com-btn">
                      חקור שירותים
                    </a>
                    <a href="/facebookdetail" className="com-btn">
                      התחילו
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="don-ar">
              <Image
                className=""
                src="/assets/images/face-cirlce.png"
                width={58}
                height={58}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="our-packinner-outer facebook-pack">
        <div className="container">
          <h3>
            החבילות שלנו <span></span>
          </h3>
          <div className="row">
            {/* Views Package */}
            <div className="col-md-4">
              <div className="our-packinner facebook-box facebook-red-dark">
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
                    <Link href="/facebookdetail">קנה צפיות</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Likes Package */}
            <div className="col-md-4">
              <div className="our-packinner facebook-box facebook-red-med">
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
                    <Link href="/facebookdetail">קנה צפיות</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Followers Package */}
            <div className="col-md-4">
              <div className="our-packinner facebook-box facebook-red-light">
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
                    <Link href="/facebookdetail">קנה צפיות</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-points facebook-pack">
        <div className="container">
          <h3>
            הסבר על קידום בפייסבוק <span></span>
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

      <section className="tetxo facebook-pack">
        <div className="container">
          <h2>
            נהנים ממיתוג גבוה עם <span>קידום בפייסבוק</span>
          </h2>
          <p dir="rtl">
            הרשת החברתית הפופולארית ביותר בעולם כיום היא פייסבוק. בכל יום
            מצטרפים אל הרשת עוד ועוד משתמשים, והיא ממשיכה לבסס עצמה כפלטפורמה
            חברתית ועסקית מובילה. הזירה שהחלה כמרחב בו נוצרים קשרים חברתיים לצד
            חידוש קשרים עם מכרים מהעבר, משמשת כיום גם כפלטפורמה עסקית מובילה. אם
            גם אתם בעלים של עסק, לבטח גם לכם ישנו עמוד פייסבוק עסקי שבו אתם
            מפיצים את השירותים, המוצרים והמבצעים שאתם רוצים לקדם. המטרה? למשוך
            כמה שיותר קהלים, או בשפת הפייסבוק – עוקבים ולייקים.
          </p>

          <p dir="rtl">
            מה שמעצב את דעת הקהל במידה רבה בפייסבוק הם הלייקים: ככל שישנם יותר
            לייקים על סטטוסים, תמונות ועל העמוד הראשי שלכם, כך הנראות הינה
            מחמיאה יותר ותורמת למיתוג שלכם.
            <a href="#">הקידום והפיתוח של חשבונות הסושיאל</a> הינם חיוניים
            והעבודה עליהם הינה עבודה בלתי פוסקת. אם גם אתם רוצים ליהנות מנקודת
            פתיחה שתעניק לכם יתרון, קניית עוקבים בפייסבוק היא התשובה לכם.
            <a href="#">רכישת הלייקים לפייסבוק</a> יוצרת תמונה חזקה יותר וממותגת
            יותר שמחמיאה לעסק שלכם.
          </p>

          <p dir="rtl" className="extra-para">
            מה שהתחיל כסוד שמור, הפך כיום לאקט שיווקי שרבים מבתי שיווק נוקטים
            בו: רכישת לייקים עבור פוסטים שלא קיבלו מספיק תגובות, תמונות שמספר
            הלייקים עליהן נמוך בהשוואה לתמונות אחרות ועמודים שנעצת עוקבים אחרים
            עשו שירות בודדות בלבד. השירות הינו דיסקרטי ומאפשר לכם לצאת לדרך אל
            מול הקהל הפוטנציאלי שלכם!
          </p>

          <h5 dir="rtl">למה לקדם את חשבון הפייסבוק?</h5>
          <div className="row">
            <div className="col-md-4">
              <div className="tetxo-inner">
                <Image
                  className=""
                  src="/assets/images/face-one.png"
                  width={198}
                  height={198}
                  alt=""
                />
                <h3 dir="rtl">יוצרים מהרגע הראשון תדמית של עסק מצליח</h3>
                <p dir="rtl">
                  המטרה שלכם היא לייצר רושם ראשוני מוצלח כבר מהרגע הראשון. בעת
                  שלקוח פוטנציאלי יכנס אל העמוד העסקי שלכם ויגלה כי התנועה בו
                  דלה, סביר כי הוא יעדיף לחפש אחר בית עסק אחר המעניק שירות דומה
                  לשלכם. הסיבה? כמות גדולה יותר של עוקבים יוצרת תחושה של קהל
                  לקוחות נאמן ומרוצה, בעוד דפים דלים יוצרים את התחושה ההפוכה –
                  עסק נטוש שאין לו קהל. מעבר לכך, בהנחה ואתם רוצים להגדיל את
                  מספר העוקבים שלכם בעמוד העסקי, הרי שלגולשים קל הרבה יותר לעשות
                  לייק לעמוד שכבר יש בו כמות נאה של לייקים, מאשר דפים עם כמות
                  קטנה מאד של לייקים. קדמו גם את עצמכם והפכו להיות שחקן במרכזי
                  בזירה השיווקית ברשת החברתית המובילה. כך, תוכלו להגדיל את מספר
                  הצפיות בסרטונים בפייסבוק, כמות העוקבים והמגיבים לסטטוסים.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tetxo-inner">
                <Image
                  className=""
                  src="/assets/images/face-two.png"
                  width={198}
                  height={198}
                  alt=""
                />
                <h3 dir="rtl">
                  קוראים את המפה העסקית: מדוע חשוב להשקיע בפייסבוק?
                </h3>
                <p dir="rtl">
                  מדוע חשוב כל כך להשקיע דווקא בנראות הפייסבוק? כיום, מרבית
                  המפרסמים פונים דווקא אל פלטפורמה זו מסיבה פשוטה: אנשים רוכשים
                  מוצרים ושירותים דרך הפייסבוק – החל מפריטי לבוש, דרך אנשי מקצוע
                  ועד ארוחה במסעדה. אם עד לא מזמן הזירות הפרסומיות המובילות היו
                  העיתונים, תשדירי הפרסומת בטלוויזיה או ברדיו, הרי שכיום אין בית
                  עסק שלא מחזיק בעמוד פייסבוק מתוחזק ומושקע שדרכו מפיצים תכנים
                  שיווקיים.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tetxo-inner">
                <Image
                  className=""
                  src="/assets/images/face-three.png"
                  width={198}
                  height={198}
                  alt=""
                />
                <h3 dir="rtl">קניית הלייקים: מה המשמעות ואיך היא מתבצעת?</h3>
                <p dir="rtl">
                  ראשית, חשוב להבין איך עובד המנגנון של קניית הלייקים. במידה
                  ומאחוריכם עסק שאתם רוצים לקדם, ובמידה והעמוד העסקי שלכם צריך
                  חיזוק של עוקבים או נראות מרשימה יותר של לייקים על הפוסטים,
                  תוכלו לפנות לחברה העוסקת באספקה של לייקים. התהליך הינו תהליך
                  קצר שאינו מבוסס על לוגיסטיקה סבוכה, אלא כל הנדרש מכם הוא
                  להגדיר היכן למקם את הלייקים ומה יהיה מספרם. חשוב לבחור בכמות
                  לייקים מאוזנת שתייצר תמונה אותנטית ככל הניתן. אם בעמוד העסקי
                  שלכם ישנם כעת 400 עוקבים, הרי שלהעלות אותם מיד ל-5000 אינו
                  הדבר המושכל לעשות. .
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

export default Buyfacebook;
