import './Highlights.css';
import React, { useEffect } from 'react';

function high_clicked_left(id) {
    const high_doc = document.getElementById(id);

    const leftmost = high_doc.getElementsByClassName('img-left2')[0];

    high_doc.getElementsByClassName('img-right1')[0].className = 'img-left2';
    high_doc.getElementsByClassName('img-right')[0].className = 'img-right1';
    high_doc.getElementsByClassName('img-centre')[0].className = 'img-right';
    high_doc.getElementsByClassName('img-left')[0].className = 'img-centre';
    high_doc.getElementsByClassName('img-left1')[0].className = 'img-left';
    leftmost.className = 'img-left1';
}

function high_clicked_right(id) {
    const high_doc = document.getElementById(id);

    const rightmost = high_doc.getElementsByClassName('img-right1')[0];

    high_doc.getElementsByClassName('img-left2')[0].className = 'img-right1';
    high_doc.getElementsByClassName('img-left1')[0].className = 'img-left2';
    high_doc.getElementsByClassName('img-left')[0].className = 'img-left1';
    high_doc.getElementsByClassName('img-centre')[0].className = 'img-left';
    high_doc.getElementsByClassName('img-right')[0].className = 'img-centre';
    rightmost.className = 'img-right';
}


function SingleHighlight(image, name, disc, images, zindex, scale, horoffset, veroffset, left) {

    useEffect(() => {
        const interval = setInterval(() => {
            high_clicked_right(name);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const cycler = (
        <div id={name} className='image-cycler'>
            <div className='img-left2' style={{ backgroundImage: `url('media/${images[1]}')` }} >
            </div>
            <div className='img-left1' style={{ backgroundImage: `url('media/${images[2]}')` }}>
            </div>
            <div className='img-left' style={{ backgroundImage: `url('media/${images[0]}')` }}>
            </div>
            <div className='img-centre' style={{ backgroundImage: `url('media/${images[1]}')` }}>
            </div>
            <div className='img-right' style={{ backgroundImage: `url('media/${images[2]}')` }}>
            </div>
            <div className='img-right1' style={{ backgroundImage: `url('media/${images[0]}')` }}>
            </div>
            <div className='left-hitbox' onMouseOver={() => high_clicked_left(name)}></div>
            <div className='right-hitbox' onMouseOver={() => high_clicked_right(name)}></div>
        </div>
    );

    const disc_comp = (
        <div className='disc-cont'>
            <p className='high-disc-title'>{name}</p>
            <p className='high-disc-body'>{disc}</p>
        </div>
    );

    let high = null;

    if (left) {
        high = (
            <div className='cycler-cont'>
                {cycler}
                {disc_comp}
            </div>
        );
    }
    else {
        high = (
            <div className='cycler-cont'>
                {disc_comp}
                {cycler}
            </div>
        );
    }

    return(
        <div className='highlight'>
            <div className='highlight-img' style={{
                backgroundImage: `url('media/${image}')`,
                zIndex: zindex,
                backgroundSize: `${scale} auto`,
                backgroundPosition: `calc(50% + ${horoffset}) calc(50% + ${veroffset})`
                }}>
            </div>
            {high}
        </div>
    );
}

function Highlights(props) {
    return (
        <div className='high-cont'>
            {SingleHighlight("Root-rot.png", "Game Jams", 
                "I've participated in muliple game jams, which taught me how to work in a team and perform under pressure. My roles in these games varied from gameplay programmer, to technical artist, to 3D artist.", 
                ["Puzzlegame.png", "Root-rot.png", "SipOfLife.png"], -100, "140vw", "-20vw", "0vw", false
                )}
            {SingleHighlight("SnowyMansion.png", "Blender", "", ["FieldMeeting.png", "SnowyMansion.png", "BoatPainting.png"], -110, "140vw", "20vw", "-13vw", true)}
            {SingleHighlight("Peasant.png", "Unfinished Games", "", ["Root-rot.png", "Peasant.png", "Peasant.png"], -120, "140vw", "20vw", "-1vw", false)}
        </div>
    );
}
  
export default Highlights;