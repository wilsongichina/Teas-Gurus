import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import timelineData from "../../../constants/home/timelineData.json"



const Timeline = () => {
  // Split the data into two parts for each side
  const leftData = timelineData.filter((_, index) => index % 2 === 0);
  const rightData = timelineData.filter((_, index) => index % 2 !== 0);

  return (
    <div className='bg-[#fff4ce] sm:p-8 p-2 sm:py-20 py-4 my-10 rounded-xl'>
<div>
    <h2 className='sm:text-5xl text-2xl font-bold text-[#2f2f2] text-center uppercase'>How it Works</h2>

    <p className=' text-[#6e9240] font-bold text-center sm:text-base text-xs py-4'>We're talking about a company with a distinctive culture that sets us apart. Where else will you find such high levels of engagement, authentic communication and top-quality results? Here are is a graphical representation of how our TEAS exam taking service works.</p>
</div>
    <div className="relative pb-20 sm:block hidden">
      <div className='pt-[100px] absolute w-1/2 left-[100px]'>
        {leftData.map((item, index) => (
          <div className="flex-grow relative min-h-[300px]" key={index}>
            <div className='flex gap-10 items-start'>
              <div className='text-end pt-20'>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
              <div className='!z-50 flex items-center pt-12'>
                <div className='w-9 h-1 bg-[#4587ca]' />
                <span className="flex items-center justify-center shadow-md h-[100px] w-[100px]  p-4 bg-white border-[#4587ca] border-[6px] rounded-full -left-6">
                <img src={item.icon} alt="" className='  ' />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto px-4 py-8 flex justify-end gap-0 w-full">
        <div className=""></div>
        <div className="w-1/2">
          {rightData.map((item, index) => (
            <div className="flex-grow relative min-h-[300px]" key={index}>
              <div className="absolute h-full left-12 z-0 border-l-8 border-[#4587ca] pl-6">
                <div className="mb-12 ml-6"></div>
              </div>
              <div className='flex gap-8 items-start'>
                <div className='!z-50 flex items-center'>
                  <span className="flex items-center justify-center shadow-md h-[100px] w-[100px]   p-4 bg-white border-[#4587ca] border-[6px] rounded-full -left-6">
                  <img src={item.icon} alt="" />
                  </span>
                  <div className='w-9 h-1 bg-[#4587ca]' />
                </div>
                <div className='items-center pt-8'>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* for mobile screen */}
    <div className="sm:hidden block">
      <div className="">
        {timelineData.map((item, index) => (
          <div className="flex-grow relative pb-20" key={index}>
            <div className={`flex gap-4 items-start ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
              {/* Conditional Rendering for Left and Right Layout */}
              {index % 2 === 0 ? (
                <>
                  {/* Left Layout */}
                  <div className='text-left'>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-gray-600 sm:text-base text-xs">{item.description}</p>
                  </div>
                  <div className='!z-50 flex items-center'>
                    <div className='w-9 h-1 bg-[#4587ca]' />
                    <span className="flex items-center justify-center shadow-md h-[50px] w-[50px] p-2 bg-white border-[#4587ca] border-[6px] rounded-full -left-6">
                      <img src={item.icon} alt="" />
                    </span>
                  </div>
                </>
              ) : (
                <>
                  {/* Right Layout */}
                
                  <div className='text-left'>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-gray-600 sm:text-base text-xs">{item.description}</p>
                  </div>
                  <div className='!z-50 flex items-center'>
                    <span className="flex items-center justify-center shadow-md h-[50px] w-[50px] p-2 bg-white border-[#4587ca] border-[6px] rounded-full -left-6">
                      <img src={item.icon} alt="" />
                    </span>
                    <div className='w-9 h-1 bg-[#4587ca]' />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default React.memo(Timeline);
