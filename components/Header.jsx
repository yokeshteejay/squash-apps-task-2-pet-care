import Logo from "../src/assets/home/banner-and-header/logo.png"


const Header = () => {
  return (
    <>
    <header>
        <div className="container">
            <div className="row">
                <div className="logo-nav-appointment">
                    <div className="main-logo">
                        <img src={Logo} alt="" />
                    </div>

                    <ul className="nav-options">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blogs</li>
                        <li>Pages</li>
                        <li>Shop</li>
                    </ul>

                    <a className="header-btn" href="#">
                    Get Appointment
                    </a>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header