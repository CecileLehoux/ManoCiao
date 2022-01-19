import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";
import ColorThiefContainer from './components/ThiefColor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ColorThiefContainer />
      </header>
      <Helmet>
        <script type="module" src="app.js"></script>
      </Helmet>
    </div>
  );
}

export default App;
