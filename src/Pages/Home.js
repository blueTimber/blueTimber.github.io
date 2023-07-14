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
                  <Project name="Only 2% of People Can Finish This?!" image="Puzzlegame.png" link="https://zeyt8.itch.io/chalk-and-cheese" />
                  <Project name="Root Rot" image="Root-rot.png" link="https://zeyt8.itch.io/root-rot" />
                  <Project name="Snowy Mansion" image="SnowyMansion.png" link="https://www.instagram.com/p/Cswoc_lqu7b/" />
                  <Project name="The Sip of Life" image="SipOfLife.png" link="https://zeyt8.itch.io/the-sip-of-life" />
                  <Project name="The Meeting" image="FieldMeeting.png" link="https://www.instagram.com/p/Cgwxn2UKb9E/" />
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
        <div className='games' style={{height: "fit-content"}}>
          <p className="header">Games</p>
          <div style={{display: "grid", gridTemplateColumns: "repeat(3, 18vmax)", gridTemplateRows: "repeat(3, 19.5vmax)", gridGap: "1vmax", marginLeft: "calc((100vw - 56vmax)/2)", marginBottom: "10vmax"}}>
            <VertPreview zindex={10} name="Only 2% of People Can Finish This?!" subtitle="Thinky Puzzle Game Jam 3 (2023)" images={[
              ["Puzzlegame.png", "Role: 3D Artist/Technical Artist"], 
              ["puzzlegame/Circle.png", "A seemingly innocent and simple puzzle game that quickly spirals out of control."], 
              ["puzzlegame/Bomb.png", "I made this game with 3 other people. I was responsible for the 3D models and (procedural) animations."]
            ]} link="https://zeyt8.itch.io/chalk-and-cheese" />
            <VertPreview zindex={9} name="Root Rot" subtitle="GGJ-2023" images={[
              ["Root-rot.png", "Role: Gameplay Programmer/Technical Artist"],
              ["rootrot/rootrot2.png", "Control a bush and climb/swing through the level (and your enemies) with your roots."],
              ["rootrot/rootrot3.png", "In our group of 3, I made the physics-based movement system for the player, and the procedural mesh generation for its roots.", "cover", "-3vw", "0vw"]
            ]} link="https://zeyt8.itch.io/root-rot" />
            <VertPreview zindex={8} name="The Sip of Life" subtitle="Tales of Us Game Jam (2022)" images={[
              ["SipOfLife.png", "Role: Technical Artist/Level Designer"],
              ["sipoflife/sipoflife2.png", "Control the son of Alexander The Great and punch your way through monsters and fairies, to reach the fountain of youth in this retro-themed Beat 'em up."],
              ["sipoflife/sipoflife3.png", "We made this game with 4 people, and my responsibility was the shaders and FX, as well as level design."]
            ]} link="https://zeyt8.itch.io/the-sip-of-life" />
            <VertPreview zindex={7} name="Elf-Employment" subtitle="Xmas IXD/GDT Game Jam 22'" images={[
              ["elf/Covergif.gif", "Role: 3D Artist"],
              ["elf/elf2.png", "Slowly form a woker's union by convincing your fellow elves, ultimately confronting Santa himself."],
              ["elf/elf3.png", "I made this game with one other person, with me being responsible for the models and animations. This game was the first and only game I've made in Godot, which led to issues during development."]
            ]} link="https://nightanimal333.itch.io/elf-employment" />
            <VertPreview zindex={6} name="Snails in Peril" subtitle="Week Sauce Game Jam (Apr 2022)" images={[
              ["snails/snails3.png", "Role: 3D Artist"],
              ["snails/snails1.png", "Control two snails and sneak/puzzle-solve your way past evil snails to escape."],
              ["snails/snails2.png", "This was my first game jam, and my first game in Unreal Engine. This was made with a team of 3 with me making the 3D models and animations."]
            ]} link="https://zeyt8.itch.io/snails-in-peril" />
            <VertPreview zindex={5} name="Unitiled Peasant Game" subtitle="Cancelled PC Game (2021)" images={[
              ["Peasant.png", "Role: 3D Artist/Technical Artist", "cover", "5vw", "0vw"],
              ["peasant/peasantModels.png", "This was my first team project, with a group of 3; a game about medieval peasants fighting through a dungeon."],
              ["peasant/peasant2.png", "Before cancellation I completed multiple models and animations, as well as stylised shaders."],
              ["peasant/peasant3.png", "This game was cancelled in favour of working on a different game with a bigger team, which is currently in development.", "cover", "4vw", "0vw"]
            ]} />
            <VertPreview zindex={4} name="WingJam" subtitle="Unfinished Mobile Game (2021)" images={[
              ["wingjam/wingjam1.gif", "Solo Project"],
              ["wingjam/wingjam2.gif", "A mobile game with procedural tile-based level generation. In the end, two enemies and two bosses were completed."],
              ["wingjam/wingjam3.gif", "I spend a lot of development time on optimisation, getting the game to run on a stable 60fps(my phone's max framerate) on my 5 year old budget phone(MI A2)."],
              ["wingjam/wingjam4.gif", "I stopped developing this game when I met other Unity developers to team up with."]
            ]} />
            <VertPreview zindex={3} name="FPS Movement Controller" subtitle="Gameplay Prototype (2019-2020)" images={[
                ["fps/Fps1.gif", "Solo Project"],
                ["fps/Fps2.gif", "Before I tried to make full games I spent most of my time on prototyping mechanics. The main one worth showing off is a Titanfall-inspired physics-based movement controller."],
                ["fps/Fps3.gif", "A lot of time was spend making it feel as smooth as possible and adding as many movement options as possible."],
                ["fps/Fps4.gif", "I also added a gravity manipulation ability, as well as zero-gravity movement, and a grappling hook(of course)."]
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
            <Square image="art/Moonlantern.png" column={1} row={8} />
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
