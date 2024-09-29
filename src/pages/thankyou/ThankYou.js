import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FacebookOutlined,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { FaTiktok } from "react-icons/fa6";

const ThankYou = () => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-center'>
      <div className='py-10 px-2 sm:px-5 bg-gray-100 w-[96%] md:w-[80%] lg:w-[65%] xl:w-[50%] my-20 '>
        <p className='text-2xl font-bold text-green-800 '>Thank You for Reaching Out!</p>

        <p className=' text-gray-600 py-4'>We’ve received your submission and will get back to you within 
          <strong> 5 minutes</strong> . Here’s what happens next:</p>
          <p className=' text-gray-500 pl-2 pt-2'> <strong>Confirmation: </strong>We’re reviewing your information and will send a confirmation email shortly.</p>
          <p className=' text-gray-500 pl-2 pt-2'> <strong>Response Time: </strong>You can expect a reply from us in just a few minutes.</p>
          <p className=' text-gray-500 pl-2 pt-2'> <strong>Further Assistance: </strong>If you have any urgent questions, feel free to contact us at info@teasgurus.com.</p>

        <p className=' text-gray-600 py-4'>In the meantime, you can:</p>
          <p className=' text-gray-500 pl-2 pt-2'>
             <strong>Explore our website</strong> at <a href="https://teasgurus.com">teasgurus.com </a>for more information.</p>
          
            <div className="flex gap-2 items-center flex-col sm:flex-row  text-gray-500 pl-2 pt-2">
                <span className=''>Follow us on </span>

                <div className='flex gap-2 items-center'>
                  <div className="h-[50px] w-[50px] rounded-[10px] bg-white flex justify-center items-center cursor-pointer border">
                  <a href='https://www.facebook.com/teas.gurus'><FacebookOutlined /></a>
                  </div>
                  <div className="h-[50px] w-[50px] rounded-[10px] bg-white flex justify-center items-center cursor-pointer border">
                  <a href='https://www.instagram.com/teas.gurus/'><Instagram /></a>
                  </div>
                  <div className="h-[50px] w-[50px] rounded-[10px] bg-white flex justify-center items-center cursor-pointer border">
                  <a href='https://www.linkedin.com/company/teas-gurus/'><LinkedIn /></a>
                  </div>
                  <div className="h-[50px] w-[50px] rounded-[10px] bg-white flex justify-center items-center cursor-pointer border">
                  <a href='https://www.tiktok.com/@teas.gurus'><FaTiktok /></a>
                  </div>

                </div>
                <span>to stay updated with the latest news.</span>
            </div>
          
          <p className=' text-black text-lg font-semibold py-4'>Thanks again for getting in touch !</p>

        <div className='flex justify-between'>
          
          <p onClick={()=>navigate("/")} className='text-[16px] font-bold text-red-600 cursor-pointer'>Back to Home</p>
          <p onClick={()=>navigate("/")} className='text-[16px] font-bold text-red-600 cursor-pointer'>Explore More</p>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
