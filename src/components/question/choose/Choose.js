import React from 'react'

const Choose = () => {
  return (
    <>
        <div id='choose' className="w-[100%] bg-[#FFFFFF] flex justify-center items-center">
        <div className="w-[80%] py-10 ">
          <h1 className=" text-center font-bold text-green-400">
            Feature Of Teas Gurus
          </h1>
          <h1 className="text-center font-bold text-3xl text-black mt-4 ">
          Why Choose Our Services
          </h1>
          <div className="flex flex-col  md:flex-row  md:justify-between md:gap-10 mt-8 ">
            <div className="md:w-[50%]">
              <img src="/question/why.jpg" className="h-[550px] w-[100%] object-contain" />
            </div>
            <div className="md:w-[50%] md:grid md:grid-cols-2  gap-10   ">
              <div className="p-5 md:p-0  w-[100%] shadow-md  rounded-xl  ">
                <h1 className="font-bold text-3xl text-black text-center mt-8  ">
                Exact TEAS Questions
                </h1>
                <p className="mt-2  px-5 ">
                We offer the most current and precise exact TEAS exam questions to ensure you're studying the right material.
                </p>
              </div>
              <div className="p-5 md:p-0 w-[100%] shadow-md rounded-xl  ">
                <h1 className="font-bold text-3xl text-black text-center mt-8  ">
                Reviews from Real Students
                </h1>
                <p className="mt-2  px-5 ">
                Our success stories come from real students who have excelled in their TEAS exams with our resources.
                </p>
              </div>
              <div className="p-5 md:p-0 w-[100%] shadow-md rounded-xl  ">
                <h1 className="font-bold text-3xl text-black text-center mt-8  ">
                 Unlimited Access
                </h1>
                <p className="mt-2  px-5 ">
                Once you purchase, you'll have lifetime access to the files, including future updates to stay current.
                </p>
              </div>
              <div className="p-5 md:p-0 w-[100%] shadow-md rounded-xl  ">
                <h1 className="font-bold text-3xl text-black text-center mt-8  ">
                 100% Confidential
                </h1>
                <p className="mt-2  px-5 ">
                Your personal information is protected with encrypted SSL security, ensuring your privacy is always maintained.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Choose