import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    console.log("test");

    (async function getData() {
      try {
        const result = await axios.get("http://localhost/test");
        setData(result.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
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
        {data && <div style={{ color: "white" }}>{data.name}</div>}
      </header>
    </div>
  );
}

export default App;
