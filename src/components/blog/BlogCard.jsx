import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = React.memo(({id, image, date, title, description, author, color }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  
  const dateStyle = useMemo(() => ({
    backgroundColor: color
  }), [color]);

  const titleStyle = useMemo(() => ({
    color: isHovered ? color : 'black',
    transition: 'color 0.3s ease'
  }), [isHovered, color]);

  const navigate = useNavigate(); 
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className='relative'>
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div
          className={`text-xs font-bold absolute bottom-[-20px] left-2  uppercase rounded-md px-2 py-1 text-white mb-2`}
          style={{ backgroundColor: color }}
        >
          {date}
        </div>
      </div>
      <div className="p-4" onClick={()=>navigate(`/blog/${id}`)} >

        <h3 className="text-lg font-bold mb-2 hover:underline cursor-pointer" onMouseEnter={() => setIsHovered( true )}
          onMouseLeave={() => setIsHovered( false )} style={{
            color: isHovered ? color : 'black'
          }}>{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center">
          <img
            src="/avtar.webp"
            alt={author}
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="text-sm text-gray-500">by {author}</span>
        </div>
      </div>
    </div>
  );
});

BlogCard.displayName = 'BlogCard';

export default BlogCard;