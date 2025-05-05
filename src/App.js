import logo from './logo.svg';
import Header from './componet/header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-6">
        <h1 className="text-2xl mb-4">Welcome to ガチャサイト！</h1>
        {/* 他のコンポーネントやページ内容 */}
      </main>
    </div>
  );
}

export default App;
