import logo from './george.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         My name is George Ampadu and I'm going to master React!!
        </p>
        <p>I'll be a pro at this soon!</p>
        <a
          className="App-link"
          href="https://github.com/GeorgeAmpadu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my Github Acct!!
        </a>
      </header>
    </div>
  );
}

export default App;
