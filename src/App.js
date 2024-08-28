import "./App.css";
import Artists from "./components/Artists";
import Photos from "./components/Photos";
import apiData from "./components/ApiData";
import { useState, useEffect } from "react";
//remember to add a function to check artist

function App() {
  const [artist, setArtist] = useState([{ id: 30, author: "test" }]); //This should take in the artist from the Api call and display them
  const [chosenArtist, setChosenArtist] = useState("all"); //this is to keep track on the chosen artist to show the pictures
  const [artistData, setArtistData] = useState(); //empty the usestate when ready!!!!!

  //[
  //{
  //id: "30",
  //author: "Shyamanta Baruah",
  //width: 1280,
  //height: 901,
  //url: "https://unsplash.com/photos/aeVA-j1y2BY",
  //image: "../mock_picture.jpg",
  //},
  //]
  //UNCOMMENT WHEN DESIGN IS READY!

  useEffect(() => {
    const checkApiData = async () => {
      let apidataCheck = await apiData();
      setArtistData(apidataCheck);
    };
    checkApiData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Gallery API</h1>
        <h2>This page is only practice site for API data</h2>
      </header>
      <main>
        <Photos artistDataGiven={artistData} />
      </main>
    </div>
  );
}

export default App;
