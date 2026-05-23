
import "./UserCard.css" 

const Usercard = (props) => {
  return (
    <div className="user-container">
    <p id="title"> {props.name}</p>
    <img id="image" src={props.image} alt=" pic"/>
       <p id="desc">{props.desc}</p>
    </div>
  )
}

export default Usercard
