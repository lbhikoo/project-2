import LocationData from "./LocationData"

function LocationList({locations}) {


    const sweetLocations = locations.map(location => 
        <LocationData 
            key={location.id} 
            {...location}
        />
    )


    return (
        <div>
            {sweetLocations}
        </div>
    )

}

export default LocationList