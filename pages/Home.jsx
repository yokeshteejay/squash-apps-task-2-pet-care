
import Header from "../components/Header"
import HomeBanner from "../components/HomeBanner"
import AboutUsSec from "../components/AboutUsSec"
import GetEveryPetFoodsSec from "../components/GetEveryPetFoodsSec"
import WhatWeDo from "../components/WhatWeDo"
import OurGroomers from "../components/OurGroomers"
import ClientsFeedback from "../components/ClientsFeedback"
import SubscribeNewsletter from "../components/SubscribeNewsletter"
import BlogSec from "../components/blogSec"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
    <Header />
    <HomeBanner />
    <AboutUsSec />
    <GetEveryPetFoodsSec />
    <WhatWeDo />
    <OurGroomers />
    <ClientsFeedback />
    <SubscribeNewsletter />
    <BlogSec />
    <Footer />
    </>
  )
}

export default Home