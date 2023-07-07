import './App.css';
import Highlights from './Components/Highlights';
import VertPreview from './Components/VertPreview';

function App() {
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
            <div style={{display: "flex", marginTop: "0.5vmax", marginBottom: "0.5vmax", borderRadius: "0.5vmax", backgroundColor: "#1b1b1b"}}>
              <div className="highlight-select"><i className="fa-solid fa-chevron-left"></i></div>
              <div className="highlight-browser"></div>
              <div className="highlight-select"><i className="fa-solid fa-chevron-right"></i></div>
            </div>
          </div>
          <div className="scroll-reminder">
              <p style={{color: "white", textAlign: "center", fontWeight: "bold", fontSize: "1vmax", lineHeight: "1", margin: "0.5vmax 0.5vmax 1vmax 0.5vmax"}}>Scroll for more!</p>
          </div>
        </div>
        <div className="sticky">
            <p style={{color: "white"}}>Test header</p>
        </div>
        <Highlights />
        <div style={{height: "300vh"}}>
          <p className="header">Games</p>
          <div style={{display: "flex", justifyContent: "space-evenly", marginLeft: "auto", marginRight: "auto", flexWrap: "wrap", gap: "10px", maxWidth: "80vw"}}>
            <VertPreview name="Game Jams" images={[["Puzzlegame.png", "Only 2% of people can beat this?!"], ["Root-rot.png", "Root Rot"], ["SnowyMansion_Better.png", "snowy mansion"]]} />
            <VertPreview />
            <VertPreview />
            <VertPreview />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
