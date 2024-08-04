import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const News = () => {
  return (
    <div className="news-container">
      <h2>News</h2>
      {/* 新しいNews(Articleをここに追加する) */}
      <Link to="/article5" className="news-link">2024/07/28  コズミックカレッジを開催しました<br/></Link>
      <Link to="/article4" className="news-link">2024/06/10  ベンジャミンさんの歓迎パーティーを行いました<br/></Link>
      <Link to="/article3" className="news-link">2024/05/18  常盤公園でBBQを開催しました!<br/></Link>
      <Link to="/article2" className="news-link">2024/05/10  長井先生の誕生日パーティーを開催しました!<br/></Link>
      <Link to="/article1" className="news-link">2024/04/29  長井先生のお宅でホームパーティをしました！<br/></Link>
    </div>
  );
}

export default News;
