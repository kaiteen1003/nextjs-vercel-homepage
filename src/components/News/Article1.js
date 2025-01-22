import React from "react";
import "./Article.css";

//変更点１　Article〇
const Article1 = () => {
  return (
    <div className="article-container">
      <h2>2024/04/29 長井先生宅でホームパーティをしました！</h2>
      <p>おいしいごはんを食べながら歓談しました！😊</p>

      <div className="article-images">
        {/* 変更点2 (img src = "画像のpath")を入れる　Article〇縦写真ー＞ vertical　横写真ー＞horizontal のクラス指定をお忘れなく。以下のように記述*/}
        <div className="article-image horizontal">
          <img src="/images/Article3_1.JPG" alt="Homeparty Image 1" />
        </div>
      </div>
    </div>
  );
};

// 変更点3 　Article〇
export default Article1;
