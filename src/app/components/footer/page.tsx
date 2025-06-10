import React from 'react'
import Image from "next/image";

function Footer() {
  return (
    <div>
        <footer>
            <div className='logo-footer'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-3'>
                        <div className='left-footer'>
                            <p>המקום הטוב ביותר לקניית עוקבים, לייקים וצפיות ברשתות החברתיות - באיכות הגבוהה ביותר ובאחריות מלאה.</p>
                            <div className='ft-btn'>
                                <a href='#' className="com-btn">חקור שירותיםs</a>
                                <a href='#' className="com-btn">התחילו</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='right-footer'>
                             <Image
                                                  className=""
                                                  src="/assets/images/logo.png"
                                                  width={130}
                                                  height={80}
                                                  alt=""
                                                />
                            </div>
                        </div>
                </div>
            </div>
            </div>
            <div className='footer-nav'>
                <div className='container'>
                <ul>
                    <li><a href='#'>קידום בפייסבוק</a></li>
                     <li><a href='#'>קידום ביוטיוב</a></li>
                      <li><a href='#'>קידום באינסטגרם</a></li>
                       <li><a href='#'>ניווט מהיר</a></li>
                        <li><a href='#'>בלוג</a></li>
                         <li><a href='#'>צור קשר</a></li>
                          <li><a href='#'>אודות</a></li>
                </ul>
                </div>
            </div>
            <div className='copy-right'>
                <div className='container'>
                  <Image
                                                  className=""
                                                  src="/assets/images/pay.png"
                                                  width={284}
                                                  height={24}
                                                  alt=""
                                                />
                <p>כל הזכויות שמורות ל - סושיאל בוסט 2025 © | www.socialboost.co.il</p>
                <p>אתר זה אינו מזוהה ממומן או מורשה על ידי Instagram או כל מותג באתר זה.</p>
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
