import React, { lazy, Suspense } from 'react'
import { Helmet } from "react-helmet";
const Navbar2 = lazy(() => import('../../layouts/navbar2'))
const PriceCardSection = lazy(() => import('../../contents/price/PriceCardSection'))
const OfferSection = lazy(() => import('../../contents/price/OfferSection'))


const Prices = () => {
  return (
    <>
    <Helmet>
        <title>Prices – TEAS Gurus</title>
        <meta name="description" content="Prices - TEAS Gurus" />
      </Helmet>
    <div className="w-[100%] justify-center flex md:mt-20 mt-3">
      <div className="md:w-[90%] w-[95%]">
        <Suspense fallback={<div>Loading navbar...</div>}>
          <Navbar2/>
        </Suspense>
        <Suspense fallback={<div>Loading content...</div>}>
          <PriceCardSection/>
          <OfferSection/>
        </Suspense>
        {/* <PromoSection/> */}
      </div>
    </div>
    </>
  )
}

export default React.memo(Prices)