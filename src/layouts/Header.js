import React, { useState, useCallback, useMemo } from 'react';
import { KeyboardArrowDown, Menu } from '@mui/icons-material';
import { Modal, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import QuoteForm from '../components/quoteForm/QuoteForm';

const Header = ({ show, setShow }) => {

  

  const navigation = useNavigate();
  const [company, setCompany] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleMenu = useCallback(() => setShow(prev => !prev), []);

  const location = useLocation();
  const companyUrl = ["/about", "/faq", "/How-it-Works"];
  return (
    <div className="flex justify-between items-center">
      <a
        href='/'
      >
        <img
          src="/Teas Gurus Logo.png"
          className="md:h-auto h-[20px] md:w-[100px] lg:w-[150px]"
        />
      </a>

      <div className="lg:flex gap-5 xl:gap-10 items-center hidden">
        <div
          onClick={() => navigation('/')}
          className="font-[500] cursor-pointer"
        >
          <span className={`${
            location.pathname === '/' ? 'text-[#294dff]':""
          }`}>Home</span>
          
        </div>

        <div
              onClick={() => navigation('/about')}
              className={`${
                location.pathname === '/about' && 'text-[#294dff]'
              } font-[500] cursor-pointer text-black`}
            >
              About Us
        </div>
        <div
              onClick={() => navigation('/how-it-works')}
              className={`${
                location.pathname === '/how-it-works' && 'text-[#294dff]'
              } font-[500] cursor-pointer text-black`}
            >
              How it Works
        </div>

        {/* <div
          onMouseEnter={() => setCompany(!company)}
          className={`${
            companyUrl.includes(location.pathname) && 'text-[#294dff]'
          } font-[500] cursor-pointer text-black`}
        >
          Company
          <KeyboardArrowDown />
        </div>  */}
        {company && (
          <div
            onMouseLeave={() => setCompany(!company)}
            className="absolute w-[200px] h-auto bg-white top-[160px] p-5 flex flex-col gap-4 rounded-md"
          >
            <div
              onClick={() => navigation('/about')}
              className={`${
                location.pathname === '/about' && 'text-[#294dff]'
              } font-[500] cursor-pointer text-black`}
            >
              <span className={`${
            location.pathname === '/about' ? 'text-[#294dff]':""
          }`}>About Us</span>
              
        </div>

        <div
              onClick={() => navigation('/faq')}
              className={`${
                location.pathname === '/faq' && 'text-[#294dff]'
              } font-[500] cursor-pointer text-black`}
            >
              Faqs
            </div>

            <div
              onClick={() => navigation("/how-it-works")}
              className={`${
                location.pathname === "/how-it-works" && "text-[#294dff]"
              } font-[500] cursor-pointer text-black`}
            >
              How it Works
            </div>
          </div>
        )}
        
        <div
          onClick={() => navigation('/prices')}
          className={`${
            location.pathname === '/prices' && 'text-[#294dff]'
          } font-[500] cursor-pointer text-black`}
        >
          <span className={`${
            location.pathname === '/prices' ? 'text-[#294dff]':""
          }`}>Prices</span>
          
        </div>
       

        <div
        onClick={() => navigation('/faq')}
              className={`${
                location.pathname === '/faq' && 'text-[#294dff]'
              } font-[500] cursor-pointer text-black`}
            >
               <span className={`${
            location.pathname === '/faq' ? 'text-[#294dff]':""
          }`}>FAQS</span>
        </div>
       
        {/* <div
          onClick={() => navigation('/blog')}
          className={`${
            location.pathname === '/blog' ? 'text-[#294dff]':""
          } font-[500] cursor-pointer text-black`}
        >
         <span className={`${
            location.pathname === '/blog' ? 'text-[#294dff]':""
          }`}>Blog</span>
        </div> */}
      </div>

      <div
              className=" cursor-pointer"
              onClick={() =>
                window.open(
                  "https://buy.stripe.com/4gw5mn0nm0mTfUk3",
                  "_blank"
                )
              }
            >
              <button className="button-bg px-2 sm:px-4 sm:py-3 text-white rounded-[30px] sm:font-[500] element3">
                Buy Now - $99
              </button>
            </div>

      <div className="lg:hidden flex gap-2 items-center">
        <div className="text-[18px] font-[500]">
          En<KeyboardArrowDown />
        </div>
        <Menu onClick={handleMenu} sx={{ fontSize: '40px', color: 'black' }} />
      </div>

      {/* Modal Implementation */}
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="quote-form-modal"
        aria-describedby="quote-form"
        disableEnforceFocus
        disableScrollLock
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxHeight: '90vh', 
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: '10px',
            overflowY: 'auto', 
            outline: 'none',
          }}
        >
          <QuoteForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};

export default React.memo(Header);