import React from "react";
import styles from "./Photos.module.css";

export default function Photos({ artistDataGiven }) {
  //Here we add the photos of the chosen artist from the api call.
  //have to make it ready. Currently nothing here

  if (artistDataGiven) {
    return (
      <>
        <div>
          <h3>Photos from different artists</h3>
          <div className={styles.cardContainer}>
            {artistDataGiven.map((info) => (
              <div key={`div ${info.id}`} className={styles.card}>
                <p className={styles.author} key={info.id}>
                  {info.author}
                </p>
                <img src={info.image} alt="" height={200} width={200}></img>
                <p>
                  <a href={info.url} target="_blank">
                    Check it in Unsplash
                  </a>
                </p>
              </div>
            ))}
          </div>
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
