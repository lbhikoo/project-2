
import "./LocationData.css"

function LocationData({location, todo, food, hotel, history, image}) {

    function splitterTool(string) {
        const anArray = string.split('\n')
        const pElements = anArray.map(p => <p> {p} </p>)
        return pElements
    }


   



    return(
        <div className= "data">
            <h1>{location}</h1>
            <h3>Things to do</h3>
            <div className="todo">{splitterTool(todo)}</div>
            <h3>Food to eat</h3>
            <div className="food">{splitterTool(food)}</div>
            <h3>Hotels to stay at</h3>
            <div className= "hotel">{splitterTool(hotel)}</div>
            <h3>History</h3>
            <div className="history">{splitterTool(history)}</div>
            <img className= "locs" style={{ width: 900, height: 600 }} alt='pictures' src={image}></img>
        </div>

    )

}

export default LocationData

