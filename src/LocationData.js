

function LocationData({location, todo, food, hotel, history}) {

    return(
        <div>
            <h1>{location}</h1>
            <p>{todo}</p>
            <p>{food}</p>
            <p>{hotel}</p>
            <p>{history}</p>
        </div>
    )

}

export default LocationData