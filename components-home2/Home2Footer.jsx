import FooterLogo from "../src/assets/home-2/home2-footer/home2-footer-logo.png"

const Home2Footer = () => {
  return (
    <>
    <section className="home-2-footer-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                 <div className="home-2-footer-logo-and-cont">
                    <div className="home-2-footer-logo">
                        <img src={FooterLogo} alt="" />
                    </div>
                    <p>Leverage agile frameworks to provide a robust synopsis for strategy collaborative thinking to further the overall value proposition.</p>
                 </div>
                </div>
                <div className="col-lg-2">
                    <div className="home-2-footer-logo-page-links">
                        <h4 className="home-2-footer-logo-pages-tit">
                        Pages
                        </h4>

                        <ul className="home-2-footer-logo-pages-lu-checks">
                            <li>About Us</li>
                            <li>Our Team </li>
                            <li>Our Project</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2">
                <div className="home-2-footer-logo-Utility-links">
                        <h4 className="home-2-footer-logo-Utility-tit">
                        Utility
                        </h4>

                        <ul className="home-2-footer-logo-Utility-lu-checks">
                            <li>About Us</li>
                            <li>Our Team </li>
                            <li>Our Project</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="home-2-footer-logo-Subscribe-links">
                <h4 className="home-2-footer-logo-Subscribe-tit">
                Subscribe
                </h4>

                <input className="home-2-footer-logo-Subscribe-input" type="text"  placeholder='Email here*'/>

                <a href="#" className="home-2-footer-btn">
                Send Now
                </a>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home2Footer