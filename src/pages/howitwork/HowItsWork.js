import React, { lazy, Suspense } from 'react'
import Loading from '../../components/loading'
import { Helmet } from "react-helmet";
const Navbar2 = lazy(() => import('../../layouts/navbar2'))
const Services = lazy(() => import('../../contents/works/Services'))
const WorkCardSection = lazy(() => import('../../contents/works/workCard'))


const HowItsWork = () => {
  return (
    <>
    <Helmet>
        <title>
        How Does Our Take My TEAS Exam Service Work
        </title>
        <meta name="description" content="How it Works - TEAS Gurus" />
      </Helmet>
    <div className="w-[100%] justify-center flex md:mt-20 mt-3">
      <div className="md:w-[90%] w-[95%]">
        <Suspense fallback={<div><Loading/></div>}>
          <Navbar2/>
        </Suspense>
        <Suspense fallback={<div><Loading/></div>}>
          <WorkCardSection/>
          <Services/>
        </Suspense>
      </div>
    </div>
    </>
  )
}

export default React.memo(HowItsWork)