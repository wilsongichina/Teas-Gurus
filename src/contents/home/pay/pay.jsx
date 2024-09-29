import React from "react";

const PayItem = React.memo(({ children }) => (
  <p className="mt-4 text-sm lg:text-base">{children}</p>
));

const Pay = () => {
  const payItems = [
    "1. High-quality work",
    "2. Well-researched material",
    "3. High score, at least 90.",
  ];

  return (
    <div className="w-full mt-4 px-4">
      <h2 className="text-2xl lg:text-4xl text-center mt-10 font-bold">
      Pay Someone to Take My Teas Exam for Me from Our Best Teas Takers
      </h2>
      <p className="mt-6 text-sm lg:text-base">
      We get it. Teas exams sometimes feel like an overwhelming beast, especially when juggling work and school, and you just wish for a little extra help to tame it, even at a small price. That’s where we come in. Whether you are cramming last minute or just need someone to guide you through months of prep, our Teas exams help services are here to save the day!
      </p>
      <br />
      <p>Now, you are probably wondering what’s special about our Teas exam service. Well, it’s simple. Our team experts are dedicated to giving you any support you need, taking the test exams on your behalf, and helping you meet the deadlines. If you ask for it, our hands and minds are open and ready to help you. Tired of low grades? Let us help you raise them. No time for taking the Teas exams? Worry less; We’ve got you.</p>
      <br />
      <p>You can count on us as we have worked with thousands of students across the globe, and we have sufficient U.S.-based professionals. We understand that current life is so demanding, there are moments when classes become stressful, to the point you can’t take them anymore. Smart students (like you) always choose to pay someone to take their online classes and exams for them.</p>
       <br />
       <p>Why us? Our Teas exams support team is made of seasoned professionals who have been there and done that. So, we are not just throwing random advice at you; we know exactly what works. We have years of experience, and the help and services we offer assure you peace of mind. It allows you to relax and focus better on your work, knowing you got a good grade, but with less hassle, just like a ton of students who have aced their Teas exam with our help.</p>
       <br />
       <p>And get this: we provide affordable Teas help that won’t drain your wallet. Top that off with our exceptionally high success rate, and you have yourself a service team you can count on to help pass your Teas exam. Here is what you can expect from us:</p>
      <div>
        {payItems.map((item, index) => (
          <PayItem key={index}>{item}</PayItem>
        ))}
      </div>
        <br />
        <p className="font-bold">100% Refund if we deliver anything short of our promises. With us, you have nothing loose!</p>
    </div>
  );
};

export default React.memo(Pay);