// src/components/VideoList/VideoList.js
import React from 'react';
import { videoData } from '../../assets/videoData';

const VideoList = () => {
  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-4">Video List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videoData.map((video, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <img src={video.thumbnail} alt={`Thumbnail for ${video.title}`} className="w-full h-auto mb-4 rounded-lg" />
            <h3 className="text-2xl text-gray-200 mb-2">{video.title}</h3>
            <p className="text-gray-400">Date: {video.date}</p>
            <p className="text-gray-400">Tags: {video.tags.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
