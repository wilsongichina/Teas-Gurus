import React, { useState, useCallback, useMemo } from 'react';
import BlogCard from '../../components/blog/BlogCard';
import blogData from "../../constants/blog/blogData.json"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ITEMS_PER_PAGE = 6;

const BlogCardSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => Math.ceil(blogData.length / ITEMS_PER_PAGE), []);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return blogData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage]);

  const handlePageChange = useCallback((event, value) => {
    setCurrentPage(value);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map((card) => (
          <BlogCard
            key={card.id}
            id={card?.id}
            image={card.image}
            date={card.date}
            title={card.title}
            description={card.description}
            author={card.author}
            color={card.color}
          />
        ))}
      </div>
      <div className='flex justify-center w-full'>
        <Stack spacing={2} className="mt-8">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            color="primary"
            shape="rounded"
          />
        </Stack>
      </div>
    </div>
  );
};

export default React.memo(BlogCardSection);