import React from "react";

const gradeImages = [
  "grade11.jpg", "grade22.jpg", "grade33.jpg", "grade4.jpg",
  "grade55.jpg", "grade66.jpg", "grade77.jpg", "grade88.jpg"
];

const GradeImage = React.memo(({ src }) => (
  <img src={`./grade/${src}`} alt="Grade sample" loading="lazy" className="w-full h-auto" />
));

const Grade = () => {
  return (
    <div className="w-full my-10 px-4">
      <div className="w-full bg-[#E4F0FD] p-4 lg:p-16 rounded-2xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mt-5">
        RESULTS FROM PREVIOUS TEAS EXAMS
        </h1>
        {/* <p className="mt-4 text-[#6E9240] text-base lg:text-lg text-center font-bold">
          Teas Gurus has been helping students with online classes for
          years and we have garnered positive reviews from our clients. This
          is one of the major reasons we have been able to assist students not
          only complete classes but even degree programs. Below is a few real
          grades snapshots to strengthen your trust in our "do my online class
          service
        </p>
        <br /> */}
        <p className="mt-4 text-[#6E9240] text-base lg:text-lg text-center font-bold">Exam Results We Have Scored for Students
        Clients have consistently given Teas Gurus good feedback for the many years that we have been helping students with Teas Exams. One of the main reasons we have helped people finish degree programs and not just exams is because of this. You can have more faith in our "do my teas exam service" after seeing some actual grade results below.</p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-8 gap-4 lg:gap-6">
          {gradeImages.map((src, index) => (
            <GradeImage key={index} src={src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Grade);