
import Img1 from "../src/assets/home-2/pet-food-sec/home2-pet-food-tit.png"
import Img2 from "../src/assets/home-2/pet-food-sec/home2-pet-food-tit1.png"
import Img3 from "../src/assets/home-2/pet-food-sec/home2-pet-food-tit2.png"
import Img4 from "../src/assets/home-2/pet-food-sec/home2-pet-food-tit3.png"


const Home2petFoods = () => {
  return (
    <section className="home2-pet-food-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="home2-pet-food-card">
                        <div className="home2-pet-food-img">
                            <img src={Img1} alt="" />
                        </div>

                        <h4 className="home2-pet-food-tit" >Pet Care</h4>

                        <a href="#" className="home2-pet-food-btn" >Read more</a>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="home2-pet-food-card">
                        <div className="home2-pet-food-img">
                            <img src={Img2} alt="" />
                        </div>

                        <h4 className="home2-pet-food-tit" >Pet Care</h4>

                        <a href="#" className="home2-pet-food-btn" >Read more</a>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="home2-pet-food-card">
                        <div className="home2-pet-food-img">
                            <img src={Img3} alt="" />
                        </div>

                        <h4 className="home2-pet-food-tit" >Pet Care</h4>

                        <a href="#" className="home2-pet-food-btn" >Read more</a>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="home2-pet-food-card">
                        <div className="home2-pet-food-img">
                            <img src={Img4} alt="" />
                        </div>

                        <h4 className="home2-pet-food-tit" >Pet Care</h4>

                        <a href="#" className="home2-pet-food-btn" >Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home2petFoods