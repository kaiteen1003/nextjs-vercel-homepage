
import React from 'react';
import './Article.css';


const Article3 = () => {
  return (
    <div className="article-container">
      <h2>2024/05/18 常盤公園でBBQを開催しました。🥩🥩</h2>
      <p>常盤公園でBBQを開催しました!　ミニゲームを挟みつつみんなたくさん食べました！🍖</p>


      <div className="article-images">

    
        <div className="article-image vertical">
          <img src="/images/Article1_1.png" alt="BBQ Image 1" />
        </div>

        <div className="article-image vertical">
          <img src="/images/Article1_2.jpg" alt="BBQ Image 2" />
        </div>

        <div className="article-image horizontal">
          <img src="/images/Article1_3.jpg" alt="BBQ Image 3" />
        </div>

      </div>
    </div>
  );
}


export default Article3;
