// src/pages/login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        { email, password }
      );
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      if (err.response) {
        const { status, data } = err.response;
        switch (status) {
          case 404:
            setError('そのメールアドレスは登録されていません');
            break;
          case 401:
            setError('パスワードが正しくありません');
            break;
          case 403:
            setError('メール検証がまだ完了していません');
            break;
          default:
            setError(data.error || 'ログインに失敗しました');
        }
      } else {
        setError('ネットワークエラーです');
      }
    }
  };

  return (
    <main>
      <div className="login-wrapper">
        <h2>会員の方</h2>
        <p>メールアドレスとパスワードでログイン</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">ログイン</button>
        </form>
        <Link to="#" className="forgot-link">パスワードを忘れたら</Link>
        <Link to="/register" className="forgot-link">アカウントがない方はこちら</Link>
      </div>
    </main>
  );
};

export default Login;
