import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './VideoSlider.css'; // カスタムスタイル用

const VideoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="video-wrapper">
        <iframe
          width="800"
          height="550"
          src="https://www.youtube.com/embed/RgHdJkvWWcg?si=hSRmCURABJTaTND2"
          title="YouTube video player"

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-wrapper">
        <iframe
          width="800"
          height="550"
          src="https://www.youtube.com/embed/NzIcqZgWfSE?si=9LtHhhRFUgTSn-ep"
          title="YouTube video player"

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </Slider>
  );
};

export default VideoSlider;
