import './buttons.css';

const BorderButton = (props) => {
    return (
        <button
            id={`${props.id !== undefined ? `${props.id}` : ""}`}
            className={`button-border ${props.className !== undefined ? `${props.className}` : ""}`}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default BorderButton;