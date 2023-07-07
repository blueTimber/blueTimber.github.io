import './VertPreview.css';

function VertPreview(props) {
    let elements = [];
    if (props.images != null) {
        elements = props.images.map(i =>{
            return (
                <div key={i[1]}>
                    <div style={{backgroundImage: `url('media/${i[0]}')`}}></div>
                    <p>{i[1]}</p>
                </div>
            )
        }
        )
    }

    return (
        <div className="project">
            <div className="project-inner">
                <div className='proj-img-cont'>
                    <p>{props.name}</p>
                    {elements}
                </div>
            </div>
        </div>
    );
}
  
export default VertPreview;