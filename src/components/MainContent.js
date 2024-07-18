import React from 'react';
import './MainContent.css';
import VideoSlider from './VideoSlider';

const MainContent = () => {
  return (
    <div className="main-content">
      <h2>長井研究室では以下のような研究を行っています。</h2>
      <h3><br/>"宇宙技術を活用したリモートセンシング"</h3>
      <h4>私たちが普段使っているマップや天気情報など宇宙からの情報は多大な利益を私たちにもたらします。当研究室では宇宙技術やドローンなどの最新技術を用いたリモートセンシングなどの研究を主軸とし、
        災害の被害把握や地球温暖化などによる環境の変化の予測など様々な利用価値を生み出すことを目指しています。</h4>

      <h2><br/>研究室関連動画</h2>
      <VideoSlider />
    </div>
  );
}

export default MainContent;
