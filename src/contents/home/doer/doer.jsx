import React from "react";

const Doer = () => {
  return (
    <>
      <div className="w-[100%] my-[20px]   flex justify-center items-center">
        <div className="w-[100%]  lg:flex lg:gap-12   ">
          <div className="flex  lg:hidden ">
            <img className="h-[90%]" src="./home/class1.webp"></img>
          </div>
          <div className="lg:w-[50%]">
            <p className="text-center font-bold mt-16   text-[#6E9240] ">
              We Are Teas Gurus
            </p>
            <h2 className=" mt-4 text-center font-bold text-4xl  ">
              So, Can You Take My Remote Teas Exam?
            </h2>
            <p className="mt-16   ">
              Absolutely! Our team has qualified professionals ready to take
              your ream TEAS exams for you. They are knowledgeable of these
              exams’ content and format; hence, you can be sure they will
              deliver exceptional results. We prioritize your success and
              maintaining high ethical standards, so have no doubt in our
              support. Wait no more; reach out today and let us help you achieve
              that high score you need.
            </p>
          </div>
          <div className="hidden lg:flex  lg:w-[50%]">
            <img className="h-[90%] mb-6 " src="./home/class1.webp"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Doer);
