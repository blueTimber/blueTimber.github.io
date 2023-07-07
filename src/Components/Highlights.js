import './Highlights.css';

function high_clicked(id, comp) {
    const high_doc = document.getElementById(id);
    if (comp.target.className == 'img-right')
    {
        const rightmost = high_doc.getElementsByClassName('img-right1')[0];

        high_doc.getElementsByClassName('img-left2')[0].className = 'img-right1';
        high_doc.getElementsByClassName('img-left1')[0].className = 'img-left2';
        high_doc.getElementsByClassName('img-left')[0].className = 'img-left1';
        high_doc.getElementsByClassName('img-centre')[0].className = 'img-left';
        high_doc.getElementsByClassName('img-right')[0].className = 'img-centre';
        rightmost.className = 'img-right';
    }
    else if (comp.target.className == 'img-left') 
    {
        const leftmost = high_doc.getElementsByClassName('img-left2')[0];

        high_doc.getElementsByClassName('img-right1')[0].className = 'img-left2';
        high_doc.getElementsByClassName('img-right')[0].className = 'img-right1';
        high_doc.getElementsByClassName('img-centre')[0].className = 'img-right';
        high_doc.getElementsByClassName('img-left')[0].className = 'img-centre';
        high_doc.getElementsByClassName('img-left1')[0].className = 'img-left';
        leftmost.className = 'img-left1';
    }
}


function SingleHighlight(image, name, disc, images, zindex, scale, horoffset, veroffset) {
    return(
        <div className='highlight' style={{
            backgroundImage: `url('media/${image}')`,
            zIndex: zindex,
            backgroundSize: `${scale} auto`,
            backgroundPosition: `calc(50% + ${horoffset}) calc(50% + ${veroffset})`
            }}>
            <div>
                <div id={name} className='image-cycler'>
                    <div className='img-left2' style={{ backgroundImage: `url('media/${images[1]}')` }} onClick={(e) => high_clicked(name, e)}></div>
                    <div className='img-left1' style={{ backgroundImage: `url('media/${images[2]}')` }} onClick={(e) => high_clicked(name, e)}></div>
                    <div className='img-left' style={{ backgroundImage: `url('media/${images[0]}')` }} onClick={(e) => high_clicked(name, e)}></div>
                    <div className='img-centre' style={{ backgroundImage: `url('media/${images[1]}')` }} onClick={(e) => high_clicked(name, e)}></div>
                    <div className='img-right' style={{ backgroundImage: `url('media/${images[2]}')` }} onClick={(e) => high_clicked(name, e)}></div>
                    <div className='img-right1' style={{ backgroundImage: `url('media/${images[0]}')` }} onClick={(e) => high_clicked(name, e)}></div>
                </div>
                <div>
                    <p className='high-disc-title'>{name}</p>
                    <p className='high-disc-body'>{disc}</p>
                </div>
            </div>
        </div>
    );
}

function Highlights(props) {
    return (
        <div className='high-cont'>
            {SingleHighlight("Root-rot.png", "Game Jams", "Test description", ["Puzzlegame.png", "Root-rot.png", "SipOfLife.png"], 100, "140vw", "-20vw", "0vw")}
            {SingleHighlight("SnowyMansion_Better.png", "Blender", "", ["Root-rot.png", "SnowyMansion.png", "BoatPainting.png"], 90, "140vw", "20vw", "-13vw")}
            {SingleHighlight("Peasant.png", "Unfinished Games", "", ["Root-rot.png", "Peasant.png", "Peasant.png"], 80, "140vw", "20vw", "-1vw")}
        </div>
    );
}
  
export default Highlights;