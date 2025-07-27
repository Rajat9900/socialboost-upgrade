"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/header/page";
import Footer from "../components/footer/page";

function Payment() {
  const [firstModal, setFirstModal] = useState(true);
  const [secondModal, setSecondModal] = useState(false);
  return (
    <div>
      <Header />

      <section>
        <div className="banner-top insta-bnr no-image">
          <Image
            className="banar-bk"
            src="/assets/images/pay-org.png"
            width={1920}
            height={362}
            alt=""
          />
          <div className="container">
            <h2>תַשְׁלוּם</h2>
            <p>
              בחר את שיטת התשלום המועדפת עליך והשלם את ההזמנה שלך בצורה מאובטחת
              תוך שניות.
            </p>
          </div>
        </div>
      </section>

      <section className="paemt-main-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="payemnt-left">
                <h4>
                  <span>לַעֲרוֹך</span> סיכום הזמנה
                </h4>
                <ul>
                  <li>
                    <span>$21.60</span>
                    <div>
                      <h5>לייקים באינסטגרם</h5>
                      <h6>600 לייקים באינסטגרם מתחלקים ל-2 תמונות</h6>
                    </div>
                  </li>
                  <li>
                    <span>$21.60</span>
                    <div>
                      <h5>סכום משנה</h5>
                    </div>
                  </li>
                  <li>
                    <span>15%</span>
                    <div>
                      <h5>Tax</h5>
                    </div>
                  </li>
                  <li>
                    <span className="price">$24.84</span>
                    <div>
                      <h5>סַך הַכֹּל</h5>
                    </div>
                  </li>
                </ul>
                <div className="paybtn">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    שלם עכשיו
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="payemnt-right">
                <h4>
                  {" "}
                  <span>שרת מאובטח</span> מידע כרטיס אשראי{" "}
                </h4>
                <form>
                  <div className="formgroup">
                    <label>השם בכרטיס *</label>
                    <input type="text" placeholder="כפי שמוצג בכרטיס" />
                    <span>
                      {" "}
                      <Image
                        className="banar-bk"
                        src="/assets/images/us.png"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="formgroup payemt-field">
                    <div className="pay-lohgo">
                      <Image
                        className="banar-bk"
                        src="/assets/images/visa.png"
                        width={219}
                        height={27}
                        alt=""
                      />
                    </div>
                    <div className="payment-cards">
                      <label>השם בכרטיס *</label>
                      <input type="text" placeholder="כפי שמוצג בכרטיס" />
                      <span>
                        <Image
                          className="banar-bk"
                          src="/assets/images/card.png"
                          width={24}
                          height={24}
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="formgroup no-pad">
                        <label>CVV *</label>
                        <input type="number" placeholder="0000" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="formgroup">
                        <label> </label>
                        <input type=" text" placeholder="Year" />
                        <span>
                          <Image
                            className="banar-bk"
                            src="/assets/images/date.png"
                            width={24}
                            height={24}
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="formgroup">
                        <label>מספר כרטיס *</label>
                        <input type=" text" placeholder="Month" />
                        <span>
                          <Image
                            className="banar-bk"
                            src="/assets/images/date.png"
                            width={24}
                            height={24}
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="alert-data">
                  <div>
                    <h5>לשמור את פרטי כרטיס האשראי לפעם הבאה</h5>
                    <p>זה יאפשר יציאה מיידית בעתיד! קרא עוד</p>
                  </div>
                  <span>
                    <Image
                      className="banar-bk"
                      src="/assets/images/tick.png"
                      width={32}
                      height={32}
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Paymentstep model one */}

      {firstModal && (
        <div
          className="modal payemnt-modal"
          id="exampleModalOne"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="payment-steps">
                  <div className="payment-nav">
                    <span>
                      {" "}
                      <Image
                        className="banar-bk"
                        src="/assets/images/lt-ar.png"
                        width={18}
                        height={18}
                        alt=""
                      />
                    </span>
                    <div className="step-count">
                      <div className="left-step-count">
                        <Image
                          className="banar-bk"
                          src="/assets/images/step-three.png"
                          width={36}
                          height={36}
                          alt=""
                        />
                        STEP 3 of 4
                      </div>
                      <div className="right-step-count">
                        בחר תמונה או סרטון
                        <Image
                          className="banar-bk"
                          src="/assets/images/grad-user.png"
                          width={40}
                          height={40}
                          alt=""
                        />
                      </div>
                    </div>
                    <span>
                      {" "}
                      <Image
                        className="banar-bk"
                        src="/assets/images/rt-ar.png"
                        width={18}
                        height={18}
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="upload-docs">
                    <div className="upload-doc-head">
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          בחר הכול
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                      <h6>ניתן לבחור מספר תמונות בקנייה אחת</h6>
                    </div>

                    <div className="media-view">
                      <ul>
                        <li>
                          <Image
                            className="banar-bk"
                            src="/assets/images/doc.png"
                            width={90}
                            height={90}
                            alt=""
                          />

                          <Image
                            className="chk"
                            src="/assets/images/chk.png"
                            width={18}
                            height={18}
                            alt=""
                          />
                        </li>
                        <li>
                          <Image
                            className="banar-bk"
                            src="/assets/images/doc.png"
                            width={90}
                            height={90}
                            alt=""
                          />
                        </li>
                        <li>
                          <Image
                            className="banar-bk"
                            src="/assets/images/doc.png"
                            width={90}
                            height={90}
                            alt=""
                          />
                        </li>
                      </ul>
                      <a
                        className="pay-btn"
                        style={{cursor:'pointer'}}
                        onClick={() => {
                          setFirstModal(false), setSecondModal(true);
                        }}
                      >
                        Continue
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Paymentstep model two */}
      {secondModal && (
        <div
          className="modal payemnt-modal"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{display:'block'}}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="payment-steps">
                  <div className="payment-nav">
                    <span>
                      {" "}
                      <Image
                        className="banar-bk"
                        src="/assets/images/lt-ar.png"
                        width={18}
                        height={18}
                        alt=""
                      />
                    </span>
                    <div className="step-count">
                      <div className="left-step-count">
                        <Image
                          className="banar-bk"
                          src="/assets/images/step-three.png"
                          width={36}
                          height={36}
                          alt=""
                        />
                        STEP 3 of 4
                      </div>
                      <div className="right-step-count">
                        בחר תמונה או סרטון
                        <Image
                          className="banar-bk"
                          src="/assets/images/grad-user.png"
                          width={40}
                          height={40}
                          alt=""
                        />
                      </div>
                    </div>
                    <span>
                      {" "}
                      <Image
                        className="banar-bk"
                        src="/assets/images/rt-ar.png"
                        width={18}
                        height={18}
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="pay-border">
                    <div className="payment-user-name">
                      <h5>User Name</h5>
                      <div className="payemt-name-holder">
                        <div>
                          <h4>Noel D.</h4>
                          <h6>abc@gmail.com</h6>
                        </div>
                        <span>
                          <Image
                            className="banar-bk"
                            src="/assets/images/holdr.png"
                            width={51}
                            height={51}
                            alt=""
                          />
                        </span>
                      </div>
                    </div>

                    <div className="payemt-cards">
                      <h5>סיכום הזמנה</h5>
                      <ul>
                        <li>
                          <span>300</span> כמות לייקים :
                        </li>
                        <li>
                          <span>10.8 </span>סה"כ לתשלום :
                        </li>
                        <li>
                          <span></span>התשלום חד פעמי
                        </li>
                        <li>
                          <span></span>{" "}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              אני מאשר את התקנון.
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="all-pay-link">
                      <p>
                        <a href="#">? לחץ כאן .</a> קוד קופון
                      </p>
                      <a className="email-btn" href="#">
                        youremail@example.com{" "}
                        <Image
                          className="banar-bk"
                          src="/assets/images/email-blk.png"
                          width={20}
                          height={20}
                          alt=""
                        />
                      </a>
                      <a className="pay-btn" href="#">
                        <Image
                          className="banar-bk"
                          src="/assets/images/email-whit.png"
                          width={20}
                          height={20}
                          alt=""
                        />
                        Pay by credit card
                      </a>
                      <a className="payment-btn" href="#">
                        <Image
                          className="banar-bk"
                          src="/assets/images/email-whit.png"
                          width={20}
                          height={20}
                          alt=""
                        />
                        For payment with
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Payment;
