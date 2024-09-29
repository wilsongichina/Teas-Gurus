import React, { useCallback } from 'react';

const StepCard = React.memo(({ item }) => {
  const handleMouseEnter = useCallback(() => {}, []);
  const handleMouseLeave = useCallback(() => {}, []);

  return (
    <div
      className={`p-6 rounded-xl bg-white h-auto shadow-sm text-center border-2 transition-all duration-300 ease-in-out ${
        item.hovered ? `border-[${item.color}]` : 'border-transparent'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex gap-4'>
        <div>
          <div
            className="text-4xl items-start font-semibold mb-2 p-4 rounded-md"
            style={{ backgroundColor: item.bgColor, color: item.color }}
          >
            {item.logo}
          </div>
        </div>
        <div className='text-start'>
          <h2
            className={`text-2xl font-bold mb-2 ${
              item.hovered ? `text-[${item.color}]` : 'text-black'
            }`}
          >
            {item.title}
          </h2>
          <ul className="text-gray-600 space-y-1">{item.description}</ul>
        </div>
      </div>
    </div>
  );
});

StepCard.displayName = 'StepCard';

export default StepCard;