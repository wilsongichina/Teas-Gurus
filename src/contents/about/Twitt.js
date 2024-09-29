import React from 'react'

const Twitt = () => {
  return (
    <div className="flex flex-col items-center mt-[60px] md:mt-[80px]">
      <img 
        src='https://www.onlineclassdoer.com/images/avatar/invision_hud5734af7eb73995c45e8c620eb05c252_9335_2581d7a45180c4f53fca8f0643ac17be.webp'
        alt="Malcolm X"
        width={200}
        height={200}
        loading="lazy"
      />

      <blockquote className="md:w-[70%] w-[90%] text-[24px] md:text-[34px] font-[800] text-center mt-10">
      "Success doesn’t come from what you do occasionally, it comes from what you do consistently."
      </blockquote>

      <cite className="mt-10"> – Marie Forleo</cite>
    </div>
  )
}

export default React.memo(Twitt);