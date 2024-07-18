import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="imagecontent">
                <video autoPlay loop muted>
                    <source src="/images/satellite.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="text-container">
                    <p>宇宙技術を駆使した<br />監視と予測</p>
                    <p2>山口大学 知能情報工学科 電気電子情報系専攻 知能情報メディアコース<br />応用衛星リモートセンシング研究センター</p2>
                </div>
            </div>
        </header>
    );
};

export default Header;
