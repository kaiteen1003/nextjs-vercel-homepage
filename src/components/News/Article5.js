
import React from 'react';
import './Article.css';


const Article5 = () => {
  return (
    <div className="article-container">
      <h2>2024/07/28 コズミックカレッジを開催しました</h2>
      <p>宇宙を学べる三つの体験講座を行いました</p>
      <div className="article-images">
        <div className="article-image horizontal">
          <img src="/images/Article5_1.JPG" alt="Image 1" />
        </div>

        <div className="article-image horizontal">
          <img src="/images/Article5_2.jpg" alt="Image 2" />
        </div>

        <div className="article-image horizontal">
          <img src="/images/Article5_3.jpg" alt="Image 3" />
        </div>

      </div>
    </div>
  );
}


export default Article5;
