import React, { useState, useCallback, useMemo } from "react";
import Header from "./Header";
import Contents from "./Contents";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Dialog, Modal, Slide } from "@mui/material";
import QuoteForm from "../../components/quoteForm/QuoteForm";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Navbar4 = React.memo(() => {
  const [show, setShow] = useState(false);
  const [company, setCompany] = useState(false);
  const [open, setOpen] = useState(false);
  const navigation = useNavigate();

  const handleMenu = useCallback(() => setShow((prev) => !prev), []);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleCompany = useCallback(() => setCompany((prev) => !prev), []);

  const navigationItems = useMemo(
    () => [
      

      
    ],
    [handleCompany]
  );

  const renderNavigationItems = useMemo(
    () =>
      navigationItems.map((item, index) => (
        <div
          key={index}
          onClick={() => navigation(item.path)}
          onMouseEnter={item.onMouseEnter}
          className="font-[500] cursor-pointer  "
        >
          {item.label}
          {item.hasDropdown && <KeyboardArrowDown />}
        </div>
      )),
    [navigation, navigationItems]
  );

  return (
    <div className="lg:h-auto w-full h-auto bg-[#e4f0fd] rounded-[20px] md:px-[80px] md:py-10 px-3 py-4">
      <Header show={show} setShow={setShow} />
      {show && (
        <div className="h-auto w-full bg-white rounded-[10px] mt-2 p-5 lg:hidden transition">
          <div className="flex gap-3 items-center flex-col  ">
            {renderNavigationItems}
            <div
          onClick={() =>
            document
              .getElementById("choose")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="font-[500] cursor-pointer"
        >
          <span
            className="" 
          >
          Why Choose Us
          </span>
        </div>
            <div
          onClick={() =>
            document
              .getElementById("faq")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={`${
             "text-[#294dff]"
          } font-[500] cursor-pointer text-black`}
        >
          <span
            className={`${
              "" 
            }`}
          >
            FAQS
          </span>
        </div>
            <div
              className=" cursor-pointer"
              onClick={() =>
                window.open(
                  "https://buy.stripe.com/4gw5mn0nm0mTfUk3e9",
                  "_blank"
                )
              }
            >
              <button className="button-bg px-4 py-3 text-white rounded-[30px] font-[500] element3">
                Buy Now - $99
              </button>
            </div>
          </div>
        </div>
      )}
      <Contents />
      {/* <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="quote-form-modal"
        fullWidth
        maxWidth="md"
      >
        <QuoteForm handleClose={handleClose} />
      </Dialog> */}

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
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxHeight: "90vh",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "10px",
            overflowY: "auto",
            outline: "none",
          }}
        >
          <QuoteForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
});

Navbar4.displayName = "Navbar4";

export default Navbar4;
