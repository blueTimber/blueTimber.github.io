import './Home.css';
import Highlights from '../Components/Highlights';
import Project from '../Components/Project';
import { MoveLeft, MoveRight } from '../Components/Project';
import VertPreview from '../Components/VertPreview';
import { Square, Landscape, Portrait} from '../Components/Collage';
import React, { useEffect } from 'react';

function Home() {
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
        <div className='games' style={{height: "125vh"}}>
          <p className="header">Games</p>
          <div style={{display: "grid", gridTemplateColumns: "repeat(3, 19vmax)", gridTemplateRows: "repeat(3, 19vmax)", gridGap: "1vmax", marginLeft: "calc((100vw - 59vmax)/2)", marginBottom: "10vmax"}}>
            <VertPreview zindex={10} name="Only 2% of People Can Finish This?!" images={[
                ["Puzzlegame.png", "I was the 3D artist for this game made in 2.5 days for the 'Thinky Puzzle Game Jam 3'."], 
                ["puzzlegame/Circle.png", "Root Rot"], 
                ["puzzlegame/Bomb.png", "snowy mansion"]
            ]} />
            <VertPreview zindex={9} name="Root Rot" images={[
                ["Root-rot.png", "I was the gameplay programmer and technical artist for 'Root Rot' made for GGJ2023."],
                ["rootrot/rootrot2.png", "TODO"],
                ["rootrot/rootrot3.png", "TODO2"]
            ]} />
            <VertPreview zindex={8} name="The Sip of Life" images={[
                ["SipOfLife.png", "This game was made for a 48-hour game jam, with me as the technical artist/level designer."]
            ]}/>
            <VertPreview zindex={7} name="Snails in Peril" images={[
                ["snails/snails1.png", "'Snails in Peril' was made in a week, and I made almost all models and animations."]
            ]}/>
            <VertPreview zindex={6} name="Elf-Employment" images={[
                ["elf/elf1.png", "'Elf-Employment' was made for a 48-hour christmas game jam. I made the models."]
            ]} />
            <VertPreview zindex={5} name="WingJam" images={[

            ]} />
            <VertPreview zindex={4} name="FPS Movement Controller" images={[
                
            ]} />
            <VertPreview zindex={3} name="Unitiled Peasant Game" images={[
                
            ]} />
          </div>
        </div>
        <div className='art' style={{height: "fit-content"}}>
          <p className="header">Art</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 23vmax)", gridTemplateRows: "repeat(9, 23vmax)", gridGap: "1vmax", marginLeft: "calc((100vw - 71vmax)/2)", marginBottom: "10vmax" }}>
            <Landscape image="RobotRock.png" column={1} row={1} />
            <Square image="art/GardenSpeed.png" column={3} row={1} />
            <Portrait image="art/YellowTracksAged.png" column={1} row={2} />
            <Landscape image="art/OldUpsideDownForestChain.png" column={2} row={2} />
            <Square image="art/WireWallMonster.png" column={2} row={3} />
            <Portrait image="art/TreeReflect.png" column={3} row={3} />
            <Landscape image="SnowyMansion.png" column={1} row={4} />
            <Portrait image="art/BuildingRender.png" column={1} row={5} />
            <Landscape image="art/Test.png" column={2} row={5} />
            <Landscape image="FieldMeeting.png" column={2} row={6} />
            <Landscape image="art/TopDownFlareGun.png" column={1} row={7} />
            <Portrait image="art/PillarSnake.png" column={3} row={7} />
            <Square image="art/MoonLantern.png" column={1} row={8} />
            <Square image="art/Propellor.png" column={2} row={8} />
            <Landscape image="BoatPainting.png" column={1} row={9} />
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

export default Home;
