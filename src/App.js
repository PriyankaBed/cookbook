import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://preview.contentful.com/spaces/n7f3fgb05lp6/environments/master/entries?access_token=-BBIIMnr5XZRsqGFwd9iNf-ZHgL8kUFePiJOCBpbIUw"
      )
      .then((response) => {
        console.log(response.data.includes.Asset);
        console.log(response.data.items);
        setAssets(response.data.includes.Asset);
        setEntries(response.data.items);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {assets.map((asset) => {
          return (
            <img
              src={asset.fields.file.url}
              alt={asset.fields.title}
              key={asset.fields.title}
            />
          );
        })}
        {entries.map((entry) => {
          return (
            <div>
              <h1>{entry.fields.cookbook}</h1>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
