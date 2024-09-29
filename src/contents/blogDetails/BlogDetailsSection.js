import React from 'react'
import blogData from "../../constants/blog/blogData.json"
import { useLocation } from 'react-router-dom';
import {
    FacebookOutlined,
    GitHub,
    Instagram,
    LinkedIn,
    Twitter,
  } from "@mui/icons-material";

const BlogDetailsSection = () => {
    
  const location = useLocation();
    const data = blogData;
    const itemID = location.pathname.split('/')[2]

    const [singleData] = data.filter((item) => item.id == itemID);
    // console.log(singleData)
  return (
    <div className='my-5'>
        <div className='h-[400px] md:h-[500px] lg:h-[600px] w-[95%] lg:w-[80%] mx-auto '>
            <img src={singleData?.image} alt="" className='h-full w-full object-cover rounded-2xl' />
        </div>

        <div className='w-[95%] lg:w-[60%] mx-auto'>
            <p className='text-[35px] sm:text-[45px] lg:text-[55px] font-bold '>How to get How to get How to get How to get</p>

            <p className='py-2 pt-4 text-[#555555] font-semibold'>APR 09, 2022 <span className=' px-2'>|</span> 3min read</p>

            <p className='text-[#777777] pt-7 sm:font-semibold'>How To Get Things Done When You are Short On Time And Energy Getting things done is not easy, but it’s not impossible because  Teas Gurus is here. Even if you have ...</p>

    {/* Author Information */}
            <div className='flex-col sm:flex-row flex p-5 border rounded-2xl my-10'>
                <div className='min-w-[110px] h-[80px]'>
                    <img
                        src="/avtar.webp"
                        alt={''}
                        className=" w-[80px] h-[80px] object-cover rounded-full mr-3"
                    />
                </div>
                <div>
                    <p className='text-2xl font-bold'>Author</p>
                    <p className='text-[#777777] py-4 font-semibold'>How To Get Things Done When You are Short On Time And Energy Getting things done is not easy, but it’s not impossible because Teas Gurus is here. Even if you have ...</p>

                    <div className="flex gap-2 items-center">
                
                        <div className="h-[50px] w-[50px] rounded-[10px] bg-white flex justify-center items-center cursor-pointer border">
                        <a><FacebookOutlined /></a>
                        </div>
                        <div className="h-[50px] w-[50px] rounded-[10px] bg-white flex justify-center items-center cursor-pointer border">
                        <a><Instagram /></a>
                        </div>
                        <div className="h-[50px] w-[50px] rounded-[10px] bg-white flex justify-center items-center cursor-pointer border">
                        <a><LinkedIn /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


      
    </div>
  )
}

export default BlogDetailsSection
