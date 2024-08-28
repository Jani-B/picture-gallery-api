import React from "react";
export default function Photos({ artistDataGiven }) {
  //Here we add the photos of the chosen artist from the api call.
  //have to make it ready. Currently nothing here

  if (artistDataGiven) {
    return (
      <>
        <div>
          <h3>Artists</h3>

          {artistDataGiven.map((info) => (
            <div key={`div ${info.id}`}>
              <p key={info.id}>{info.author}</p>
              <img src={info.image} alt="" height={200} width={200}></img>
            </div>
          ))}
          <p>This works</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <p>Searching artists</p>
      </>
    );
  }
}
