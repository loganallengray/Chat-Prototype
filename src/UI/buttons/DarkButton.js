import './buttons.css';

const DarkButton = (props) => {
    return (
        <button
            id={`${props.id !== undefined ? `${props.id}` : ""}`}
            className={`button-dark ${props.className !== undefined ? `${props.className}` : ""}`}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default DarkButton;