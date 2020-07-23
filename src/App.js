import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">

      <div className="landingPage">
        <div className="landingPageText" style={{color: "white"}}>
          <div className="landingTitle">DSS-INOX</div>
          <div className="description">Confecții oțel inoxidabil</div>
        </div>
        <img className="landingPageImage" src={require("./images/bara-in-house.jpg")} alt="Bara de inox"></img>
      </div>

      <div className="page">
        <img className="page2Image" src={require("./images/welder2.jpg")} alt="Page 2"></img>
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
        <img className="page3Image" src={require("./images/bara.jpg")} alt="Page 2"></img>
      </div>

      <div className="page">
        <img className="page2Image" src={require("./images/stairs.jpg")} alt="Page 2"></img>
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
