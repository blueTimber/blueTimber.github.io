import './App.css';
import Highlights from './Components/Highlights';
import Project from './Components/Project';
import { MoveLeft, MoveRight } from './Components/Project';
import VertPreview from './Components/VertPreview';
import React, { useEffect } from 'react';
import { Square, Landscape, Portrait} from './Components/Collage';

function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      MoveRight();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div style={{overflow: "clip",position: "relative"}}>
        <div className="intro" style={{overflow: "hidden"}}>
          <span className="title">
            <p className="title">Jonte Herben</p>
            <p className="subtitle">Portfolio</p>
          </span>
          <div className="socials">
            <a href="https://www.instagram.com/bluetimber_/"                target="_blank" rel="noopener noreferrer" className="fa-brands fa-instagram"></a>
            <a href="https://bluetimber.itch.io/"                           target="_blank" rel="noopener noreferrer" className="fa-brands fa-itch-io"></a>
            <a href="https://www.linkedin.com/in/jonte-herben-a08b1523b/"   target="_blank" rel="noopener noreferrer" className="fa-brands fa-linkedin-in"></a>
          </div>
          <div id="about">
            <div id="protrait"></div>
            <div className="faded">
              <p style={{margin: "0", fontSize: "1.2vmax", fontWeight: "400", color: "#a0a0a0", textAlign: "right"}}>
                  'Sup! I'm Jonte Herben, and I'm 20 years old and have just completed my Computer Science & Engineering bachelor at TU Delft. 
                  I'm also a hobbyist game-dev and 3D artist for well over 5 years now.
              </p>
            </div>
          </div>
          <div className="highlights">
            <p style={{color: "white", fontWeight: "600", margin: "0 0 0 0.5vmax"}}>Highlighted projects</p>
            <div style={{display: "flex", marginTop: "0.2vmax", marginBottom: "0.2vmax", borderRadius: "0.5vmax", backgroundColor: "#1b1b1b"}}>
              <div className="highlight-select" onClick={() => MoveLeft()}><i className="fa-solid fa-chevron-left"></i></div>
              <div className="highlight-browser">
                <div className='highlight-browser-cont1'>
                  <Project name="Only 2% of People Can Finish This?!" image="Puzzlegame.png" />
                  <Project name="Root Rot" image="Root-rot.png" />
                  <Project name="Snowy Mansion" image="SnowyMansion.png" />
                  <Project name="The Sip of Life" image="SipOfLife.png" />
                  <Project name="The Meeting" image="FieldMeeting.png" />
                </div>
              </div>
              <div className="highlight-select" onClick={() => MoveRight()}><i className="fa-solid fa-chevron-right"></i></div>
            </div>
          </div>
          <div className="scroll-reminder">
              <p style={{color: "white", textAlign: "center", fontWeight: "bold", fontSize: "1vmax", lineHeight: "1", margin: "0.5vmax 0.5vmax 1vmax 0.5vmax"}}>Scroll for more!</p>
          </div>
        </div>
        <div className="sticky">
          <p className='header-text' onClick={() => document.getElementsByClassName('summary')[0].scrollIntoView()}>Summary</p>
          <p className='header-text' onClick={() => document.getElementsByClassName('games')[0].scrollIntoView()}>Games</p>
          <p className='header-text' onClick={() => document.getElementsByClassName('art')[0].scrollIntoView()}>Art</p>
          <p className='header-text' onClick={() => document.getElementsByClassName('bottombar')[0].scrollIntoView()}>Contact</p>
        </div>
        <div className='summary'><Highlights /></div>
        <div className='games' style={{height: "200vh"}}>
          <p className="header">Games</p>
          <div style={{display: "flex", justifyContent: "space-evenly", marginLeft: "auto", marginRight: "auto", flexWrap: "wrap", gap: "10px", maxWidth: "80vw"}}>
            <VertPreview name="Game Jams" images={[["Puzzlegame.png", "Only 2% of People Can Finish This?!"], ["Root-rot.png", "Root Rot"], ["SnowyMansion.png", "snowy mansion"]]} />
            <VertPreview />
            <VertPreview />
            <VertPreview />
          </div>
        </div>
        <div className='art' style={{height: "fit-content"}}>
          <p className="header">Art</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 23vmax)", gridTemplateRows: "repeat(3, 23vmax)", gridGap: "1vmax", marginLeft: "calc(29vmax/2)", marginBottom: "10vmax" }}>
            <Landscape image="RobotRock.png" column={1} row={1} />
            <Square image="RobotRock.png" column={3} row={1} />
            <Portrait image="RobotRock.png" column={1} row={2} />
            <Landscape image="RobotRock.png" column={2} row={2} />
            <Square image="RobotRock.png" column={2} row={3} />
            <Square image="RobotRock.png" column={3} row={3} />
          </div>
        </div>
        <div className='bottombar'>
          <p>Jonte Herben</p>
          <p>Jonteherben@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
