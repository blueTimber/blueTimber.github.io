import './VertPreview.css';

function VertPreview(props) {
    let elements = [];
    if (props.images != null) {
        elements = props.images.map(i =>{
            return (
                <div key={props.images.indexOf(i)}>
                    <div style={{
                        backgroundImage: `url('media/${i[0]}')`,
                        backgroundSize: `${i[2]} auto`,
                        backgroundPosition: `calc(50% + ${i[3]}) calc(50% + ${i[4]})`
                    }}>
                        <p>{i[1]}</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div style={{zIndex: `${props.zindex}`}} className="project">
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="project-inner">
                <div style={{maxWidth: "100%", maxHeight: "100%", overflow: "clip"}}>
                    <div className='proj-img-cont'>
                        <p className='proj-title'>{props.name}</p>
                        <p className='proj-subtitle'>{props.subtitle}</p>
                        {elements}
                    </div>
                </div>
                <i class="fa-solid fa-chevron-down"></i>
            </a>
        </div>
    );
}
  
export default VertPreview;