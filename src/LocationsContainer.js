import {useEffect, useState} from "react"
import Header from "./Header"
import TripExperience from "./TripExperience"
import LocationList from "./LocationList"
import DropDown from "./DropDown"


function LocationsContainer() {
   
   
   const [locations, setLocations] = useState([])
   
   useEffect(() => {
       fetch(`http://localhost:3000/locations`)
       .then(r => r.json())
       .then(setLocations)
    },[]) 
    
   
    return (
        <div>
            <DropDown />
            <TripExperience />
            <LocationList locations={locations}/>
        </div>
    )
}

export default LocationsContainer