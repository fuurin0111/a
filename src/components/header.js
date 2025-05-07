import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/img/logo.png';

const Header = () => (
  <header>
    <Link to="/">
      <img src={logo} alt="ロゴ" className="logo" />
    </Link>
    <div className="nav-right">
      <Link to="/register"><button>新規登録</button></Link>
      <Link to="/login"><button>ログイン</button></Link>
    </div>
  </header>
);

export default Header;