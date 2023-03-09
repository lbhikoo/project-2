
import "./LocationData.css"

function LocationData({location, todo, food, hotel, history, image}) {

    function splitterTool(string) {
        const anArray = string.split('\n')
        const pElements = anArray.map(p => <p> {p} </p>)
        return pElements
    }

    return(
        <div>
            <h1>{location}</h1>
            <h3>Things to do</h3>
            <div>{splitterTool(todo)}</div>
            <h3>Food to eat</h3>
            <div>{splitterTool(food)}</div>
            <h3>Hotels to stay at</h3>
            <p>{splitterTool(hotel)}</p>
            <h3>History</h3>
            <p>{splitterTool(history)}</p>
            <img src={image}></img>
        </div>
    )

}

export default LocationData

