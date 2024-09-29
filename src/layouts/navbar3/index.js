import React, { useState, useCallback, useMemo } from 'react'
import Header from '../Header'
import { KeyboardArrowDown } from '@mui/icons-material'
import QuoteForm from "../../components/quoteForm/QuoteForm";
import { Box, Dialog, Modal, Slide } from "@mui/material";
import Contents from './Contents'
import { useLocation, useNavigate } from 'react-router-dom'

const NavItem = React.memo(({ title, hasDropdown }) => (
  <div className='font-[500]'>
    {title}
    {hasDropdown && <KeyboardArrowDown />}
  </div>
));

NavItem.displayName = 'NavItem';

const Navbar3 = () => {
    const [show, setShow] = useState(false);
    const navigation = useNavigate()
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const toggleShow = useCallback(() => {
        setShow(prev => !prev);
    }, []);

    const navItems = useMemo(() => [
      { title: 'Home',url:"/" },
      { title: 'About Us',url:"/about"},
      { title: 'How it Works',url:"/how-its-work" },
      { title: 'Prices',url:"/prices" },
      { title: 'FAQS',url:"/faq" },
      // { title: 'Blog',url:"/blog" },
    ], []);

    const dropdownStyle = useMemo(() => ({
        transform: show ? 'translateY(0)' : 'translateY(-10px)',
        opacity: show ? 1 : 0,
        maxHeight: show ? '500px' : '0',
        transition: 'max-height 0.5s ease, opacity 0.5s ease, transform 0.5s ease',
        overflow: 'hidden',
    }), [show]);

    return (
        <div className='lg:h-auto w-full h-auto bg-[#ffe3e5] md:rounded-[20px] rounded-[10px] md:px-[60px] md:py-10 px-3 py-4'>
            <Header show={show} setShow={toggleShow}/>
            {show && (
                <div className='h-auto w-full bg-white rounded-[10px] mt-2 p-5 lg:hidden' style={dropdownStyle}>
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

            <Contents/>
    </div>
  )
}

export default Navbar3
