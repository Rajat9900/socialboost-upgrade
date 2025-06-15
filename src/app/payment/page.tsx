import React from "react";
import Image from "next/image";
import Header from '../components/header/page'
import Footer from '../components/footer/page'

function Payment() {
  return (
    <div>
            <Header/>

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
                        <h2>תַשְׁלוּם
                        </h2>
                        <p>
                          בחר את שיטת התשלום המועדפת עליך והשלם את ההזמנה שלך בצורה מאובטחת תוך שניות.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="paemt-main-sec">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="payemnt-left">
                                <h4><span>לַעֲרוֹך</span> סיכום הזמנה</h4>
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
                                    <a href="#">שלם עכשיו</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="payemnt-right">
                                <h4> <span>שרת מאובטח</span> מידע כרטיס אשראי </h4>
                                <form>
                                    <div className="formgroup">
                                        <label>השם בכרטיס *</label>
                                        <input type="text" placeholder="כפי שמוצג בכרטיס"/>
                                        <span> <Image
                                                    className="banar-bk"
                                                    src="/assets/images/us.png"
                                                    width={24}
                                                    height={24}
                                                    alt=""
                                                  /></span>
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
                                            <input type="text" placeholder="כפי שמוצג בכרטיס"/>
                                            <span><Image
                                                    className="banar-bk"
                                                    src="/assets/images/card.png"
                                                    width={24}
                                                    height={24}
                                                    alt=""
                                                  /></span>
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="formgroup no-pad">
                                                <label>CVV *</label>
                                                <input type="number" placeholder="0000"/>
                                            </div>
                                        </div>
                                          <div className="col-md-4">
                                            <div className="formgroup">
                                                <label> </label>
                                                <input type=" text" placeholder="Year"/>
                                                <span><Image
                                                    className="banar-bk"
                                                    src="/assets/images/date.png"
                                                    width={24}
                                                    height={24}
                                                    alt=""
                                                  /></span>
                                            </div>
                                        </div>
                                          <div className="col-md-4">
                                            <div className="formgroup">
                                                <label>מספר כרטיס *</label>
                                                <input type=" text" placeholder="Month"/>
                                                <span><Image
                                                    className="banar-bk"
                                                    src="/assets/images/date.png"
                                                    width={24}
                                                    height={24}
                                                    alt=""
                                                  /></span>
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
                
            <Footer/>
    </div>
  )
}

export default Payment
