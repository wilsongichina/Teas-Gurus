import React, { lazy, Suspense } from 'react'
import Loading from '../../components/loading'
import { Helmet } from "react-helmet";

const Header = lazy(() => import('../../layouts/Header'))
const BlogDetailsSection = lazy(() => import('../../contents/blogDetails/BlogDetailsSection'))

const BlogDetails = () => {
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
            <Header />
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<Loading/>}>
        <BlogDetailsSection />
      </Suspense>
    </div>
    </>
  )
}

export default BlogDetails
