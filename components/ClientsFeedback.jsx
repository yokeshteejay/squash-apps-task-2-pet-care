import React, { useRef, useState } from 'react';

import SwiperProfile from "../src/assets/home/clients-feedback/swiper-profile.png"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const ClientsFeedback = () => {
    
  return (
    <>
    <section className="clients-feedback-sec">
    <div className="clients-feedback-tit-wraper">
            <h3 className='clients-feedback-main-tit'>What We <b>Do</b>.</h3>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="swiper-custom-container">
                    <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
                    <SwiperSlide>
                        <div className="swiper-Slide-card">
                        <div className="swiper-Slide-inner-card">
                            <div className="swiper-Slide-inner-img">
                              <img src={SwiperProfile} alt="" />
                            </div>
                            <h4 className="swiper-Slide-tit">
                            Rocky Dixon
                            </h4>
                            <p>Enim nec dui nunc mattis enim ut. Tincidunt vitae semper quis lectus nulla. Venenatis tellus in metus vulputate eu scelerisque.</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-Slide-card">
                        <div className="swiper-Slide-inner-card">
                            <div className="swiper-Slide-inner-img">
                              <img src={SwiperProfile} alt="" />
                            </div>
                            <h4 className="swiper-Slide-tit">
                            Rocky Dixon
                            </h4>
                            <p>Enim nec dui nunc mattis enim ut. Tincidunt vitae semper quis lectus nulla. Venenatis tellus in metus vulputate eu scelerisque.</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-Slide-card">
                        <div className="swiper-Slide-inner-card">
                            <div className="swiper-Slide-inner-img">
                              <img src={SwiperProfile} alt="" />
                            </div>
                            <h4 className="swiper-Slide-tit">
                            Rocky Dixon
                            </h4>
                            <p>Enim nec dui nunc mattis enim ut. Tincidunt vitae semper quis lectus nulla. Venenatis tellus in metus vulputate eu scelerisque.</p>
                        </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="swiper-pagination"></div>
                </div>      
                </div>
            </div>
            
        </div>
    </section>
    </>
  )
  
}



export default ClientsFeedback