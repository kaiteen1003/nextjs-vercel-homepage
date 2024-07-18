import React from 'react';
import './Members.css';

const members = [
  { id: 1, name: '長井 正彦', role: '教授', image: '/images/Members_pic/member1.jpg' },
  { id: 2, name: '和田里 花', role: '助教', image: '/images/Members_pic/member2.jpg' },
  { id: 3, name: '江口 毅', role: '助教', image: '/images/Members_pic/member3.jpg' },
  { id: 4, name: 'Rosalie Reyes', role: '特任准教授', image: '/images/Members_pic/member4.jpg' },
  { id: 5, name: 'Vaibhav Katiyar', role: '准教授', image: '/images/Members_pic/member5.png' },
  { id: 6, name: 'Arnob Bormudoi', role: '研究員', image: '/images/Members_pic/member6.jpg' },
  { id: 7, name: 'Muhammad Daniel Iman bin Hussain', role: 'D1', image: '/images/Members_pic/member7.jpg' },//ファーストネームのスペル今度聞いとく
  { id: 8, name: 'Margad-erdene Jargalsaikhan', role: 'D2', image: '/images/Members_pic/member8.jpg' },
  { id: 9, name: 'Pedro Junior Fernandes', role: 'D1', image: '/images/Members_pic/member9.jpg' },
  { id: 10, name: '仙波 侑也', role: 'M2', image: '/images/Members_pic/member10.JPG' },
  { id: 11, name: '馬場 海帆', role: 'M2', image: '/images/Members_pic/member11.jpg' },
  { id: 12, name: 'Fritz Rhaem Olivar', role: 'M2', image: '/images/Members_pic/member12.jpg' },
  { id: 13, name: '金岡 怜汰', role: 'M1', image: '/images/Members_pic/member13.jpg' },
  { id: 14, name: '前川 仙子', role: 'M1', image: '/images/Members_pic/member14.jpg' },
  { id: 15, name: 'Bayulodie Vallianto', role: 'M1', image: '/images/Members_pic/member15.jpg' },
  { id: 16, name: '石飛 海斗', role: 'B4', image: '/images/Members_pic/member16.JPG' },
  { id: 17, name: '工藤 大河', role: 'B4', image: '/images/Members_pic/member17.jpg' },
  { id: 18, name: '永安 悠愛', role: 'B4', image: '/images/Members_pic/member18.jpg' },

  // 他のメンバーもここに追加
];


const Members = () => {
  return (
    <div className="members-container">
      <h2>Members</h2>
      <div className="members-list">
        {members.filter(member => member.id === 1).map(member => (
          <div key={member.id} className="member-card center-card special-card">
            <img src={member.image} alt={member.name} className="member-photo" />
            <h3 className="member-role">{member.role}</h3>
            <p className="member-name">{member.name}</p>
          </div>
        ))}
      </div>
      <div className="members-list">
        {members.filter(member => member.id !== 1).map(member => (
          <div key={member.id} className="member-card">
            <img src={member.image} alt={member.name} className="member-photo" />
            <h3 className="member-role">{member.role}</h3>
            <p className="member-name">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Members;




// 出会いには別れが付きものってことでidで振り分けていますがおそらくホームページに表示しなくなってしまう人が現れるかもしれないので
// 特に留学生の人は帰ってくることがあるかもなのでコメントアウトでidを残しておきます

// { id: 1, name: '', role: '教授', image: '/images/Members_pic/member1.jpg' },
// { id: 2, name: '', role: '准教授', image: '/images/Members_pic/member2.jpg' },
// { id: 3, name: '鈴木 一郎', role: '助教', image: '/images/Members_pic/member3.jpg' },
// { id: 4, name: '田中 美咲', role: '研究員', image: '/images/Members_pic/member4.jpg' },
