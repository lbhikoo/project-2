import {useEffect, useState} from "react"
import Header from "./Header"
import TripExperience from "./TripExperience"
import LocationList from "./LocationList"
import DropDown from "./DropDown"


function LocationsContainer() {
   
   
   const [locations, setLocations] = useState([])

   const [locationDropDown, setLocationDropDown] = useState('')

   const myFilter = filteredLocation => {
    if (filteredLocation.location.includes(locationDropDown)) {
      return true
    }
}
   
    const locationList = locations.filter(myFilter)

    const changeLocation = newLocation => {
        setLocationDropDown(newLocation)
      }

   useEffect(() => {
       fetch(`http://localhost:3000/locations`)
       .then(r => r.json())
       .then(setLocations)
    },[]) 
    
   
    return (
        <div>
            <DropDown filterLocations= {changeLocation}/>
            <TripExperience />
            <LocationList locations={locationList}/>
        </div>
    )
}

export default LocationsContainer