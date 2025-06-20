'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react"; // add useState

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // add state

  return (
    <div>
      <div className="header-main">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid p-0">
              <div className="contact-btn">
                <Link href={"/contact"}>צור קשר</Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)} // handle toggle
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse${
                  menuOpen ? " show" : ""
                }`} // toggle show class
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/blog"
                    >
                      בלוג
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">
                      אודות
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/buysoundcloud">
                      קידום סאונדקלאוד
                    </a>
                       <ul className="dropdown-menu">
                     <li><a href="/instagram" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose">כל שירותי האינסטגרם 
                     <Image
                  className=""
                  src="/assets/images/sound.png"
                  width={25}
                  height={11}
                  alt=""
                />
                     </a></li>
                     <li><a href="/instagram-followers" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose"> קניית עוקבים באינסטגרם
                       <Image
                  className=""
                  src="/assets/images/usr.png"
                  width={25}
                  height={25}
                  alt=""
                />
                     </a></li>
                     <li><a href="/instagram-likes" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose"> קניית לייקים באינסטגרם
                        <Image
                  className=""
                  src="/assets/images/heart.png"
                  width={25}
                  height={22}
                  alt=""
                />
                     </a></li>
                     <li><a href="/instagram-views" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose"> קניית צפיות באינסטגרם 
                     
                       <Image
                  className=""
                  src="/assets/images/ey.png"
                  width={25}
                  height={17}
                  alt=""
                />
                </a></li>
                     <li><a href="/instagram-comments" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose">קניית תגובות באינסטגרם 
                      <Image
                  className=""
                  src="/assets/images/chat.png"
                  width={25}
                  height={21}
                  alt=""
                />
                     </a></li>
                     <li><a href="/instagram-story-views" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose">קניית צפיות לסטורי באינסטגרם  <Image
                  className=""
                  src="/assets/images/cam.png"
                  width={25}
                  height={22}
                  alt=""
                /></a></li>
                     <li><a href="/igrobot" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose">קניית רובוט אינסטגרם  
                       <Image
                  className=""
                  src="/assets/images/andriod.png"
                  width={19}
                  height={22}
                  alt=""
                />
                     </a></li> </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/buyfacebook">
                      קידום פייסבוק
                    </a>
                       <ul className="dropdown-menu">
                     <li><a href="/instagram" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose">כל שירותי האינסטגרם 
                     <Image
                  className=""
                  src="/assets/images/fbb.png"
                  width={11}
                  height={25}
                  alt=""
                />
                     </a></li>
                     <li><a href="/instagram-followers" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose"> קניית עוקבים באינסטגרם
                       <Image
                  className=""
                  src="/assets/images/usr.png"
                  width={25}
                  height={25}
                  alt=""
                />
                     </a></li>
                     <li><a href="/instagram-likes" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose"> קניית לייקים באינסטגרם
                        <Image
                  className=""
                  src="/assets/images/heart.png"
                  width={25}
                  height={22}
                  alt=""
                />
                     </a></li>
                     <li><a href="/instagram-views" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose"> קניית צפיות באינסטגרם 
                     
                       <Image
                  className=""
                  src="/assets/images/ey.png"
                  width={25}
                  height={17}
                  alt=""
                />
                </a></li>
                     <li><a href="/instagram-comments" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose">קניית תגובות באינסטגרם 
                      <Image
                  className=""
                  src="/assets/images/chat.png"
                  width={25}
                  height={21}
                  alt=""
                />
                     </a></li>
                     <li><a href="/instagram-story-views" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose">קניית צפיות לסטורי באינסטגרם  <Image
                  className=""
                  src="/assets/images/cam.png"
                  width={25}
                  height={22}
                  alt=""
                /></a></li>
                     <li><a href="/igrobot" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose">קניית רובוט אינסטגרם  
                       <Image
                  className=""
                  src="/assets/images/andriod.png"
                  width={19}
                  height={22}
                  alt=""
                />
                     </a></li> </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/buyyoutube">
                      קידום יוטיוב
                    </a>
                       <ul className="dropdown-menu">
                     <li><a href="/instagram" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose">כל שירותי האינסטגרם 
                     <Image
                  className=""
                  src="/assets/images/you.png"
                  width={24}
                  height={17}
                  alt=""
                />
                     </a></li>
                     <li><a href="/instagram-followers" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose"> קניית עוקבים באינסטגרם
                       <Image
                  className=""
                  src="/assets/images/usr.png"
                  width={25}
                  height={25}
                  alt=""
                />
                     </a></li>
                     <li><a href="/instagram-likes" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose"> קניית לייקים באינסטגרם
                        <Image
                  className=""
                  src="/assets/images/heart.png"
                  width={25}
                  height={22}
                  alt=""
                />
                     </a></li>
                     <li><a href="/instagram-views" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose"> קניית צפיות באינסטגרם 
                     
                       <Image
                  className=""
                  src="/assets/images/ey.png"
                  width={25}
                  height={17}
                  alt=""
                />
                </a></li>
                     <li><a href="/instagram-comments" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose">קניית תגובות באינסטגרם 
                      <Image
                  className=""
                  src="/assets/images/chat.png"
                  width={25}
                  height={21}
                  alt=""
                />
                     </a></li>
                     <li><a href="/instagram-story-views" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose">קניית צפיות לסטורי באינסטגרם  <Image
                  className=""
                  src="/assets/images/cam.png"
                  width={25}
                  height={22}
                  alt=""
                /></a></li>
                     <li><a href="/igrobot" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose">קניית רובוט אינסטגרם  
                       <Image
                  className=""
                  src="/assets/images/andriod.png"
                  width={19}
                  height={22}
                  alt=""
                />
                     </a></li> </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/buyinstagram">
                      קידום אינסטגרם <i className="fab fa-instagram"></i>
                    </Link>
                   <ul className="dropdown-menu">
                     <li><a href="/instagram" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose">כל שירותי האינסטגרם 
                     <Image
                  className=""
                  src="/assets/images/insta.png"
                  width={22}
                  height={22}
                  alt=""
                />
                     </a></li>
                     <li><a href="/instagram-followers" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose"> קניית עוקבים באינסטגרם
                       <Image
                  className=""
                  src="/assets/images/usr.png"
                  width={25}
                  height={25}
                  alt=""
                />
                     </a></li>
                     <li><a href="/instagram-likes" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose"> קניית לייקים באינסטגרם
                        <Image
                  className=""
                  src="/assets/images/heart.png"
                  width={25}
                  height={22}
                  alt=""
                />
                     </a></li>
                     <li><a href="/instagram-views" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose"> קניית צפיות באינסטגרם 
                     
                       <Image
                  className=""
                  src="/assets/images/ey.png"
                  width={25}
                  height={17}
                  alt=""
                />
                </a></li>
                     <li><a href="/instagram-comments" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose">קניית תגובות באינסטגרם 
                      <Image
                  className=""
                  src="/assets/images/chat.png"
                  width={25}
                  height={21}
                  alt=""
                />
                     </a></li>
                     <li><a href="/instagram-story-views" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose">קניית צפיות לסטורי באינסטגרם  <Image
                  className=""
                  src="/assets/images/cam.png"
                  width={25}
                  height={22}
                  alt=""
                /></a></li>
                     <li><a href="/igrobot" data-toggle="collapse" data-target=".navbar-collapse" className="needToClose">קניית רובוט אינסטגרם  
                       <Image
                  className=""
                  src="/assets/images/andriod.png"
                  width={19}
                  height={22}
                  alt=""
                />
                     </a></li> </ul>
                  </li>
                </ul>
              </div>
              <Link className="navbar-brand" href="/">
                <Image
                  className=""
                  src="/assets/images/logo.png"
                  width={130}
                  height={80}
                  alt=""
                />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
