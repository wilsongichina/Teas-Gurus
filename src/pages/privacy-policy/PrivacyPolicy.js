import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Loading from '../../components/loading'
import Navbar2 from '../../layouts/navbar2'

const PrivacyPolicy = () => {
  return (
    <>
        <Helmet>
        <title>
        Privacy Policy
        </title>
        <meta name="description" content="How it Works - TEAS Gurus" />
      </Helmet>
    <div className="w-[100%] justify-center flex md:mt-20 mt-3">
      <div className="md:w-[90%] w-[95%]">
        <Suspense fallback={<div><Loading/></div>}>
          <Navbar2/>
        </Suspense>
    </div>
    </div>

    <div className="w-[100%] justify-center flex md:mt-20 mt-3">

        <div className='md:w-[70%] w-[90%]'>
            <div></div>
            <div className='text-[17px]'>The following privacy notice explains our policy regarding the personal information we collect about you in the process of your cooperation with Take My Online Course website. It applies to the information we collect about:</div>
        </div>
        </div>

    </>
  )
}

export default PrivacyPolicy
