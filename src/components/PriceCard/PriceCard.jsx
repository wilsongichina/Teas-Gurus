import React, { useCallback, useMemo } from 'react';

const PriceCard = React.memo(({ item }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const cardStyle = useMemo(() => ({
    borderColor: isHovered ? item.color : 'transparent',
  }), [isHovered, item.color]);

  const titleStyle = useMemo(() => ({
    color: isHovered ? item.color : 'black',
  }), [isHovered, item.color]);

  return (
    <div
      className="p-6 rounded-xl bg-white h-auto shadow-sm text-center border-2 transition-all duration-300 ease-in-out"
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl font-bold mb-2" style={titleStyle}>{item.title}</h2>
      <p className="text-lg font-semibold mb-2">{item.price}</p>
      <ul className="text-md text-gray-600 space-y-1">
        {item.description.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>
    </div>
  );
});

PriceCard.displayName = 'PriceCard';

export default PriceCard;