import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Enter User Name"
          name="username"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <img title="React logo" src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => {
            setData("updated data");
          }}
        >
          Show Data
        </button>
        <p>{data}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React123
        </a>
        <br />
      </header>
    </div>
  );
}

export default App;
