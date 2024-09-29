import React from 'react';

const OfferCard = React.memo(({ item }) => {
  return (
    <div className="p-4 rounded-xl bg-white h-auto shadow-lg text-center transition-all duration-300 ease-in-out">
      <div 
        className='p-4 rounded-xl' 
        style={{
          backgroundColor: item.bg,
        }}
      >
        <p 
          className="text-3xl font-bold mb-2"
          style={{
            color: item.color,
          }}
        >
          {item.price}
        </p>
        <ul className="text-md text-gray-600 space-y-1">
          {item.description}
        </ul>
      </div>
    </div>
  );
});

OfferCard.displayName = 'OfferCard';

export default OfferCard;