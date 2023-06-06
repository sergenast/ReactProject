import './Buttons.css';

function Buttons(props){
    return(
        <div className="buttons">
        <button className="button">{props.leftButton}</button>
        <button className="button">{props.rightButton}</button>
        </div>
    )
}

export default Buttons;