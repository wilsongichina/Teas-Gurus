import React from 'react'
import { FaCubes } from "react-icons/fa";

const ChooseCardsComp = React.memo(({ item }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="rounded-lg shadow-lg p-6 sm:w-[30vw] w-[85%] md:w-80 hover:border-2 bg-white border-[#4b69ff]">
        <div className="flex mb-4">
          <div className="rounded-full p-3">
            <FaCubes style={{color: item.color, fontSize: "50px"}} />
          </div>
        </div>

        <h3 className="text-[27px] font-bold text-gray-800 mb-2 hover:text-[#4b69ff]">{item.title}</h3>

        <p className="text-gray-600 text-[16px] fonts-para">
          {item.desc}
        </p>
      </div>
    </div>
  )
});

ChooseCardsComp.displayName = 'ChooseCardsComp';

export default ChooseCardsComp;