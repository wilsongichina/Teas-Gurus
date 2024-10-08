import React, { useState, useMemo } from 'react'
import Header from '../Header'
import { KeyboardArrowDown } from '@mui/icons-material'
import QuoteForm from "../../components/quoteForm/QuoteForm";
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Dialog, Modal, Slide } from "@mui/material";

const NavItem = ({ title, hasDropdown }) => (
  <div className='font-[500]'>
    {title}
    {hasDropdown && <KeyboardArrowDown />}
  </div>
);

const Navbar2 = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigation = useNavigate()
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navItems = useMemo(() => [
      { title: 'Home',url:"/" },
      { title: 'About Us',url:"/about"},
      { title: 'How it Works',url:"/how-it-works" },
      { title: 'Prices',url:"/prices" },
      { title: 'FAQS',url:"/faq" },
      // { title: 'Blog',url:"/blog" },
    ], []);

    let currentPath = location.pathname.replace(/[^a-zA-Z0-9]/g, " ");

    return (
      <div className='lg:h-auto w-full h-auto bg-[#e4f0fd] rounded-[20px] md:px-[80px] md:py-10 px-3 py-4'>
        <Header show={show} setShow={setShow}/>
        {show && (
          <div 
            className='h-auto w-full bg-white rounded-[10px] mt-2 p-5  lg:hidden'
            style={{
              transform: `translateY(${show ? '0' : '-10px'})`,
              opacity: show ? 1 : 0,
              maxHeight: show ? '500px' : '0',
              transition: 'max-height 0.5s ease, opacity 0.5s ease, transform 0.5s ease',
              overflow: 'hidden',
            }}
          >
            <div className='flex gap-3 items-center flex-col'>
              {navItems.map((item, index) => (
                <div key={index} onClick={()=>navigation(item.url)}>
                <NavItem   {...item} />
                </div>
              ))}
              <button onClick={handleOpen} className='bg-[#294dff] px-5 py-3 text-white rounded-[30px] font-[500]'>
                Get a Free Quote
              </button>
            </div>
          </div>
        )}
        <Modal
        open={open}
        onClose={handleClose}
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
        <div className='md:mt-[90px] mt-[50px] text-center lg:pb-10'>
          <div className="title lg:text-[50px] md:text-[35px] text-[35px] mb-3 lg:font-[800] font-[800] text-black capitalize">
            {currentPath}
          </div>
          <div>Home {location.pathname}</div>
        </div>
        
      </div>
    )
}

export default React.memo(Navbar2);