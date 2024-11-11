import React, { useMemo } from 'react'
import { FacebookOutlined, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import PromoSection from '../../contents/price/PromoSection'

import { FaTiktok } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const socialIcons = [
  { Icon: FacebookOutlined, ariaLabel: "Facebook" },
  { Icon: Twitter, ariaLabel: "Twitter" },
  { Icon: Instagram, ariaLabel: "Instagram" },
  { Icon: GitHub, ariaLabel: "GitHub" },
  { Icon: LinkedIn, ariaLabel: "LinkedIn" },
];

const companyLinks = [
  { text: "About Us", href: "/about" },
  { text: "FAQS", href: "/faq" },
  { text: "How it Works", href: "/how-it works" },
];

const legalLinks = [
  { text: "Guarentees", href: "#" },
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Terms & Conditions", href: "/terms-and-conditions" },
  { text: "Money Back Guarentee", href: "#" },
];

const Footer2 = React.memo(() => {
  const socialIconsElements = useMemo(() => (
    socialIcons.map(({ Icon, ariaLabel }) => (
      <div key={ariaLabel} className='h-[50px] w-[50px] rounded-[10px] bg-white flex justify-center items-center cursor-pointer'>
        <Icon aria-label={ariaLabel} />
      </div>
    ))
  ), []);

  const navigate = useNavigate()
  return (
    <div className='h-auto w-full relative md:mt-[150px] sm:mt-[500px] mt-[550px] bg-[#050038] pt-[200px] flex justify-center py-[80px]'>
      <div className='absolute md:top-[-150px] sm:top-[-500px] top-[-550px] md:px-0 px-4 flex justify-center w-full'>
        <PromoSection/>
      </div>
      <div className='md:w-[85%] w-[92%]'>
        <div className='flex w-full md:justify-between md:items-start md:flex-row flex-col justify-center items-center'>
          <div className='flex flex-col md:items-start items-center'>
            <a href='/'><img
                  src="/Teas Gurus Logo.png"
                  alt="Teas Gurus Logo"
                  className="md:h-auto h-[20px] md:w-[100px] lg:w-[150px]"
                />
              </a>
            <div className='text-[#999] mt-4 w-[94%] md:text-left text-center'>We Offer Online Class Help Services In Many Countries And Cities Around The World</div>
          </div>
          <div className='flex gap-2 items-center md:mt-0 mt-[40px]'>
            {socialIconsElements}
          </div>
        </div>

        <div className='mt-[90px]'>
          <hr />
          <div className='mt-[60px] flex md:justify-between w-full md:flex-row flex-col'>
            <div className='md:w-[60%] w-full'>
              <div className='md:text-[35px] text-[30px] font-[700] text-white'>Disclaimer</div>
              <div className='text-[#999]'>Teas Gurus: At Teas Gurus we offer help on online/remote teas exams. Our tailored services include proctored exam assistance for nursing students of all academic levels. Engage us today to complete your TEAS exam at an affordable price.</div>
            </div>

            <div className='flex md:gap-[120px] gap-10 items-start md:flex-row flex-col'>
              <div className='flex flex-col gap-3 md:mt-0 mt-10'>
                <div className='text-[20px] font-[700] text-white'>Company</div>
                {companyLinks.map(link => (
                  <a key={link.text} href={link.href} className='text-[#999] font-[500]'>{link.text}</a>
                ))}
              </div>

              <div className='flex flex-col gap-3'>
                <div className='text-[20px] font-[700] text-white'>Legal</div>
                {legalLinks.map(link => (
                  <a key={link.text} href={link.href} className='text-[#999] font-[500]'>{link.text}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='mt-[60px]'>
          <hr />
          <div className='text-[#999] font-[500] text-center mt-[50px]'>
          Disclaimer: Copyright © 2024 Teas Gurus. All rights reserved. We offer assistance on remote/online teas exams. Feel free to contact us.
          </div>
        </div>
      </div>
    </div>
  )
});

Footer2.displayName = 'Footer2';

export default Footer2;