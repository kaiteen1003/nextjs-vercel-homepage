import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="background">
      <div className="contact-content">
        <h2>Contact</h2>
        <hr className="divider" />
        <div className="contact-container">
          <div className="contact-section">
            <p>山口大学大学院創成科学研究科<br />工学部知能情報工学科<br />応用衛星リモートセンシング研究センター<br /><br />大学院工学部　電気電子情報系専攻<br />知能情報工学メディアコース</p>
          </div>
          <div className="vertical-line"></div>
          <div className="contact-section">
            <p>〒755-0097 山口県宇部市常盤台２丁目１６−１</p>
            <a href="https://www.yamaguchi-u.ac.jp/eng/access/index.html" className="access-button" target="_blank" rel="noopener noreferrer">交通アクセスはこちら</a>
            <p>TEL：×××××-××××-××××</p>
            <p>長井正彦　Masahiko Nagai, Professor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
