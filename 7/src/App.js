import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello Class</h1>
      </header>

      <Counter />
    </div>
  );
}

export default App;
