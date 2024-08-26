import React from 'react';
import './Article.css';

const Article5 = () => {
  return (
    <div className="article-container">
      <h2>2024/07/28 コズミックカレッジを開催しました</h2>
      <h5>修士1年の前川が、宇宙や科学の面白さや不思議さを体験する教室<div/>「コズミックカレッジ」の講師を務めました。</h5>
      <p>コズミックカレッジとは、宇部市宇宙教育推進協議会が主催する、JAXA宇宙教育センターのプログラムを活用した小学生を対象とした講座です。
知識だけでなく、「なぜ」まで考えることで探求心を育むことをめざした講義内容を作成し、
「フィルムケースロケット」、「星砂を探そう」、「ペンシルロケット・ペーパークラフト」の3つのプログラムを実施しました。
宇宙や星に関するクイズ、ロケットが飛ぶ原理の体感、工作・実験を通じて、考え、楽しみながら宇宙について学んでいただきました。
　知識を学ぶだけでなく、「なぜ」まで自ら考えるような講義を行い、楽しみながら宇宙について学んでもらうことができました。</p>
      
      <div className="article-images">
        <div className="small-image"> {/* ここにsmall-imageクラスを追加 */}
          <img src="/images/Article5_4.png" alt="Image 4" />
        </div>
       
        <div className="article-image horizontal">
        <h5>感想</h5>
        <p>講師：前川仙子</p>
        <p>「講師を務めるにあたって、私自身も小学生のころに科学館に行ったり講義を受けに行ったりして宇宙や科学について学んだことを思い出しました。逆に、今度は私が小学生に宇宙を教える機会を得ることができ、非常に貴重な経験を積むことができました。科学や宇宙に関心を持ってほしいという思いで取り組ませていただきました。」</p>
 
          <img src="/images/Article5_1.JPG" alt="Image 1" />
        </div>
        <div className="article-image horizontal">
        <h5>当日の様子</h5>
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
