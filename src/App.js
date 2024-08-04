import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav';
import CenterNav from './components/CenterNav';
import Header from './components/Header';
import MainContent from './components/MainContent';
import News from './components/News';
import Contact from './components/Contact';
import Research from './components/Research';
import Members from './components/Members';
import Publication from './components/Publication';
import Article1 from './components/News/Article1';
import Article2 from './components/News/Article2';
import Article3 from './components/News/Article3';
import Article4 from './components/News/Article4';
import Article5 from './components/News/Article5';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleResize = () => {
      window.resizeTo(window.outerWidth, window.outerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'news':
        return <News />;
      case 'research':
        return <Research />;
      case 'members':
        return <Members />;
      case 'publication':
        return <Publication />;
      case 'home':
      default:
        return (
          <>
            <Header />
            <MainContent />
            

          </>
        );
    }
  };


  //ホームの記述
  return (
    <Router>
      <div className="App">
        <TopNav setCurrentPage={setCurrentPage} />

        {/*ページ名をもとにヘッダーの下の主な内容を記述 caseはこの上に記述あり*/}
        {renderContent()}


        {/*HomeとNewsの時のみNews部分を記述する*/}
        {(currentPage === 'news' || currentPage === 'home') && (
          <Routes>
            <Route path="/article1" element={<Article1 />} />
            <Route path="/article2" element={<Article2 />} />
            <Route path="/article3" element={<Article3 />} />
            <Route path="/article4" element={<Article4 />} />
            <Route path="/article5" element={<Article5 />} />
          </Routes>
        )}
        <Contact />
      </div>
    </Router>
  );
}

export default App;


{/* 
Reactの使い方
・VSコードでフォルダを開くからlab-websiteを選択
・Ctrl+Shift+@でVSコードのターミナルを開く
・「npm start」と入力すればデバッグできます

Reactとは？
通常：ページを書く際にHome用のページ全文、News用のページ全文とそれぞれのページですべて上から下までのhtmlの記述が必要
React:変わる部分だけ入れ替えるので同じ部分を何回も書かなくていい(ヘッダーとか一番下のコンタクト部分とか)

構成：App.js
<一番上のナビゲーション>
<真ん中のナビゲーション>
<中身のコンテンツ>　　　　　＜－ページごとに変わる部分(home,news,researchなどのページ切り替えによって)
<コンタクト>

これを一つのjs,cssに書くのが普通だけどこれらをパーツでjs,cssを分けることで
<中身のコンテンツ>だけ入れ替えれば良いので通信の削減、コードの管理がしやすくなるってやつ。




基本構造:　App.jsにcomponents内のどのパーツを入れるか指定します。
例:<TopNav /> と記述すれば「TopNav.js」の内容がそこに入ります。関数的なノリです

<TopNav />   一番上の長井研究室アイコンと山大アイコン
<CenterNav/> トップ、ニュース、研究内容などのページ切り替えの上のボタン
<CenterNav setCurrentPage={setCurrentPage} />　ページごとに中身を変える必要があるのでCenterNav.jsから持ってきたページごとの中身
<Contact />　よくホームページの下にあるコンタクト


setCurrentPage={setCurrentPage}についてはいかのcaseでそれぞれ入れてます。ここが中身の入れ替えです
case 'news':
  return <News />;
case 'research':
  return <Research />;
case 'members':
  return <Members />;
case 'publication':
  return <Publication />; 
  
default:
  return (
    <>
      <Header />
      <MainContent />
    </>
  );


*/}










