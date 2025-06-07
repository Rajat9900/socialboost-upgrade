import Image from "next/image";

function Header() {
  return (
    <div>
       <div className="header-main">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid p-0">
   <div className="contact-btn">
    <a href="#">Contact Us</a>
   </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">SoundCloud promotion</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">Facebook Promotion</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">YouTube Promotion</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">Instagram Promotion</a>
        </li>
        
        
      </ul>
      
    </div>
     <a className="navbar-brand" href="#">
         <Image
                      className=""
                      src="/assets/images/logo.png"
                      width={130}
                      height={80}
                      alt=""
                    />
    </a>
  </div>
</nav>
       </div>
       </div>
    </div>
  )
}

export default Header
