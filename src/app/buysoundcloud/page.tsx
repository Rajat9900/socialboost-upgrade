"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import Link from "next/link";

function Buycloud() {
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
            src="/assets/images/cloud-bg.png"
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
                <div className="right-insta-detial cloud-right">
                  <h2>
                    {" "}
                    <Image
                      className=""
                      src="/assets/images/cloud-ic.png"
                      width={64}
                      height={40}
                      alt=""
                    />
                    שירותי הקידום <span>ביוטיוב</span>
                  </h2>
                  <p>
                    קניית צפיות ביוטיוב ממשתמשים אמיתיים מכל העולם ועוד מגוון
                    שירותי קידום ביוטיוב הכוללים סאבים, לייקים לסרטוני יוטיוב
                    ועוד. התשלום חד פעמי, מאובטח לגמרי והרכישה דיסקרטית לחלוטין
                    - שמות הלקוחות מוצפנים ולעולם לא ייחשפו.
                  </p>
                  <div className="ft-btn">
                    <a href="/soundclouddetail" className="com-btn">
                      חקור שירותים
                    </a>
                    <a href="/soundclouddetail" className="com-btn">
                      התחילו
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="don-ar">
              <Image
                className=""
                src="/assets/images/cloud-cirlce.png"
                width={58}
                height={58}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="our-packinner-outer cloud-pack">
        <div className="container">
          <h3>
            החבילות שלנו <span></span>
          </h3>
          <div className="row">
            {/* Views Package */}
            <div className="col-md-4">
              <div className="our-packinner cloud-box cloud-red-dark">
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
                    <Link href="/soundclouddetail">קנה צפיות</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Likes Package */}
            <div className="col-md-4">
              <div className="our-packinner cloud-box cloud-red-med">
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
                    <Link href="/soundclouddetail">קנה צפיות</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Followers Package */}
            <div className="col-md-4">
              <div className="our-packinner cloud-box cloud-red-light">
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
                    <Link href="/soundclouddetail">קנה צפיות</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-points cloud-pack">
        <div className="container">
          <h3>
            הסבר על קידום בסאונדקלאוד <span></span>
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

      <Footer />
    </div>
  );
}

export default Buycloud;
