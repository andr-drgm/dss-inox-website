import React, { useRef, useEffect } from 'react';
import './App.css';
import Rellax from "rellax";
import { firebaseApp } from './firebase';

function App() {


  const rellaxRef = useRef();
  const rellaxRef2 = useRef();
  const rellaxRef3 = useRef();
  const rellaxRef4 = useRef();

  useEffect(() => {
    new Rellax(rellaxRef.current, { // <---- Via useRef element
      speed: -1,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(rellaxRef2.current, { // <---- Via useRef element
      speed: 2,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(rellaxRef3.current, { // <---- Via useRef element
      speed: -2,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(rellaxRef4.current, { // <---- Via useRef element
      speed: 2,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

  }, []);

  firebaseApp.analytics();

  return (
    <div className="container">

      <div className="landingPage">
        <div className="landingPageText" style={{ color: "white" }}>
          <div><h1 className="landingTitle">DSS-INOX</h1></div>
          <div><h1 className="description">Confecții din oțel inoxidabil</h1></div>
        </div>
        <div className="landingPageImage" ref={rellaxRef} src={require("./images/bara-in-house.jpg")} alt="Bara de inox"></div>
      </div>

      <div className="page">
        <div className="page2Image" ref={rellaxRef2}></div>
        <div className="landingPageText">
          <div className="title">In ritm cu tehnologia</div>
          <div className="description">Folosim cele mai noi tehnogii
          pentru a oferii cea mai buna
experiență clienților noștrii</div>
        </div>
      </div>

      <div className="page" style={{ backgroundColor: "black" }}>
        <div className="landingPageText">
          <div className="title" style={{ color: "white" }}>Durabilitate</div>
          <div className="description" style={{ color: "white" }}>Te vei bucura toată viața
          de un produs care își
          păstrează propietațile
și aspectul în timp</div>
        </div>
        <div className="page3Image" ref={rellaxRef3}></div>
      </div>

      <div className="page">
        <div className="page4Image" ref={rellaxRef4}></div>
        <div className="landingPageText">
          <div className="title">Modern</div>
          <div className="description">Împrospătează aspectul
          locuinței tale cu un aer
          modern oferit de decorațiunile
din oțel inoxidabil</div>
        </div>
      </div>

      <div className="pageContact" style={{ backgroundColor: "black" }}>
        <div className="contactData" style={{ color: "white" }}> <p style={{fontSize: 30}}>Contact</p>
        <div className="dataPair">
            <div className="locationIcon"></div>
            <a className="dataText" href="https://www.google.com/maps/place/Media%C8%99/" style={{ color: "white", textDecoration: "none" }}>Mediaș, Sibiu</a>
          </div>
          <div className="dataPair">
            <div className="emailIcon"></div>
            <a className="dataText" href="mailto:dragomirstefan74@gmail.com" style={{ color: "white", textDecoration: "none" }}>dragomirstefan74@gmail.com</a>
          </div>
          <div className="dataPair">
            <div className="phoneIcon"></div>
            <a className="dataText" href="tel:+40744663034" style={{ color: "white", textDecoration: "none" }}>+40 744 663 034</a>
          </div>
        </div>
      </div>
      <div className="siteCreator" style={{ backgroundColor: "black", color: "white" }}
        >© Copyright 2020 DSS-INOX. Website created by <a style={{ color: "white" }} href="http://andr-drgm.github.io/"
        >Andrei Dragomir</a>
      </div>
    </div>
  );
}

export default App;
