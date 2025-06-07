import React from "react";
import Image from "next/image";
import Header from "../components/header/page";
import Footer from "../components/footer/page";

function About() {
  return (
    <div>
      <Header />
      <section>
        <div className="banner-top about-bnr">
          <div className="container">
            <h2>
              העסק שלנו <span>אודות</span>
            </h2>
            <p>
              SocialBoost.co.il הוא אתר המספק שירותי קניית עוקבים, לייקים וצפיות
              לרשתות החברתיות מהמובילים בשוק במחירים הנמוכים והמשתלמים ביותר.
            </p>
          </div>
        </div>
      </section>

      <section className="testo-secion">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="testo-left">
                <Image
                  className=""
                  src="/assets/images/catoon.png"
                  width={470}
                  height={338}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="testo-right about-desc">
                <h6>להגדיל את הדף שלך</h6>
                <h2>
                  {" "}
                  שלך לשלב הבא!<span> קח את הדף</span>
                </h2>

                <p>
                  אנחנו כאן כדי לעזור לך! קניית עוקבים ולייקים היא דרך מעולה
                  להפוך את דף הרשת החברתית שלך לדף פופולארי שימשוך אליו את הקהל
                  הנחשף אליו. באמצעות השירותים שלנו תוכל למשוך את הקהל
                  הפוטנציאלי ולהפוך את דף הרשת החברתי שלך לחזק עוצמתי ומקצועי
                  יותר ובכך תשיג את התוצאות שתמיד חלמת עליהם.
                </p>
                <p>
                  חבילות קניית עוקבים והלייקים לאינסטגרם, בפייסבוק וביוטיוב
                  נועדו להגביר את מסעות הפרסום שלך ברשת החברתית במהירות
                  וביעילות. השירותים שלנו מתאימים לעסקים קטנים גדולים ובינוניים,
                  לאמנים, דוגמנים ובעצם כל מי שרוצה לבלוט ברשת החברתית.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-points">
        <div className="container">
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
      <Footer />
    </div>
  );
}

export default About;
