"use client";

import React from "react";
import Image from "next/image";
import Header from "../components/header/page";
import Footer from "../components/footer/page";

function Youtubedetail() {
  return (
    <div>
      <Header />
      <section>
        <div className="banner-top insta-bnr youtube-right no-image">
          <Image
            className="banar-bk"
            src="/assets/images/youtube.bk.png"
            width={1920}
            height={362}
            alt=""
          />
          <div className="container">
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
              קניית לייקים בפייסבוק ושירותי קנייה נוספים לתמונות, הפוסטים,
              הסרטונים ועמוד הפייסבוק שלך. התשלום חד פעמי, מאובטח לגמרי והרכישה
              דיסקרטית לחלוטין - שמות הלקוחות מוצפנים ולעולם לא ייחשפו.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="buyer-tab youtube-buy">
        <div className="container">
          <div className="buy-insta-bk">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  פעיל <br />
                  עוקבים
                </button>
                <button
                  className="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  <span>Recommended</span>איכות גבוהה
                  <br /> עוקבים
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="tabing-folower">
                  <div className="tab-white">
                    <div className="count-flowr">
                      <span>-</span>
                      <label>3000</label>
                      <span>+</span>
                    </div>
                    <ul>
                      <li>
                        <span>100</span>
                        <h6>עוקבים</h6>
                      </li>
                      <li>
                        <span>500</span>
                        <h6>עוקבים</h6>
                      </li>
                      <li className="grad-bk">
                        <span>1000</span>
                        <h6>עוקבים</h6>
                      </li>
                      <li>
                        <span>2500</span>
                        <h6>עוקבים</h6>
                      </li>
                      <li className="grad-test">
                        <span>5000</span>
                        <h6>30% Off</h6>
                      </li>
                      <li className="grad-test">
                        <span>10000</span>
                        <h6>40% Off</h6>
                      </li>
                    </ul>
                    <div className="folow-btn">
                      <label>$20.23</label>
                      <a href="/instadetail">לקנות עכשיו</a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                ...
              </div>
            </div>
            <div className="folower-list">
              <div className="rate">
                <Image
                  className=""
                  src="/assets/images/stars.svg"
                  width={80}
                  height={17}
                  alt=""
                />
              </div>
              <div className="clients">
                <Image
                  className=""
                  src="/assets/images/client.png"
                  width={215}
                  height={51}
                  alt=""
                />
              </div>
              <div className="coount-prp">
                <span>38,571 אנשים</span>
                <h6>נרכש פעמיים ומעלה</h6>
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
      <Footer />
    </div>
  );
}

export default Youtubedetail;
