import React, { useState, useMemo } from 'react'
import { Box, Dialog, Modal, Slide } from "@mui/material";
import QuoteForm from "../../components/quoteForm/QuoteForm";

const PromoSection = React.memo(() => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="bg-white md:w-[80%] w-full flex flex-col lg:flex-row items-center justify-between rounded-xl shadow-md">
      {/* Left Text Section */}
      <div className="lg:w-3/4 mb-6 p-8 lg:mb-0 lg:p-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
        Are These Legit Exact TEAS Questions?
          <br />
          <span className="text-blue-700">Yes, They are Legit!!
          </span>
        </h1>
        <p className="mt-4 text-gray-600">
        With this in mind, we confidently assure you: 'Absolutely! You're investing in us to help you achieve at least a 90—nothing less!"
        </p>
        <button onClick={handleOpen} className="mt-6 button-bg text-white font-semibold py-2 px-6 rounded-full ease-in-out duration-200 shadow-md hover:button-hover transition-colors">
          Get a Free Quote &rarr;
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

      {/* Right Decorative Section */}
      <div className="lg:w-1/4">
        <img src="/card.webp" alt="Decorative Image" className="w-full h-[300px] object-cover" />
      </div>
    </div>
  );
});

PromoSection.displayName = 'PromoSection';

export default PromoSection;