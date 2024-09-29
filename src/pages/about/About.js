import React, { lazy, Suspense } from 'react'
import Loading from '../../components/loading'
import { Helmet } from "react-helmet";
const Navbar3 = lazy( () => import( '../../layouts/navbar3' ) )
const Twitt = lazy( () => import( '../../contents/about/Twitt' ) )
const Cards = lazy( () => import( '../../contents/about/Cards' ) )
const VisionSection = lazy( () => import( '../../contents/about/VisionSection' ) )
const LogoSlider = lazy( () => import( '../../contents/about/LogoSlider' ) )

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us – TEAS Gurus
        </title>
        <meta name="description" content="We Take Your Nursing Exams across All Academic Levels and Subjects" />
      </Helmet>
      <div className="w-[100%] justify-center flex md:mt-20 mt-3">
        <div className="md:w-[90%] w-[95%]">
          <Suspense fallback={<div><Loading /></div>}>
            <Navbar3 />
          </Suspense>
          <Suspense fallback={<div><Loading /></div>}>
            {/* <LogoSlider /> */}
            <Twitt />
            <Cards />
            <VisionSection />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default React.memo( About )