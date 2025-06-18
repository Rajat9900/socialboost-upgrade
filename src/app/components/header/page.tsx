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
                <Link href={"/contact"}>Contact Us</Link>
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
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/buysoundcloud">
                      SoundCloud promotion
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/buyfacebook">
                      Facebook Promotion
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/buyyoutube">
                      YouTube Promotion
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/buyinstagram">
                      Instagram Promotion
                    </Link>
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
