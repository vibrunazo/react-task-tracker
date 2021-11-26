import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <h1 className="App-header">Hello From React</h1>
      <h2>
        20 + 5 is {20 + 5}
      </h2>
    </div>
  );
}

export default App;
