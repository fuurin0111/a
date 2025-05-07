// src/pages/register.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name,     setName]     = useState('');
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const [success,  setSuccess]  = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/signup`,
        { name, email, password }
      );
      setSuccess(res.data.message);
      // 数秒後にログイン画面へリダイレクト
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      if (err.response) {
        const { status, data } = err.response;
        if (status === 409) {
          setError('このメールアドレスは既に登録されています');
        } else {
          setError(data.error || '登録に失敗しました');
        }
      } else {
        setError('ネットワークエラーです');
      }
    }
  };

  return (
    <main>
      <div className="login-wrapper">
        <h2>新規登録</h2>
        {error   && <p style={{ color: 'red'   }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="お名前"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
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
          <button type="submit">登録する</button>
        </form>
        <p>
          すでにアカウントをお持ちの方は <Link to="/login">ログイン</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
