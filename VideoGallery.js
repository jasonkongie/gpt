import React from 'react';
import videoData from '../../assets/videoData';

const VideoGallery = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll p-4">
      {videoData.map((video, index) => (
        <div key={index} className="flex items-start mb-4">
          <img src={video.thumbnail} alt={video.title} className="w-1/4 h-auto" />
          <div className="ml-4">
            <h3 className="text-xl font-bold">{video.title}</h3>
            <p>Date: {video.date}</p>
            <p>Tags: {video.tags.join(', ')}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
