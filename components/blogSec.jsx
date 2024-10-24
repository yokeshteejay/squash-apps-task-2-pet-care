import Img1 from "../src/assets/blog/blog-swiper-img-1.png"

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

// import required modules
// import { Pagination } from 'swiper/modules';  

const BlogSec = () => {
  return (
    <>
    <section className="blog-section-home">
      <div className="clients-feedback-tit-wraper">
            <h3 className='clients-feedback-main-tit'>What We <b>Do</b>.</h3>
        </div>
        <div className="container">
            <div className="row">
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="blog-swiper-card">
            <div className="blog-swiper-card-img">
              <img src={Img1} alt="" />
            </div>
            <div className="admin-nd-pet-care">
              <span className="admin">By Admin</span>
              <div className="span-pet-care">Pet, Care, Medical</div>
            </div>
           <h4 className="blog-swiper-card-tit">
           The best care takers of any kind of pets
           </h4>

           <a href="#" className="blog-swiper-card-read-more-btn">Read more</a>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-swiper-card">
            <div className="blog-swiper-card-img">
              <img src={Img1} alt="" />
            </div>
            <div className="admin-nd-pet-care">
              <span className="admin">By Admin</span>
              <div className="span-pet-care">Pet, Care, Medical</div>
            </div>
           <h4 className="blog-swiper-card-tit">
           The best care takers of any kind of pets
           </h4>

           <a href="#" className="blog-swiper-card-read-more-btn">Read more</a>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-swiper-card">
            <div className="blog-swiper-card-img">
              <img src={Img1} alt="" />
            </div>
            <div className="admin-nd-pet-care">
              <span className="admin">By Admin</span>
              <div className="span-pet-care">Pet, Care, Medical</div>
            </div>
           <h4 className="blog-swiper-card-tit">
           The best care takers of any kind of pets
           </h4>

           <a href="#" className="blog-swiper-card-read-more-btn">Read more</a>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-swiper-card">
            <div className="blog-swiper-card-img">
              <img src={Img1} alt="" />
            </div>
            <div className="admin-nd-pet-care">
              <span className="admin">By Admin</span>
              <div className="span-pet-care">Pet, Care, Medical</div>
            </div>
           <h4 className="blog-swiper-card-tit">
           The best care takers of any kind of pets
           </h4>

           <a href="#" className="blog-swiper-card-read-more-btn">Read more</a>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-swiper-card">
            <div className="blog-swiper-card-img">
              <img src={Img1} alt="" />
            </div>
            <div className="admin-nd-pet-care">
              <span className="admin">By Admin</span>
              <div className="span-pet-care">Pet, Care, Medical</div>
            </div>
           <h4 className="blog-swiper-card-tit">
           The best care takers of any kind of pets
           </h4>

           <a href="#" className="blog-swiper-card-read-more-btn">Read more</a>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-swiper-card">
            <div className="blog-swiper-card-img">
              <img src={Img1} alt="" />
            </div>
            <div className="admin-nd-pet-care">
              <span className="admin">By Admin</span>
              <div className="span-pet-care">Pet, Care, Medical</div>
            </div>
           <h4 className="blog-swiper-card-tit">
           The best care takers of any kind of pets
           </h4>

           <a href="#" className="blog-swiper-card-read-more-btn">Read more</a>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-swiper-card">
            <div className="blog-swiper-card-img">
              <img src={Img1} alt="" />
            </div>
            <div className="admin-nd-pet-care">
              <span className="admin">By Admin</span>
              <div className="span-pet-care">Pet, Care, Medical</div>
            </div>
           <h4 className="blog-swiper-card-tit">
           The best care takers of any kind of pets
           </h4>

           <a href="#" className="blog-swiper-card-read-more-btn">Read more</a>

          </div>
        </SwiperSlide>
      </Swiper>

       <div className="mySwiper"></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BlogSec