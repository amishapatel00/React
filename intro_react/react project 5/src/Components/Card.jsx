

const card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=>props.setName(e.target.value)}/>
      <p>value inside {props.title}:{props.name}</p>

    </div>
  )
}

export default card
