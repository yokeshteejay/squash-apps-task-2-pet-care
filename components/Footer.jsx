import Linkedin from "../src/assets/home/footer/linkedin.png"
import Twitter from "../src/assets/home/footer/twitter.png"
import Facebook from "../src/assets/home/footer/facebook.png"

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="row">
                <div className="footer-logo-ng-copy-rights-wrap">
                    <div className="footer-logo">
                        <img src="../src/assets/home/footer/footer-Logo.svg" alt="" />
                    </div>

                    <h4 className="copy-rights">
                    © 2023 Copyrights, All rights reserved. Design by <b>Passion Themes</b>
                    </h4>
                </div>

                <ul className="terms-conditions">
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Refund Policy</li>
                  <li>Get Support</li>
                </ul>

                <div className="contact-cont-and-social-media-links">
                <ul className="footer-contact-detail">
                    <li>
                        <div className="footer-contact-img">
                          <img src="../src/assets/home/footer/footer-contact-img.svg" alt="" />
                        </div>
                        <div className="footer-contact-cont">
                            <span>Emergency Call</span>
                            <h4 className="footer-contact-name">
                            Esther Howard
                            </h4>
                        </div>
                    </li>
                    <li>
                        <div className="footer-contact-img">
                          <img src="../src/assets/home/footer/footer-contact-img.svg" alt="" />
                        </div>
                        <div className="footer-contact-cont">
                            <span>Emergency Call</span>
                            <h4 className="footer-contact-name">
                            Esther Howard
                            </h4>
                        </div>
                    </li>
                    <li>
                        <div className="footer-contact-img">
                          <img src="../src/assets/home/footer/footer-contact-img.svg" alt="" />
                        </div>
                        <div className="footer-contact-cont">
                            <span>Emergency Call</span>
                            <h4 className="footer-contact-name">
                            Esther Howard
                            </h4>
                        </div>
                    </li>
                </ul>

                <div className="social-media-links">
                    <img src={Linkedin} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={Facebook} alt="" />
                </div>
                </div>
 
                
            </div>
        </div>
    </footer>
    
    </>
  )
}

export default Footer