import React from 'react';
import GachaCard from './gachaCard';
import img1 from '../asset/img/img1.png';
import diamond from '../asset/img/diamond.svg';
import '../nstyle.css';

const gachaList = [
  { image: img1, amount: 100 },
  { image: img1, amount: 150 },
  { image: img1, amount: 200 },
  { image: img1, amount: 120 }
];

const GachaList = () => (
  <div className="gacha-container">
    {gachaList.map((item, idx) => (
      <GachaCard key={idx} image={item.image} amount={item.amount} diamond={diamond} />
    ))}
  </div>
);

export default GachaList;