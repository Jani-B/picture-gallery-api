const Artists = ({ artist, chooseArtist }) => {
  //picArtist currently just to test that the props works.
  const pickArtist = () => {
    chooseArtist("Meaya");
  };

  //this should list all artist on their own "buttons". Artists we get from the artist props. Should map them in return
  //every button should have a name of the artist and a function that will pick up the artist name and add it to chooseArtist props
  return (
    <>
      <h2>Check The Photo Artists</h2>
      <button onClick={() => pickArtist()}>Meya</button>
    </>
  );
};

export default Artists;
