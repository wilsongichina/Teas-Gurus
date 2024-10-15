import React from "react";

const Settle = React.memo(() => {
  return (
    <div className="w-[100%]  flex justify-center items-center">
      <div className="w-[100%] lg:flex lg:gap-8">
        <div className="flex lg:hidden">
          <img className="h-[90%]" src="./home/girl.webp" alt="Girl" loading="lazy" />
        </div>
        <div className="lg:w-[50%]">
          <p className="text-center font-bold text-[#6E9240]">We Are Teas Gurus</p>
          <h2 className="mt-4 text-center font-bold text-4xl">We Settle For At least a 90 In Your Teas Exam</h2>
          <Content />
        </div>
        <div className="hidden lg:flex lg:w-[50%]">
          <img className="h-[90%]" src="./home/girl.webp" alt="Girl" loading="lazy" />
        </div>
      </div>
    </div>
  );
});

const Content = React.memo(() => (
  <>
    <p className="mt-12">
      TEAS tests can sometimes be nerve-wracking, with the deadlines and pressure to do better in terms of grades. When your inbox is flooded with reminders, and the stress from exams and work comes in, you can count on us, and at a small fee, we take this load off your shoulders. See, with us, we don’t just aim to make the work easier for you by taking the TEAS exam on your behalf; we also want to ensure you get the best score.
    </p>
    <p className="mt-8">
      We understand that exam performance has a direct impact on your GPA, and therefore, it is important to get the best score, which we figure would be at least 90. We settle for nothing less. Let’s make your days in university a breeze.
    </p>
    <p className="mt-8">
      To ensure you get the best, we recommend you share with us all the necessary information about your TEAS exams. This will help us assign your exam to the right specialist who will be certain to give you quality work and the best results. Rest assured, your progress is vital to us, and that’s why we have our support team ready and available any time of the day to give you updates on your exam.
    </p>
  </>
));

export default Settle;