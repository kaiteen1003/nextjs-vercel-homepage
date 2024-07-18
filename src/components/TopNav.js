import React from 'react';
import './TopNav.css'; // CSS ファイルをインポート

const TopNav  = ({ setCurrentPage }) => {
  return (
    <div className="top-nav">
      <div className="left-content">
        <img src="/images/Logo.png" alt="Icon" className="nav-icon" onClick = {()=>setCurrentPage('home')}/>
      </div>
      <div className="center-nav">
      <img src="/images/Home.JPG" alt="Home" onClick={() => setCurrentPage('home')} />
      <img src="/images/News.JPG" alt="News" onClick={() => setCurrentPage('news')} />
      <img src="/images/Research.JPG" alt="研究内容" onClick={() => setCurrentPage('research')} />
      <img src="/images/Members.JPG" alt="Members" onClick={() => setCurrentPage('members')} />
      <img src="/images/Publication.JPG" alt="研究業績" onClick={() => setCurrentPage('publication')} />
    </div>
      <div className="right-content">
      
      <a href="https://www.yamaguchi-u.ac.jp/index.html" target="_blank" rel="noopener noreferrer">
          <img src="/images/YUsymbol.png" alt="YU Symbol" className="nav-symbol hover-change" />
        </a>
      </div>
    </div>
  );
}

export default TopNav;
