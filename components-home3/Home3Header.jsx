import HeaderLogo from "../src/assets/home-3/header/Logo.png"

const Home3Header = () => {
  return (
    <>
    <section className="home3-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="home3-header-wraper">
                    <div className="home3-header-logo">
                        <img src={HeaderLogo} alt="" />
                    </div>
                    <ul className="home3-header-nav-options">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blogs</li>
                        <li>Pages</li>
                        <li>Shop</li>
                    </ul>

                    <a href="#" className="home3-header-nav-btn primary-btn">
                    Shop Now
                    </a>
                </div>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Home3Header