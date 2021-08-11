import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './Video.css';
const Video = () => {
  return (
    <div
      className="section about_movie text-center d-flex flex-column align-items-center background_section"
      style={{
        backgroundImage: `url("https://demo.themesuccess.com/templates/rectcv/layouts/assets/images/background_video.jpg")`,
      }}
    >
      <div className="video-area">
        <a href="https://www.youtube.com/watch?v=YjhrligRTbE" className="btn-video-play iframe_popup">
            <FaPlay className = "icon-video"/>
        </a>
        <p className="mt-3">Play video</p>
      </div>
    </div>
  );
};

export default Video;
