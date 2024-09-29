import React from "react";

const Online = React.memo(() => {
  return (
    <div className="w-[100%] my-[100px] flex justify-center items-center">
      <div className="w-[100%] lg:flex lg:gap-12">
        <MobileImage />
        <DesktopImage />
        <Content />
      </div>
    </div>
  );
});

const MobileImage = React.memo(() => (
  <div className="flex lg:hidden">
    <img className="h-[90%]" src="./home/women.webp" alt="Women" loading="lazy" />
  </div>
));

const DesktopImage = React.memo(() => (
  <div className="hidden lg:flex lg:w-[50%]">
    <img className="mt-10 h-[80%] w-[90%]" src="./home/women.webp" alt="Women" loading="lazy" />
  </div>
));

const Content = React.memo(() => (
  <div className="lg:w-[50%]">
    <p className="text-center font-bold text-[#6E9240]">
    We Are Teas Gurus
    </p>
    <h2 className="mt-4 text-center font-bold text-4xl">
    Teas Exam Takers by Top Qualified MSN Tutors
    </h2>
    <p className="mt-12">
    Every day, we get inquiries from students all over the country enquiring about our services with questions like “Can I hire someone to take my TEAS tests?”, “How can someone take my TEAS exam for me?” Our tutors specialize in all areas of TEAS exams, from reading, math, science, and English, and offer targeted, effective tutoring that will surely boost your score.
    </p>
    <p className="mt-8">
    Our tutors are not just experts; they are specialized professionals with a proven track record of success. We ensure you get the best by meticulously matching you with the perfect tutor based on your academic background and area of expertise. They are reputable professionals from renowned universities, and they are available to handle even tasks with close deadlines without compromising the quality or the score.
    </p>
  </div>
));

export default Online;