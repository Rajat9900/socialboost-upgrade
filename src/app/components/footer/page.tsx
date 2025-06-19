import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function Footer() {
  return (
    <div>
        <footer>
            <div className='logo-footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'>
                        <div className='left-footer'>
                            <h4>קידום בפייסבוק</h4>
                            <ul>
                                <li><a href='#'>קניית לייקים לדף בפייסבוק</a></li>
                                <li><a href='#'>קניית לייקים בפייסבוק</a></li>
                                 <li><a href='#'>קניית צפיות לפייסבוק</a></li>
                                  <li><a href='#'>קניית עוקבים בפייסבוק</a></li>
                            </ul>
                            
                        </div>
                    </div>
                   <div className='col-md-2'>
                        <div className='left-footer'>
                            <h4>קידום ביוטיוב</h4>
                            <ul>
                              
                                   <li><a href='#'>קניית צפיות ביוטיוב</a></li>
                                    <li><a href='#'>קניית עוקבים ביוטיוב</a></li>
                                    <li><a href='#'>קניית לייקים ביוטיוב</a></li>
                            </ul>
                            
                        </div>
                    </div>
                     <div className='col-md-3'>
                        <div className='left-footer'>
                            <h4>קידום באינסטגרם</h4>
                            <ul>
                              
                                    <li><a href='#'>קניית עוקבים באינסטגרם</a></li>
                                    <li><a href='#'>קניית לייקים באינסטגרם</a></li>
                                    <li><a href='#'>קניית צפיות באינסטגרם</a></li>
                                    <li><a href='#'>קניית תגובות באינסטגרם</a></li>
                                    <li><a href='#'>קניית צפיות לסטורי באינסטגרם</a></li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='left-footer'>
                            <h4>ניווט מהיר</h4>
                            <ul>
                              
                                   <li><a href='#'>אודות</a></li>
                                   <li><a href='#'>צור קשר</a></li>
                                   <li><a href='#'>בלוג</a></li>
                                   <li><a href='#'>תקנון האתר</a></li>
                                   <li><a href='#'>הצהרת נגישות</a></li>
                            </ul>
                            
                        </div>
                    </div>
                     <div className='col-md-3'>
                        <div className='left-footer'>
                             <Link className="navbar-brand" href="/">
                <Image
                  className=""
                  src="/assets/images/logo.png"
                  width={130}
                  height={80}
                  alt=""
                />
              </Link>
                           <p>המקום הטוב ביותר לקניית עוקבים, לייקים וצפיות ברשתות החברתיות - באיכות הגבוהה ביותר ובאחריות מלאה.

</p>
                            
                        </div>
                    </div>
                </div>
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
