import "./App.css";
import Artists from "./components/Artists";
import Photos from "./components/Photos";
import apiData from "./components/ApiData";
import { useState, useEffect } from "react";
//remember to add a function to check artist

function App() {
  const [artist, setArtist] = useState([{ id: 30, author: "test" }]); //This should take in the artist from the Api call and display them
  const [chosenArtist, setChosenArtist] = useState("all"); //this is to keep track on the chosen artist to show the pictures
  const [artistData, setArtistData] = useState();

  console.log(chosenArtist); //remove after ready!!!!!
  //console.log(artistData);

  useEffect(() => {
    const checkApiData = async () => {
      let apidataCheck = await apiData();
      setArtistData(apidataCheck);
    };
    checkApiData();
  }, []);

  console.log(artistData);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Gallery API</h1>
        <h2>This page is only practice site for API data</h2>
        <Artists artist={artist} chooseArtist={setChosenArtist} />
        <Photos artistDataGiven={artistData} />
        <button>Clcik</button>
      </header>
      <main></main>
    </div>
  );
}

export default App;
