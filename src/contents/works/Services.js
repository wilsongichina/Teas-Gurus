import React, { useMemo } from 'react'

const ServiceCard = React.memo(({ number, color, image, title }) => (
  <div className='flex flex-col items-center'>
    <div className={`border-x-[30px] border-t-[30px] border-[${color}] md:w-[280px] w-[90%] rounded-t-lg bg-[${color}] relative`}>
      <img src={image} alt={title} className='rounded-t-lg' loading="lazy" />
      <div className='absolute top-[-70px] w-full flex justify-center items-center'>
        <div className='h-[60px] w-[60px] bg-white rounded-[50px] flex justify-center items-center'>
          <div className={`text-[30px] font-[800] text-[${color}]`}>{number.padStart(2, '0')}</div>
        </div>
      </div>
    </div>
    <div className='text-[28px] font-[800] mt-10'>{title}</div>
  </div>
));

const servicesData = [
  { number: '1', color: '#ffd02f', image: 'https://www.onlineclassdoer.com/images/process/01_hub012d3d163704b600ba7c54623f06123_27496_4d50f989bef0a026378909012f29cb57.webp', title: 'Assignments' },
  { number: '2', color: '#ed6f78', image: 'https://www.onlineclassdoer.com/images/process/02_huc2171545522a8dbabd8c08ce3b902ca5_32949_0fb91cd1b0318f46e1192bd2f277b0c4.webp', title: 'Quizzes' },
  { number: '3', color: '#4262ff', image: 'https://www.onlineclassdoer.com/images/process/01_hub012d3d163704b600ba7c54623f06123_27496_4d50f989bef0a026378909012f29cb57.webp', title: 'Tests' },
  { number: '4', color: '#6e9240', image: 'https://www.onlineclassdoer.com/images/process/01_hub012d3d163704b600ba7c54623f06123_27496_4d50f989bef0a026378909012f29cb57.webp', title: 'Participating' },
];

const Services = () => {
  const memoizedServices = useMemo(() => 
    // servicesData.map((service, index) => (
    //   <ServiceCard key={index} {...service} />
    // )),
    []
  );

  return (
    <div className=''>
      {/* <h1 className="title lg:text-[35px] md:text-[30px] text-[25px] mb-3 lg:font-[800] font-[800] text-center">
        What Are The Services We Offer?
      </h1>

      <div className='flex justify-center w-full'>
        <div className='text-[#6e9240] font-[700] text-center md:w-[50%]'>
          Our online services have professional subject matter experts who will do the classes for them, including doing their.
        </div>
      </div> */}

      <div className='flex justify-center flex-wrap gap-7 mt-[80px] lg:mb-[130px] mb-[80px]'>
        {memoizedServices}
      </div>
    </div>
  )
}

export default React.memo(Services);