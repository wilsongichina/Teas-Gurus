import React, { useState, useCallback, useMemo } from "react";
import { KeyboardArrowDown, Menu } from "@mui/icons-material";
import { Modal, Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import QuoteForm from "../../components/quoteForm/QuoteForm";

const Header = ({ show, setShow }) => {
  const navigation = useNavigate();
  const [company, setCompany] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log("hfhf");
    setOpen(false);
  };
  const handleMenu = useCallback(() => setShow((prev) => !prev), []);

  const location = useLocation();
  const companyUrl = ["/about", "/faq", "/How-it-Works"];
  return (
    <div className="flex justify-between items-center">
      <a href="/">
        <img
          src="/Teas Gurus Logo.png"
          className="md:h-auto h-[20px] md:w-[100px] lg:w-[150px]"
        />
      </a>

      <div className="lg:flex gap-5 xl:gap-10 items-center hidden">
        <div
          onClick={() =>
            document
              .getElementById("choose")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="font-[500] cursor-pointer"
        >
          <span
            className={`${location.pathname === "/" ? "text-[#294dff]" : ""}`}
          >
           Why Choose Us 
          </span>
        </div>

        {company && (
          <div
            onMouseLeave={() => setCompany(!company)}
            className="absolute w-[200px] h-auto bg-white top-[160px] p-5 flex flex-col gap-4 rounded-md"
          ></div>
        )}

        <div
          onClick={() =>
            document
              .getElementById("faq")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={`${
            location.pathname === "/faq" && "text-[#294dff]"
          } font-[500] cursor-pointer text-black`}
        >
          <span
            className={`${
              location.pathname === "/faq" ? "text-[#294dff]" : ""
            }`}
          >
            FAQS
          </span>
        </div>
      </div>

      <div
        className="lg:block hidden cursor-pointer"
        onClick={() =>
          window.open("https://buy.stripe.com/bIYg11figfhN7nO4ic", "_blank")
        }
      >
        <button className="button-bg lg:px-5 py-3 text-white rounded-[30px] font-[500] element3">
          Buy Now - $149.99
        </button>
      </div>

      <div className="lg:hidden flex gap-2 items-center">
        <div className="text-[18px] font-[500]">
          En
          <KeyboardArrowDown />
        </div>
        <Menu onClick={handleMenu} sx={{ fontSize: "40px", color: "black" }} />
      </div>

      {/* Modal Implementation */}
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
};

export default React.memo(Header);
