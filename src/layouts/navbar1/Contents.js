import { ArrowForward, PlayArrow, PlayCircleOutlineOutlined } from '@mui/icons-material'
import { Dialog } from '@mui/material';
import React, { useCallback, useState } from 'react'
import { Box, Modal, Slide } from "@mui/material";
import QuoteForm from "../../components/quoteForm/QuoteForm";
import { FaTimes } from 'react-icons/fa';

const Contents = React.memo(() => {
  const [show, setShow] = useState(false);

  const handleShowVideo = useCallback(() => setShow(true), []);
  const handleHideVideo = useCallback(() => setShow(false), []);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='md:mt-[90px] mt-[50px]'>
      <div className='text-center'>
        <div className='text-[#6e9240] font-[700]'>We Are Teas Gurus</div>
        <h1 className="title lg:text-[50px] md:text-[35px] text-[25px] mb-3 lg:font-[800] font-[800]">Pay Someone to Do My TEAS Exam - Take My Online Teas Exam</h1>
        <p>The Versatile Online Teas Proctored Help Company for Students. Teas Guru Makes Taking Exams & Answering Refreshing. Order Your Teas Exam, Tests, Quizzes and More…</p>
      </div>

      <div className='flex justify-center items-center w-full mt-10 md:gap-10 gap-5 md:flex-row flex-col'>
        <img src='https://www.onlineclassdoer.com/images/arrow-o_hucdbc3c6e4092cc6d519edca480433b8d_1593_073bf071b2d2cc5809b988eeca7e29cc.webp' className='hidden sm:flex h-[60px] mb-10' alt="Arrow" />
       
      <button onClick={handleOpen} className='bg-[#f7a72b] px-5 py-3 text-white rounded-[30px] font-[500] element'>Get a Free Quote <ArrowForward sx={{color:'white'}}/> </button>

      <button onClick={()=>setShow(true)} className='pl-1 py-1 pr-5 text-black rounded-[30px] font-[500] border border-[rgba(0,0,0,0.3)] hover:bg-white flex items-center gap-2 element2'> 
        <div style={{border:'1px solid rgba(0,0,0,0.3)',borderRadius:'20px',height:'40px',width:'40px',}} className='flex justify-center items-center bg-white'>
        <PlayArrow sx={{color:'blue'}}/>  
        </div>
        How it Works </button>

        {show && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50" aria-hidden={true}>
                    <div
                        className="relative rounded-lg shadow-lg max-[345px]:w-[315px] h-[228px] w-[360px] sm:w-[700px] sm:h-[450px] xl:w-[1000px] xl:h-[560px] smm:mx-4">
                        <button
                            className="absolute -top-4 -right-4 text-2xl text-[#FFFFFF] w-8 h-8 rounded-full bg-black flex justify-center items-center "
                            onClick={()=>setShow(false)}
                        >
                            <FaTimes/>
                        </button>
                        <div
                            className="max-[345px]:w-[315px] h-[228px] w-[360px] sm:w-[700px] sm:h-[450px] xl:w-[1000px] xl:h-[560px] rounded-lg">
                            <iframe
                                data-testid="videoPlayerId"
                                className="w-full h-full rounded-lg"
                                src="https://www.youtube.com/embed/32jY9CECl7U?autoplay=1&playsinline=1"
                                title="Video Player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
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
      </div>
    </div>
  )
});

Contents.displayName = 'Contents';

export default Contents;