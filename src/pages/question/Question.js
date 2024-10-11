import React from "react";
import Faq from "../../contents/question/faq/Faq";
import Works from "../../contents/question/work/Works";
import Choose from "../../components/question/choose/Choose";
import Online from "../../contents/question/online/Online";
import Review from "../../components/question/review/Review";
import Navbar4 from "../../layouts/navbar4";

const Question = () => {
  return (
    <>
      <div className="w-[100%] flex justify-center items-center pt-[80px] ">
        <div className="w-[90%] ">
          <Navbar4 />
        </div>
      </div>

      <Works />

      <Choose />

      <Online />

      <Faq/>
      {/* <Review /> */}
    </>
  );
};

export default Question;
