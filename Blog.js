import React from 'react';
import blogChapters from '../../assets/blogChapters.json';

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#F5F5DC] dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex justify-center items-center">
      <div className="prose prose-lg mx-auto p-8 bg-white shadow-md rounded-lg">
        {blogChapters.map((chapter, index) => (
          <div key={index}>
            <h2 className="font-bold text-2xl my-4">{chapter.title}</h2>
            <p>{chapter.description}</p>
            <a
              href={chapter.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Read the full chapter
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
