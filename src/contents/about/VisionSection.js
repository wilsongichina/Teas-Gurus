import React from 'react'
import { Card, CardContent } from '@mui/material'
import { FaHandsHelping, FaHeadset } from "react-icons/fa";

const MissionVisionCard = React.memo(({ icon: Icon, title, content, iconColor }) => (
  <Card sx={{
    width: {xs: '95%', md: '45%'},
    height: 'auto',
    borderRadius: '20px',
    background: 'white',
    boxShadow: '0 15px 50px 10px rgba(0, 0, 0, 5%)',
  }}>
    <CardContent sx={{padding: {xs: '20px', md: '50px'}}}>
      <Icon style={{fontSize: '60px', color: iconColor}} />
      <h3 className='md:text-[35px] text-[22px] font-[800] mt-5'>{title}</h3>
      <p className='mt-5 mb-4'>{content}</p>
    </CardContent>
  </Card>
));

const VisionSection = () => {
  const missionVisionData = [
    {
      icon: FaHandsHelping,
      title: "Our Mission",
      content: "At TEAS Gurus, our core mission is to enhance our student’s knowledge with affordable instruction. We are dedicated to empowering learners to excel in their fields within the online learning environment, working diligently to ensure we meet our clients’ expectations and ensure they are satisfied",
      iconColor: '#6e9240'
    },
    {
      icon: FaHeadset,
      title: "Our Vision",
      content: "Our vision is to deliver notable academic solutions to students at all levels. We aim to be flexible and excel in various project types to help you find effective methods to achieve your educational goal. Our objective is to be a versatile and reliable partner dedicated to supporting you throughout your academic journey and paving the way for your success.",
      iconColor: '#ed6f78'
    }
  ];

  return (
    <>
      <section className='bg-[#fff4ce] lg:h-auto md:h-auto md:px-[80px] rounded-[20px] flex justify-between items-center md:mt-[80px] mt-[50px] lg:flex-row flex-col-reverse py-[50px] lg:py-[80px]'>
        <div className='lg:w-[50%] w-[95%]'>
        <div className='text-[#6e9240] font-[700] text-center'>We Are Teas Gurus</div>
        <div className='text-[35px]  font-[800] mt-3 text-center'>Our Missions and Vision</div>
        <div className='text-[#777] mt-10'>
        Mission
Our Mission at Teas Gurus is to nature your grades to fit your requirements. Everyone is after a goal and a top grade is a requirement. We have to see that you keep scaling towards greater heights. You live to realize your dreams with top grades and this is the environment we create. On our palm is an A or B and it is for you to come for it. We are here to structure the world to conform to your desires.
Vision
Our vision quite simply is to be the globe’s premier class help company delivering top grades from assignments to exams for consistent dependable advancement. To this far, thousands can attest to the positive vibe we are. It is an academic experience you seldom get elsewhere.
        </div>
        </div>
        <div className='lg:p-0 px-8'>
          <img 
            src='https://www.onlineclassdoer.com/images/block-image-03_hubaca23b25ea7b7cbc26d656c0fe52dc0_278015_9f2feeb9a55727194ba2e807e28ec989.webp'
            alt="Teas Gurus"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className='mt-[80px]'>
        
        <div className='mt-[60px] flex justify-center flex-wrap items-start gap-8 lg:mb-[100px] mb-[60px]'>
          {missionVisionData.map((item, index) => (
            <MissionVisionCard key={index} {...item} />
          ))}
        </div>
      </section>
    </>
  )
}

export default React.memo(VisionSection);