import React, { useMemo } from 'react'
import { FaCubes, FaGlobe, FaLightbulb, FaRegGem } from 'react-icons/fa';
import { CiFlag1 } from 'react-icons/ci';
import tinycolor from 'tinycolor2';
import StepCard from './StepCard';

const getLighterShade = (color) => tinycolor(color).lighten(30).toString();

const cardData = [
  {
    title: "Step 1: Sign up",
    logo: FaCubes,
    description: "Sign up for the TEAS test and contact us with your TEAS exam schedule (time and date). We will book you into our system. Think of it as an appointment with one of our professionals, who will help you with your test.",
    color: "#4262ff",
    bgColor: getLighterShade("#4262ff"),
  },
  {
    title: "Step 2: Setup",
    logo: FaLightbulb,
    description: "Our IT specialist will remotely connect to your computer and set it up ready for your test. It’s a process we found works best on a Windows or Macbook. Also, for an easy time, we recommend a quiet environment.",
    color: "#ffd02f",
    bgColor: getLighterShade("#ffd02f"),
  },
  {
    title: "Step 3: Test time",
    logo: CiFlag1,
    description: "When it's time, your appointed tutor will take the test for you. They handle everything to ensure the test is taken meticulously and as per the package you choose.",
    color: "#6e9240",
    bgColor: getLighterShade("#6e9240"),
  },
  {
    title: "Step 4: Results & Payment",
    logo: FaRegGem,
    description: "Once your TEAS exam is done, your result will appear on your ATI portal. As soon as you confirm the results are as per our promise and you are satisfied with the score, you can now make the full payment.",
    color: "#ed6f78",
    bgColor: getLighterShade("#ed6f78"),
  }
];


const WorkCardSection = () => {
  const memoizedCards = useMemo(() => cardData.map((item, index) => (
    <StepCard key={index} item={item} />
  )), []);

  return (
    <div className='bg-[#FFF4CE] rounded-xl sm:py-20 py-4 lg:px-40 px-4 mt-10 md:mt-[100px]'>
      <h2 className='text-center sm:mb-16 mb-8 sm:text-4xl text-2xl font-extrabold'>
        How Does Our Take My Online Class Service Work
      </h2>
      <div className='grid lg:grid-cols-3 place-content-evenly sm:grid-cols-2 grid-col-1 gap-4'>
        {memoizedCards}
      </div>
    </div>
  )
}

export default React.memo(WorkCardSection);