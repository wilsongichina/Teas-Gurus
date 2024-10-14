import {
  ArrowForward,
  PlayArrow,
  PlayCircleOutlineOutlined,
} from "@mui/icons-material";
import { Dialog } from "@mui/material";
import React, { useCallback, useState, useRef } from "react";
import { Box, Modal, Slide } from "@mui/material";
import QuoteForm from "../../components/quoteForm/QuoteForm";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { ImageData } from "../../constants/home/image/ImageData";

const Contents = React.memo(() => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleShowVideo = useCallback(() => setShow(true), []);
  const handleHideVideo = useCallback(() => setShow(false), []);
  const handleMenu = useCallback(() => setShow((prev) => !prev), []);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="md:mt-[90px] mt-[50px]">
      <div className=" flex flex-col  md:flex-row  md:justify-end   gap-[100px] ">
        <div className="md:w-[70%] mt-[60px]  ">
          <div className="text-center">
            <h1 className="text-[#6e9240] text-4xl  font-[500]">
              We Are Teas Gurus
            </h1>

            <h2 className="mt-4 font-bold ">
            Pay Someone to Do My TEAS Exam or Buy Exact TEAS Questions
            </h2>

            <h2 className="mt-4 font-bold ">
              The Versatile Online Teas Proctored Help Company for Students.
              Teas Guru Makes Taking Exams & Answering Refreshing. Order Your
              Teas Exam, Tests, Quizzes and More…
            </h2>
          </div>

          <div className="flex justify-center items-center w-full mt-10 md:gap-10 gap-5 md:flex-row flex-col">
            <img
              src="https://www.onlineclassdoer.com/images/arrow-o_hucdbc3c6e4092cc6d519edca480433b8d_1593_073bf071b2d2cc5809b988eeca7e29cc.webp"
              className="hidden sm:flex h-[60px] mb-10 ml-5 "
              alt="Arrow"
            />

            <button
              onClick={() =>
                window.open("https://buy.stripe.com/4gw5mn0nm0mTfUk3e9", "_blank")
              }
              className="bg-[#f7a72b] md:mt-8  w-[250px] px-4 py-3 text-white rounded-[30px] font-[500] element  "
            >
              Buy Exact TEAS - $99
              <ArrowForward className="ml-2  " sx={{ color: "white" }} />{" "}
            </button>

            <button
             onClick={()=>navigate("/how-it-works")} 
              className="pl-1 py-1 w-[200px] md:mt-8   pr-5 text-black rounded-[30px] font-[500] border border-[rgba(0,0,0,0.3)] hover:bg-white flex items-center gap-2 element2"
            >
              <div 
                style={{
                  border: "1px solid rgba(0,0,0,0.3)",
                  borderRadius: "20px",
                  height: "40px",
                  width: "40px",
                }}
                className="flex justify-center items-center bg-white"
              >
                <PlayArrow sx={{ color: "blue" }} />
              </div>
              How it Works
            </button>

            <button
              onClick={handleOpen}
              className="pl-1 py-1 w-[200px] md:mt-8   pr-5 text-white  rounded-[30px] font-[500] border   flex items-center gap-2 element2 bg-[#f7a72b] hover:shadow-lg  "
            >
              <div className="flex justify-center items-center p-4   "></div>
              Take My Exam{" "}
            </button>

            {show && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black/20 z-50"
                aria-hidden={true}
              >
                <div className="relative rounded-lg shadow-lg max-[345px]:w-[315px] h-[228px] w-[360px] sm:w-[700px] sm:h-[450px] xl:w-[1000px] xl:h-[560px] smm:mx-4">
                  <button
                    className="absolute -top-4 -right-4 text-2xl text-[#FFFFFF] w-8 h-8 rounded-full bg-black flex justify-center items-center "
                    onClick={() => setShow(false)}
                  >
                    <FaTimes />
                  </button>
                  <div className="max-[345px]:w-[315px] h-[228px] w-[360px] sm:w-[700px] sm:h-[450px] xl:w-[1000px] xl:h-[560px] rounded-lg">
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
        </div>
        <div className=" md:w-[30%]">
          <div className="rounded-xl object-cover     relative  ">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              speed={100}
              navigation={true}
              modules={[Navigation]}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              {ImageData.map((item) => (
                <SwiperSlide>
                  <div key={item.id} className="rounded-xl       ">
                    <img
                      src={item?.src}
                      className="h-[450px] mx-auto w-[75%]  md:object-contain rounded-xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
              <button ref={prevRef} className="custom-prev">
                <IoIosArrowBack />
              </button>
              <button ref={nextRef} className="custom-next">
                <IoIosArrowForward />
              </button>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
});

Contents.displayName = "Contents";

export default Contents;
