import LocationData from "./LocationData"
import "./LocationsList.css"

function LocationList({locations}) {


    const sweetLocations = locations.map(location => 
        <LocationData 
            key={location.id} 
            {...location}
        />
    )


    return (
        <div className="locations">
            {sweetLocations}
        </div>
    )

}

export default LocationList