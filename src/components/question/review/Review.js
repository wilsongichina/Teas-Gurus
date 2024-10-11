import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

const gradeImages = [
  "grade11.jpg",
  "grade22.jpg",
  "grade33.jpg",
  "grade4.jpg",
  "grade55.jpg",
  "grade66.jpg",
  "grade77.jpg",
  "grade88.jpg",
];

const GradeImage = React.memo(({ src }) => (
  <img
    src={`./grade/${src}`}
    alt="Grade sample"
    loading="lazy"
    className="w-full h-auto"
  />
));

const Review = () => {
  return (
    <>
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[80%]">
          <h1 className="font-bold mt-4 text-center text-green-500 ">
            what people say about Teas Gurus
          </h1>
          <h1 className="font-bold mt-4 text-4xl text-center  text-black ">
          Results from Previous Teas Exams
          </h1>
          <div className="flex gap-10    ">
            <div className="hidden md:block  md:w-[50%] mt-10  ">
              <img src="/question/people.webp" className="h-[400px] w-full  " />
            </div>

            <div className="w-[90%] md:w-[50%] h-full mt-8 ">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                speed={600}
                autoplay={{
                  delay: 500,
                }}
                modules={[Autoplay, Pagination]}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {gradeImages.map((src, index) => (
                  <SwiperSlide>
                    <div
                      key={index.id}
                      className="rounded-xl hover:border-2 hover:border-blue-600 border-2  p-10   "
                    >
                      <GradeImage className="" key={index} src={src} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
