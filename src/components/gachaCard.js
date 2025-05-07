import React from 'react';

const GachaCard = ({ image, amount, diamond }) => (
  <div className="gacha-card">
    <img src={image} alt="ガチャ画像" className="gacha-image" />
    <div className="gacha-info">
      <span>残数設定無し！</span>
      <div className="currency">
        <img src={diamond} alt="ジェム" />
        <span className="amount">{amount}</span>
      </div>
    </div>
    <div className="gacha-buttons">
      <button className="btn btn-gray">1回引く</button>
      <button className="btn btn-pink">10回引く</button>
      <button className="btn btn-red">100回引く</button>
    </div>
  </div>
);

export default GachaCard;