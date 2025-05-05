import React from 'react';
import logo from '../img/logo.png';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      {/* 左側：ロゴ */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
      </div>

      {/* 右側：新規登録・ログインボタン */}
      <div>
        <button className="mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">新規登録</button>
        <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">ログイン</button>
      </div>
    </header>
  );
}
