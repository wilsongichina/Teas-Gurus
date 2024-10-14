import React from 'react'

const Works = () => {
  return (
    <>
        <div id='how' className="w-[100%] flex justify-center items-center pt-[100px]">
        <div className="w-[90%] bg-[#FFF4CE] py-20  ">
          <h1 className="text-3xl font-bold text-black text-center  ">
            How it Works 
          </h1>
          <h1 className="font-bold text-green-700  text-center mt-4 ">
          Work Process of Teas Gurus
          </h1>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 mt-10 px-10  ">
            <div>
              <img src="/question/11.jpg" className="h-[250px] w-[100%]" />
              <h1 className="font-bold text-black  text-2xl text-center mt-4 ">
              Make Payment
              </h1>
              <h1 className="text-black mt-4  text-center ">
              To gain access to the exact TEAS questions we've collected so far, a payment of $99.99 is required. This will give you access to five updates of the TEAS Version 7 exam.
              </h1>
            </div>
            <div>
              <img src="/question/12.jpg" className="h-[250px] w-[100%]" />
              <h1 className="font-bold text-black  text-2xl text-center mt-4 ">
              Access the Files
              </h1>
              <h1 className="text-black mt-4  text-center ">
              Once your payment is confirmed, you'll receive an email with a link to access the files. Please ensure your email address is entered correctly during payment. For any issues, feel free to contact us via email.
              </h1>
            </div>
            <div>
              <img src="/question/13.jpg" className="h-[250px] w-[100%]" />
              <h1 className="font-bold text-black  text-2xl text-center mt-4 ">
              Revising the Materials
              </h1>
              <h1 className="text-black mt-4  text-center ">
              Some questions may repeat due to the tests being shuffled, with a mix of both different and similar questions. Be sure to review all five updates we provide for complete preparation.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Works