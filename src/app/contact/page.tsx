import React from 'react'
import Image from "next/image";
import Header from '../components/header/page'
import Footer from '../components/footer/page'

function Contact() {
  return (
    <div>
            <Header/>
                     <section>
      <div className="banner-top contact-banner">
        <div className="container">
          <h2>לְהִתְקַשֵׁר</h2>
          <p>אם יש לך שאלה כלשהי לגבי שירותי הצמיחה שלנו במדיה החברתית, אנא שלח לנו הודעה למטה</p>

        </div>
      </div>
    </section>
    <section className='contact-sec'> 
        <div className='container'>
            <div className='row'>
            <div className='col-md-6'>
                <div className='left-form'>
                        <h2>ביחד <span>בואו נעבוד</span></h2>
                        <p>אנא שתף ​​אותנו בשאילתתך כעת. אנא צור איתנו קשר אם יש לך בעיה כלשהי עם המדיה החברתית שלך</p>
                        <ul>
                            <li>
                                <span> <Image
                                                                    className=""
                                                                    src="/assets/images/ct-one.png"
                                                                    width={61}
                                                                    height={61}
                                                                    alt=""
                                                                  /></span>
                                <div>
                                    <h5>להתקשר אלינו</h5>
                                    <h4>053-9327096</h4>
                                </div>
                            </li>
                             <li>
                                <span> <Image
                                                                    className=""
                                                                    src="/assets/images/ct-two.png"
                                                                    width={61}
                                                                    height={61}
                                                                    alt=""
                                                                  /></span>
                                <div>
                                    <h5>שלח לנו דוא"ל</h5>
                                    <h4>support@socialboost.co.il</h4>
                                </div>
                            </li>
                             <li>
                                <span> <Image
                                                                    className=""
                                                                    src="/assets/images/ct-three.png"
                                                                    width={61}
                                                                    height={61}
                                                                    alt=""
                                                                  /></span>
                                <div>
                                    <h5>תְמִיכָה</h5>
                                    <h4>תמיכה 24/7</h4>
                                </div>
                            </li>
                             <li>
                                <span> <Image
                                                                    className=""
                                                                    src="/assets/images/ct-four.png"
                                                                    width={61}
                                                                    height={61}
                                                                    alt=""
                                                                  /></span>
                                <div>
                                    <h5>המשרד שלנו</h5>
                                    <h4>רימלט 16, רמת גן</h4>
                                </div>
                            </li>
                        </ul>
                </div>
            </div>

            <div className='col-md-6'>
                <div className='right-form'>
                    <h4>כתבו לנו</h4>
                    <p>יש לכם שאלה? צורך מסויים? נשמח לדעת</p>
                    <form>
                        <div className='formGroup'>
                            <label>שֵׁם</label>
                            <input type='text' placeholder='השם שלך'/>
                            <span>
                                <Image
                                                                    className=""
                                                                    src="/assets/images/user.png"
                                                                    width={24}
                                                                    height={24}
                                                                    alt=""
                                                                  />
                            </span>
                        </div>
                         <div className='formGroup'>
                            <label>אֶלֶקטרוֹנִי</label>
                            <input type='text' placeholder='youremail@example.com'/>
                            <span>
                                <Image
                                                                    className=""
                                                                    src="/assets/images/email.png"
                                                                    width={24}
                                                                    height={24}
                                                                    alt=""
                                                                  />
                            </span>
                        </div>
                         <div className='formGroup'>
                            <label>מספר טלפון</label>
                            <input type='text' placeholder='+1 234 567 890'/>
                            <span>
                                <Image
                                                                    className=""
                                                                    src="/assets/images/wtsapp.png"
                                                                    width={24}
                                                                    height={24}
                                                                    alt=""
                                                                  />
                            </span>
                        </div>
                         <div className='formGroup'>
                            <label>ההודעה שלך</label>
                            <textarea placeholder='אנא כתוב את הודעתך'></textarea>
                            <span>
                                <Image
                                                                    className=""
                                                                    src="/assets/images/write.png"
                                                                    width={24}
                                                                    height={24}
                                                                    alt=""
                                                                  />
                            </span>
                        </div>
                        <div className='formGroup'>
                            <input type='submit' value="לפנות אלינו"/>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    </section>
            <Footer/>
    </div>
  )
}

export default Contact
