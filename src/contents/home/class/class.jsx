import React from "react";

const SectionTitle = React.memo(({ title }) => (
  <h1 className="text-[#6E9269] text-center font-bold">{title}</h1>
));

const SectionSubtitle = React.memo(({ subtitle }) => (
  <p className="text-center my-6 font-bold text-4xl">{subtitle}</p>
));

const Paragraph = React.memo(({ text }) => (
  <p className="mt-8">{text}</p>
));

const Section = React.memo(({ title, subtitle, paragraphs }) => (
  <div className="w-[100%] my-[100px] flex justify-center items-center">
    <div className="w-[100%] gap-12">
      <SectionTitle title={title} />
      <SectionSubtitle subtitle={subtitle} />
      {paragraphs.map((text, index) => (
        <Paragraph key={index} text={text} />
      ))}
    </div>
  </div>
));

const Class = () => {
  const sections = [
    {
      title: "We Are Teas Gurus",
      subtitle: "Why Should I Pay Someone to Do My Teas Exam?",
      paragraphs: [
        "Paying someone to do the TEAS exam for you brings you a step closer to your dream. See, the issue with fixed/tight schedules, anxiety, procrastination, and struggling with the class easily distance you from your dreams. But we come as a solution to this problem, with only a small price to pay.",
        "You get expert assistance, which means you tap into proven strategies and insights that will undoubtedly boost your performance on your TEAS exams. Also, by paying someone to do this exam for you, you are investing in professional help and avoiding the pressure of studying, which can be quite overwhelming.",
        "You do not need to deal with the stress of trying to master the materials when you are already feeling burned out from days/nights at work. We are here and always available to do all the hard work for you while you rest and re-energize for the next shift."
      ]
    },
    {
      title: "We Are Teas Gurus",
      subtitle: "Take My Online Teas Exam by Qualified and Professional MSN Tutors",
      paragraphs: [
        "If you feel stressed about your TEAS exam or ever wish you could just hit a button and someone handle it for you, rest easy because now, you can! All you need to do is share your online coursework with us, and our qualified and professional MSN tutors will do all the heavy lifting. You don’t need to spend so much on books; you can just let us take care of your online TEAS tests and have more time to spend with your loved ones.",
        "With us, there are no gimmicks or games. We do not take lightly the trust you have in us. Here, you get a tutor and a partner in your academic success. The assigned tutor will take your online TEAS exams and ensure you achieve the score needed to advance in your nursing career. They understand the exam’s format and use their extensive knowledge to navigate the questions effectively to ensure you get that coveted score of 90 and above."
      ]
    },
    {
      title: "We Are Teas Gurus",
      subtitle: "What Is in The Space of Hiring an Expert to Take My Teas Exam?",
      paragraphs: [
        "Hiring us to take your TEAS exam can be a tempting solution, but have no doubts as there are many factors, to take into consideration to ensure you get the score we promise. First, our tutors work on a schedule, and while they have proven expertise in TEAS material, it’s essential to provide all that your class needs. Also, entrust us with your class as early as possible to ease the path to good scores.",
        "Be sure to also give us a considerable period to provide you with the best of our services. Online exams can vary, and therefore, depending on the nature of the task/exam, we will need ample time to take your online class and give you the best score. But if you need a quick order, contact us and fill out our quote. We will only accept it if there is enough time to handle it before its deadline.",
      ]
    }
  ];

  return (
    <>
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </>
  );
};

export default React.memo(Class);