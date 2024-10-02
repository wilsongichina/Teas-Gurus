import React, { lazy, Suspense } from 'react'
import Loading from '../../components/loading'
import { Helmet } from "react-helmet";

const Navbar2 = lazy(() => import('../../layouts/navbar2'))
const BlogCardSection = lazy(() => import('../../contents/blog/BlogCardSection'))

const Blog = () => {
  return (
    <>
    <Helmet>
        <title>Blog – TEAS Gurus
        </title>
        <meta name="description" content="Blog – TEAS Gurus" />
      </Helmet>
    <div className="md:mt-20 mt-3">
      <div className="w-full flex justify-center">
        <div className="md:w-[90%] w-[95%]">
          <Suspense fallback={<><Loading/></>}>
            <Navbar2 />
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<Loading/>}>
        <BlogCardSection />
      </Suspense>
    </div>
    </>
  )
}

export default React.memo(Blog)