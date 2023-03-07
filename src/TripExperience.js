
import {useState} from "react"

//Form Post
function TripExperience() {
    const [comment, setComment] = useState('')

    function handleComment(e) {
        setComment(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }
    // const newRating = {
        // comments
    //    
    //   }
    // 
    // 
    // fetch( `http://localhost:3000/locations`, {
        // method: 'POST', 
        // headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify( newRating )
    //   } )
        // .then( r => r.json() )
        // .then( addRatingToState )
    //   e.target.reset()
    // 
    // 
    console.log("Hi")
    return (
        <div className="new-rating-form">
            <h2>New Rating</h2>
            <form onSubmit={ handleComment } >
                <input onChange={ handleComment } type="text" name="name" 
                placeholder="Rate Us!" />
            </form>
       </div>
    ) 
 }

 export default TripExperience