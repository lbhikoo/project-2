import {useEffect, useState} from "react"
import Header from "./Header"
import TripExperience from "./TripExperience"
import LocationList from "./LocationList"


function LocationsContainer() {
   
   
   const [locations, setLocations] = useState([])
   
   useEffect(() => {
       fetch(`http://localhost:3000/locations`)
       .then(r => r.json())
       .then(setLocations)
       
    },[]) 
    
    console.log(locations)
   
   
   
   
   
   
   
   
   
   
   
    return (
        <div>
            <Header />
            <TripExperience />
            <LocationList />
        </div>
    )
}

export default LocationsContainer