import React from "react";

const Doer = () => {
  return (
    <>
     <div className="w-[100%] my-[100px]   flex justify-center items-center">
        <div className="w-[100%]  lg:flex lg:gap-12   ">
        <div className="flex  lg:hidden ">
            <img className="h-[90%]" src="./home/class1.webp"></img>
          </div>
          <div className="lg:w-[50%]">
            <p className="text-center font-bold mt-16   text-[#6E9240] ">We Are Online Class Doer</p>
            <h2 className=" mt-4 text-center font-bold text-4xl  ">So, Can You Take My Class?</h2>
            <p className="mt-16   ">
            You are in the cold and it is time to hand in your class to an expert aligned with your online class needs. We are confident that we will deliver an A or B. Simply make your payments and as soon as you do that, we will attend to your order and entrust your class to the recommended expert. We are available round the clock, and as we progress with your class, we keep you informed at all times. We put your demands into consideration at all times. Our decade of experience allows us to take up your test, quiz, online exam, projects, essays, dissertations, term papers, and more. We observe all your deadlines because we are aware of what the online class means to your career.
            </p>
            
          </div>
          <div className="hidden lg:flex  lg:w-[50%]">
            <img className="h-[90%] mb-6 "  src="./home/class1.webp"></img>
          </div>
        </div>
      </div>

      <div className="w-[100%] my-[100px]   flex justify-center items-center">
        <div className="w-[100%]  lg:flex lg:gap-12  ">
          <div className="flex  lg:hidden ">
            <img className="h-[90%]" src="./home/class2.webp"></img>
          </div>

          <div className="hidden lg:flex  lg:w-[50%]">
            <img className="mt-10  h-[100%] w-[90%]" src="./home/class2.webp"></img>
          </div>
          <div className="lg:w-[50%] mt-[180px]">
            <p className="text-center font-bold  text-[#6E9240] ">
              We Are Online Class Doer
            </p>
            <h2 className=" mt-4 text-center font-bold text-4xl  ">
            Hire Our Experts to Complete Your Class - Get Free Quote
            </h2>
            <p className="mt-12  ">
            There are multiple services we offer. From essay writing services to online class assignments. We are here to offer you online class solutions because we have the best online class helper.
            </p>
            
          </div>
        </div>
      </div>

      <div className="w-[100%] my-[100px]   flex justify-center items-center">
        <div className="w-[100%]  lg:flex lg:gap-12   ">
        <div className="flex  lg:hidden ">
            <img className="h-[90%]" src="./home/class3.webp"></img>
          </div>
          <div className="lg:w-[50%]">
            <p className="text-center font-bold mt-16   text-[#6E9240] ">We Are Online Class Doer</p>
            <h2 className=" mt-4 text-center font-bold text-4xl  ">Pay someone to do my online class for me</h2>
            <p className="mt-16   ">
            To ease your schedule, it is best to entrust us with your class today! The rates we have for you favor every student and taking much time will mean an insult to your grades. You only need to contact our support staff and you are done. How does it feel if you hire a professional to work on your behalf? Thousands have benefited and it is your turn too. Quality is what you want and quality is what we are made of. Contact us via phone call, or reach out to our support staff on the chat box. We offer round-the-clock support.
            </p>
            
          </div>
          <div className="hidden lg:flex  lg:w-[50%]">
            <img className="h-[90%] mb-6 "  src="./home/class3.webp"></img>
          </div>
        </div>
      </div>
   
    

      
    </>
  );
};

export default React.memo(Doer);