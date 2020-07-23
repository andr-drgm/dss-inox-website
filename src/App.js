import React, { useRef, useEffect } from 'react';
import './App.css';
import Rellax from "rellax";

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
      speed: 5,
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

  },[]);

  return (
    <div className="container">

      <div className="landingPage">
        <div className="landingPageText" style={{color: "white"}}>
          <div className="landingTitle">DSS-INOX</div>
          <div className="description">Confecții din oțel inoxidabil</div>
        </div>
        <img className="landingPageImage" ref={rellaxRef} src={require("./images/bara-in-house.jpg")} alt="Bara de inox"></img>
      </div>

      <div className="page">
        <img className="page2Image" ref={rellaxRef2} src={require("./images/welder2.jpg")} alt="Page 2"></img>
        <div className="landingPageText">
          <div className="title">In ritm cu tehnologia</div>
          <div className="description">Folosim cele mai noi tehnogii
pentru a oferii cea mai buna 
experiență clienților noștrii</div>
        </div>
      </div>

      <div className="page" style={{backgroundColor: "black"}}>
        <div className="landingPageText">
          <div className="title" style={{color: "white"}}>Durabilitate</div>
          <div className="description" style={{color: "white"}}>Te vei bucura toată viața
de un produs care își
păstrează propietațile
și aspectul în timp</div>
        </div>
        <img className="page3Image" ref={rellaxRef3} src={require("./images/bara.jpg")} alt="Page 2"></img>
      </div>

      <div className="page">
        <img className="page2Image" ref={rellaxRef4} src={require("./images/stairs.jpg")} alt="Page 2"></img>
        <div className="landingPageText">
          <div className="title">Modern</div>
          <div className="description">Împrospătează aspectul
locuinței tale cu un aer
modern oferit de decorațiunile
din oțel inoxidabil</div>
        </div>
      </div>
    </div>
  );
}

export default App;
