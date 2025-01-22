import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TopNav from "./components/TopNav";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import News from "./components/News";
import Contact from "./components/Contact";
import Research from "./components/Research";
import Members from "./components/Members";
import Publication from "./components/Publication";
import Article1 from "./components/News/Article1";
import Article2 from "./components/News/Article2";
import Article3 from "./components/News/Article3";
import Article4 from "./components/News/Article4";
import Article5 from "./components/News/Article5";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleResize = () => {
      window.resizeTo(window.outerWidth, window.outerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case "news":
        return <News />;
      case "research":
        return <Research />;
      case "members":
        return <Members />;
      case "publication":
        return <Publication />;
      case "home":
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
        {(currentPage === "news" || currentPage === "home") && (
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
