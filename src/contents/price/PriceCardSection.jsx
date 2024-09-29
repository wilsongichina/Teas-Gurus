import React, { useMemo } from 'react'
import PriceCard from '../../components/PriceCard/PriceCard';
import priceCardData from "../../constants/price/priceCardData.json"

const PriceCardSection = () => {
  const priceCards = useMemo(() => (
    priceCardData.map((item) => (
      <PriceCard key={item.id} item={item} />
    ))
  ), []);
  
  return (
    <div className='bg-[#FFF4CE] rounded-lg py-10 lg:px-40 px-4 mt-10 md:mt-[100px]'>
      <div className='text-center my-10 text-sm text-[#6e9240] font-semibold'>
      Receive high-quality, 100% original TEAS exam services every time. Get a price estimate for your prep in as little as 5 minutes. For comprehensive study plans or full courses, you can opt to pay in affordable installments
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-4'>
        {priceCards}
      </div>
    </div>
  )
}

export default PriceCardSection