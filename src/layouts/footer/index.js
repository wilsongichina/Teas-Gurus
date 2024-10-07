import {
  FacebookOutlined,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import { FaTiktok } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const links = [
  {
    url:"https://www.facebook.com/teas.gurus",
    icon:<FacebookOutlined />
  },{
    url:"https://www.tiktok.com/@teas.gurus",
    icon:<FaTiktok />
  },{
    url:"https://www.instagram.com/teas.gurus/",
    icon:<Instagram />
  },{
    url:"https://www.linkedin.com/company/teas-gurus/",
    icon:<LinkedIn />
  },
]
const Footer = React.memo(()=> {
  const navigate = useNavigate()
  return (
    <div className=" h-auto w-full bg-[#050038] flex justify-center py-[80px]">
      <div className="md:w-[85%] w-[92%]">
        <div className="flex w-full md:justify-between md:items-start md:flex-row flex-col justify-center items-center ">
          <div className="flex flex-col md:items-start items-center">
            <a href='/'><img
                src="/Teas Gurus Logo.png"
                alt="Teas Gurus Logo"
                className="md:h-auto h-[20px] md:w-[100px] lg:w-[150px]"
              />
            </a>
            <div className="text-[#999] mt-4 w-[94%] md:text-left text-center">
            We Offer Online Teas Exam Services in The United States and Other Countries Around the World
            </div>
          </div>
          <div className="flex gap-2 items-center md:mt-0 mt-[40px]">
            {
              links && links.length>0 && links.map((item,index)=>(
                <div key={index} className="h-[50px] w-[50px] rounded-[10px] bg-white flex justify-center items-center cursor-pointer">
                  <a href={item.url}>{item.icon}</a>
                  
                </div>
              ))
            }
          </div>
        </div>

        <div className="mt-[90px]">
          <hr></hr>

          <div className="mt-[60px] flex md:justify-between w-full md:flex-row flex-col">
            <div className="md:w-[60%] w-full">
              <div className="md:text-[35px] text-[30px] font-[700] text-white">
                Disclaimer
              </div>
              <div className="text-[#999]">
              Teas Gurus: At Teas Gurus we offer help on online/remote teas exams. Our tailored services include proctored exam assistance for nursing students of all academic levels. Engage us today to complete your TEAS exam at an affordable price.
              </div>
            </div>

            <div className="flex md:gap-[120px] gap-10 items-start md:flex-row flex-col">
              <div className="flex flex-col gap-3 md:mt-0 mt-10">
                <div className="text-[20px] font-[700] text-white">Company</div>
                <div onClick={()=>navigate("/about")} className="text-[#999] font-[500] cursor-pointer">About Us</div>
                <div onClick={()=>navigate("/faq")} className="text-[#999] font-[500] cursor-pointer">FAQS</div>
                <div onClick={()=>navigate("/How-it-Works")} className="text-[#999] font-[500] cursor-pointer">How it Works</div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-[20px] font-[700] text-white">Legal</div>
                <div className="text-[#999] font-[500]">Guarentees</div>
                <div className="text-[#999] font-[500]">Privacy Policy</div>
                <div className="text-[#999] font-[500]">Terms & Conditions</div>
                <div className="text-[#999] font-[500]">
                  Money Back Guarentee
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[60px]">
          <hr></hr>
          <div className="text-[#999] font-[500] text-center mt-[50px]">
          Disclaimer: Copyright © 2024 Teas Gurus. All rights reserved. We offer assistance on remote/online teas exams. Feel free to contact us.
          </div>
        </div>
      </div>
    </div>
  );
})
export default Footer;
