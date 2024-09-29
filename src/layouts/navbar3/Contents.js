import React, { useState, useMemo } from 'react'
import { ArrowForward } from '@mui/icons-material'
import { Box, Dialog, Modal, Slide } from "@mui/material";
import QuoteForm from "../../components/quoteForm/QuoteForm";


const Contents = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='flex md:mt-[80px] mt-[60px] w-full lg:justify-between lg:flex-row flex-col items-center justify-center'>
      <div className='lg:w-[50%] w-full'>
        <div className='text-[#6e9240] font-[700] md:text-start text-center'>We Are TEAS GURUS</div>
        <h1 className="title lg:text-[43px] md:text-[35px] text-[25px] mb-3 lg:font-[800] font-[800] lg:w-[80%] mt-4 md:text-start text-center">
        We Take Your Nursing Exams across All Academic Levels and Subjects
        </h1>
        <p className='lg:w-[90%] mt-4 md:text-start text-center'>
        At TEAS Gurus, we have a team of qualified tutors committed to helping you achieve your goals by providing expert assistance and personalized support. As trusted online helpers, we are ready to elevate your grades and ensure your success in your nursing career. We offer a variety of services, from online classes to Hesi A2 exams and GED exams, but we specialize mainly in TEAS tests/exams.
        </p>
        <br />
        <p className='lg:w-[90%] mt-4 md:text-start text-center'>"Success doesn’t come from what you do occasionally, it comes from what you do consistently." – Marie Forleo</p>
        <div className='lg:block flex justify-center items-center lg:mb-10'>
          <button onClick={handleOpen} className='bg-[#294dff] lg:px-5 py-3 px-5 text-white rounded-[30px] font-[500] mt-10'>
            Get a Free Quote 
            <ArrowForward sx={{color:'white'}}/>
          </button>
        </div>

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
      </div>

      <div className='lg:mt-0 mt-10'>
        <img 
          src='https://www.onlineclassdoer.com/images/banner-about_huce5e27e0034a2c8aad78f77c009e1021_369324_750d6fc7f4b9a04a9298b356044cbb6e.webp'
          alt="Teas Gurus Banner"
          loading="lazy"
          width="750"
          height="500"
        />
      </div>
    </div>
  )
}

export default React.memo(Contents)