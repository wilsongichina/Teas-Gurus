import React, { lazy, Suspense, useEffect } from "react";
import Navbar1 from "../../layouts/navbar1";
import Loading from "../../components/loading";
import { Helmet } from "react-helmet";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { IoLogoWhatsapp } from "react-icons/io";
// Lazy load components
const Timeline = lazy(() => import("../../contents/home/timeline/TimeLine"));
const Grade = lazy(() => import("../../contents/home/grade/grade"));
const Pay = lazy(() => import("../../contents/home/pay/pay"));
const Settle = lazy(() => import("../../contents/home/settle/settle"));
const Online = lazy(() => import("../../contents/home/online/online"));
const Class = lazy(() => import("../../contents/home/class/class"));
const Doer = lazy(() => import("../../contents/home/doer/doer"));
const Faq = lazy(() => import("../../contents/home/faq/faq"));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const MemoizedNavbar1 = React.memo(Navbar1);
const Home = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <React.Fragment >
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          sx={{"&>div>div":{borderRadius:"30px"}}}
          
        >
        <div >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
            
          >
            <CloseIcon />
          </IconButton>
          <div className="  ">
          <div className="flex justify-center items-center pt-10 ">
            <img src="/percent.png" className="h-[80px] w-[80px] " />
          </div>

          <DialogContent >
            <p className="text-center font-bold text-3xl ">Need Help with Your TEAS Exam?</p>
            <p className="text-center mt-2   ">
              Ace your TEAS test from the comfort of home with our expert
              assistance—safe, secure, and guaranteed to pass.
            </p>
            <p className="text-center mt-2 font-bold">No upfront fees, guaranteed success!</p>
            <a href="https://web.whatsapp.com/send?phone=15795011983&text=Hello%2C%0AI%20need%20assistance%20with%20my%20TEAS%20exam" className="flex justify-center items-center">
            <div className="flex gap-2 bg-green-700 p-4 rounded-full  mt-4  ">
            <IoLogoWhatsapp className="text-[30px] text-white "/>
            <p className="text-center font-bold text-white   ">Click Here to Chat With Us on WhatsApp!</p>
            </div>
            </a>
           
          </DialogContent>
          </div>
          </div>
        </BootstrapDialog>
      </React.Fragment>

      <Helmet>
        <title>
          Pay Someone to Do My Online TEAS Exam - Take My Online TEAS Exam
        </title>
        <meta
          name="description"
          content="Need help with your TEAS exam? Hire TEAS Gurus to take the exam for you and ensure a 90+ score with professional assistance."
        />
      </Helmet>
      <div className="w-[100%] justify-center flex md:mt-20 mt-3">
        <div className="md:w-[90%] w-[95%]">
          <MemoizedNavbar1 />
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Timeline />
            <Grade />
            <Pay />
            <Settle />
            <Online />
            <Class />
            <Doer />
            <Faq />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default React.memo(Home);
