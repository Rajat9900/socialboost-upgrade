import React from 'react'
import Image from "next/image";
import Header from '../components/header/page'
import Footer from '../components/footer/page'

function Blog() {
  return (
    <div>
        <Header/>
             <section>
                    <div className="banner-top blog-banners">
                      <div className="container">
                        <h2>
                          שלנו <span>הבלוגים</span> 
                        </h2>
                        <p>
                         תובנות מומחים, אסטרטגיות ומעודכנות כדי לעזור לך לשלוט במדיה החברתית ולהשיג את יעדי המדיה החברתית שלך
                        </p>
                       
                       
                      </div>
                    </div>
                  </section>
                  <section className='blog-outer'>
                    <div className='container'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <div className='left-blog'>
                                        <div className='left-box'>
                                            <h4>Search <Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/circle.png"
                                                                    width={11}
                                                                    height={11}
                                                                    alt=""
                                                                  /></h4>
                                                                  <div className='form-group'>
                                                                    <input type='text' placeholder='Search for...'/>
                                                                    <span><button type='submit'><Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/src.png"
                                                                    width={34}
                                                                    height={34}
                                                                    alt=""
                                                                  /></button></span>
                                                                  </div>
                                        </div>
                                        <div className='left-box'>
                                            <h4>Categories <Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/circle.png"
                                                                    width={11}
                                                                    height={11}
                                                                    alt=""
                                                                  /></h4>
                                                                  <ul>
                                                                    <li>Facebook <Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/r-arrow.png"
                                                                    width={8}
                                                                    height={12}
                                                                    alt=""
                                                                  /></li>
                                                                  <li>Instagram <Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/r-arrow.png"
                                                                    width={8}
                                                                    height={12}
                                                                    alt=""
                                                                  /></li>
                                                                  <li>Youtube <Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/r-arrow.png"
                                                                    width={8}
                                                                    height={12}
                                                                    alt=""
                                                                  /></li>
                                                                  <li>SoundCloud <Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/r-arrow.png"
                                                                    width={8}
                                                                    height={12}
                                                                    alt=""
                                                                  /></li>
                                                                  </ul>
                                        </div>
                                        <div className='left-box'>
                                            <h4>Popular Tags  <Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/circle.png"
                                                                    width={11}
                                                                    height={11}
                                                                    alt=""
                                                                  /></h4>
                                                                  <div className='tags'>
                                                                    <span>Youtube</span>

                                                                    <span>Instagram</span>
                                                                    <span>Facebook</span>
                                                                  </div>
                                                                  </div>
                                    </div>
                                </div>
                                <div className='col-md-9'>
                                    <div className='right-blog'>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <div className='blog-card'>
                                                    <div className='imagr-card'>
                                                        <span>15.02.2021</span>
                                                        <Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/blog-one.png"
                                                                    width={350}
                                                                    height={200}
                                                                    alt=""
                                                                  />
                                                    </div>
                                                    <h4>שיווק באינסטגרם</h4>
                                                    <h5>איך להשיג יותר לייקים באינסטגרם</h5>
                                                    <p>אפליקציית האינסטגרם היא אחת מהרשתות החברתיות הכי מצליחות ברחבי העולם ועבור חלק מהאנשים שמנהלים בה פרופיל אישי היא </p>
                                                    <a href='/blogdetail'><Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/tl-arrow.png"
                                                                    width={37}
                                                                    height={37}
                                                                    alt=""
                                                                  /> קרא עוד</a>
                                                </div>
                                            </div>
                                               <div className='col-md-4'>
                                                <div className='blog-card'>
                                                    <div className='imagr-card'>
                                                        <span>15.02.2021</span>
                                                        <Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/blog-one.png"
                                                                    width={350}
                                                                    height={200}
                                                                    alt=""
                                                                  />
                                                    </div>
                                                    <h4>שיווק באינסטגרם</h4>
                                                    <h5>איך להשיג יותר לייקים באינסטגרם</h5>
                                                    <p>אפליקציית האינסטגרם היא אחת מהרשתות החברתיות הכי מצליחות ברחבי העולם ועבור חלק מהאנשים שמנהלים בה פרופיל אישי היא </p>
                                                    <a href='/blogdetail'><Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/tl-arrow.png"
                                                                    width={37}
                                                                    height={37}
                                                                    alt=""
                                                                  /> קרא עוד</a>
                                                </div>
                                            </div>
                                               <div className='col-md-4'>
                                                <div className='blog-card'>
                                                    <div className='imagr-card'>
                                                        <span>15.02.2021</span>
                                                        <Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/blog-one.png"
                                                                    width={350}
                                                                    height={200}
                                                                    alt=""
                                                                  />
                                                    </div>
                                                    <h4>שיווק באינסטגרם</h4>
                                                    <h5>איך להשיג יותר לייקים באינסטגרם</h5>
                                                    <p>אפליקציית האינסטגרם היא אחת מהרשתות החברתיות הכי מצליחות ברחבי העולם ועבור חלק מהאנשים שמנהלים בה פרופיל אישי היא </p>
                                                    <a href='/blogdetail'><Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/tl-arrow.png"
                                                                    width={37}
                                                                    height={37}
                                                                    alt=""
                                                                  /> קרא עוד</a>
                                                </div>
                                            </div>
                                               <div className='col-md-4'>
                                                <div className='blog-card'>
                                                    <div className='imagr-card'>
                                                        <span>15.02.2021</span>
                                                        <Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/blog-one.png"
                                                                    width={350}
                                                                    height={200}
                                                                    alt=""
                                                                  />
                                                    </div>
                                                    <h4>שיווק באינסטגרם</h4>
                                                    <h5>איך להשיג יותר לייקים באינסטגרם</h5>
                                                    <p>אפליקציית האינסטגרם היא אחת מהרשתות החברתיות הכי מצליחות ברחבי העולם ועבור חלק מהאנשים שמנהלים בה פרופיל אישי היא </p>
                                                    <a href='/blogdetail'><Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/tl-arrow.png"
                                                                    width={37}
                                                                    height={37}
                                                                    alt=""
                                                                  /> קרא עוד</a>
                                                </div>
                                            </div>
                                               <div className='col-md-4'>
                                                <div className='blog-card'>
                                                    <div className='imagr-card'>
                                                        <span>15.02.2021</span>
                                                        <Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/blog-one.png"
                                                                    width={350}
                                                                    height={200}
                                                                    alt=""
                                                                  />
                                                    </div>
                                                    <h4>שיווק באינסטגרם</h4>
                                                    <h5>איך להשיג יותר לייקים באינסטגרם</h5>
                                                    <p>אפליקציית האינסטגרם היא אחת מהרשתות החברתיות הכי מצליחות ברחבי העולם ועבור חלק מהאנשים שמנהלים בה פרופיל אישי היא </p>
                                                    <a href='/blogdetail'><Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/tl-arrow.png"
                                                                    width={37}
                                                                    height={37}
                                                                    alt=""
                                                                  /> קרא עוד</a>
                                                </div>
                                            </div>
                                               <div className='col-md-4'>
                                                <div className='blog-card'>
                                                    <div className='imagr-card'>
                                                        <span>15.02.2021</span>
                                                        <Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/blog-one.png"
                                                                    width={350}
                                                                    height={200}
                                                                    alt=""
                                                                  />
                                                    </div>
                                                    <h4>שיווק באינסטגרם</h4>
                                                    <h5>איך להשיג יותר לייקים באינסטגרם</h5>
                                                    <p>אפליקציית האינסטגרם היא אחת מהרשתות החברתיות הכי מצליחות ברחבי העולם ועבור חלק מהאנשים שמנהלים בה פרופיל אישי היא </p>
                                                    <a href='/blogdetail'><Image
                                                                    className="banar-bk"
                                                                    src="/assets/images/tl-arrow.png"
                                                                    width={37}
                                                                    height={37}
                                                                    alt=""
                                                                  /> קרא עוד</a>
                                                </div>
                                            </div>
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

export default Blog
