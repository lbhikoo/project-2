import "./DropDown.css"

function DropDown({filterLocations}){
    return (
        <select onChange={(e) => {filterLocations(e.target.value)}} id="dropdown">
            <option value="All" >Locations</option>
            <option value="Trinidad">Trinidad</option>
            <option value="Egypt">Egypt</option>
            <option value="Alaska">Alaska</option>
        </select>
    )
}

export default DropDown