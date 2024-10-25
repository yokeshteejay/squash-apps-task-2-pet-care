import MainImg from "../src/assets/home-2/WhatOurCustomerSay/WhatOurCustomerSay-main-img.png"

const WhatOurCustomerSay = () => {
  return (
    <>
    <section className="What-Our-Customer-Say-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="What-Our-Customer-Say-img">
              <img src={MainImg} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="What-Our-Customer-Say-cont">
              <h4 className="What-Our-Customer-Say-img-tit">
              What Our <b>Customer</b> Say
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default WhatOurCustomerSay