

function LocationData({location, todo, food, hotel, history, image}) {

    return(
        <div>
            <h1>{location}</h1>
            <p>{todo}</p>
            <p>{food}</p>
            <p>{hotel}</p>
            <p>{history}</p>
            <img src={image}></img>
        </div>
    )

}

export default LocationData