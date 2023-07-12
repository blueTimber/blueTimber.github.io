import './Collage.css';

export function Square(props) {
    return (
        <div className="collage square" style={{
            backgroundImage: `url('media/${props.image}')`,
            gridColumnStart: `${props.column}`, gridColumnEnd: `${props.column+1}`,
            gridRowStart: `${props.row}`, gridRowEnd: `${props.row+1}`
        }}></div>
    );
}

export function Landscape(props) {
    return (
        <div className="collage landscape" style={{
            backgroundImage: `url('media/${props.image}')`,
            gridColumnStart: `${props.column}`, gridColumnEnd: `${props.column+2}`,
            gridRowStart: `${props.row}`, gridRowEnd: `${props.row+1}`
        }}></div>
    );
}

export function Portrait(props) {
    return (
        <div className="collage portrait" style={{
            backgroundImage: `url('media/${props.image}')`,
            gridColumnStart: `${props.column}`, gridColumnEnd: `${props.column+1}`,
            gridRowStart: `${props.row}`, gridRowEnd: `${props.row+2}`
        }}></div>
    );
}