import './Project.css';

export function MoveLeft() {
    if (document.getElementsByClassName('highlight-browser-cont1').length != 0)
        document.getElementsByClassName('highlight-browser-cont1')[0].className = 'highlight-browser-cont3';
    else if (document.getElementsByClassName('highlight-browser-cont2').length != 0)
        document.getElementsByClassName('highlight-browser-cont2')[0].className = 'highlight-browser-cont1';
    else if (document.getElementsByClassName('highlight-browser-cont3').length != 0)
        document.getElementsByClassName('highlight-browser-cont3')[0].className = 'highlight-browser-cont2';
}

export function MoveRight() {
    if (document.getElementsByClassName('highlight-browser-cont1').length != 0)
        document.getElementsByClassName('highlight-browser-cont1')[0].className = 'highlight-browser-cont2';
    else if (document.getElementsByClassName('highlight-browser-cont2').length != 0)
        document.getElementsByClassName('highlight-browser-cont2')[0].className = 'highlight-browser-cont3';
    else if (document.getElementsByClassName('highlight-browser-cont3').length != 0)
        document.getElementsByClassName('highlight-browser-cont3')[0].className = 'highlight-browser-cont1';
}


function Project(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="project-highlight" style={{backgroundImage: `url('media/${props.image}')`}}>
            <p className='project-highlight-name'>{props.name}</p>
        </a>
    );
}
  
export default Project;