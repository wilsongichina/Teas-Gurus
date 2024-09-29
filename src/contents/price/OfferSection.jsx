import React, { useMemo } from 'react'
import OfferCard from '../../components/offerCard/OfferCard';
import offerCardData from "../../constants/price/offerCardData.json"

const OfferSection = () => {
  const offerCards = useMemo(() => (
    offerCardData.map((item) => (
      <OfferCard key={item.id} item={item} />
    ))
  ), []);
  
  return (
    <div className='rounded-lg py-10 lg:px-40 px-4 mt-10'>
      <h1 className='text-center font-bold text-4xl'>We Also offer Discounts!</h1>
      <div className='text-center my-4 mb-10 text-sm text-[#6e9240] font-semibold'>
      Receive high-quality, 100% original TEAS exam services every time. Get a price estimate for your prep in as little as 5 minutes. For comprehensive study plans or full courses, you can opt to pay in affordable installments
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-4'>
        {offerCards}
      </div>
    </div>
  )
}

export default OfferSection