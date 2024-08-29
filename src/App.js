import "./App.css";
import Photos from "./components/Photos";
import apiData from "./components/ApiData";
import { useState, useEffect } from "react";
//remember to add a function to check artist

function App() {
  const [artistData, setArtistData] = useState(); //empty the usestate when ready!!!!!
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(true);
    const checkApiData = async () => {
      let apidataCheck = await apiData();
      setArtistData(apidataCheck);
    };
    checkApiData();
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Gallery API</h1>
        <h2>This page is only practice site for API data</h2>
        <h2>From Picsum photos</h2>
      </header>
      <main>
        <Photos artistDataGiven={artistData} isLoading={isLoading} />
      </main>
    </div>
  );
}

export default App;
