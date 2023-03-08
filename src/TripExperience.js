import {useState, useEffect} from "react"
import NewComments from "./NewComments"

//Form
function TripExperience() {
    const [comment, setComment] = useState('')
    const [newComment, setNewComment] = useState([])

    function handleComment(e) {
        setComment(e.target.value)
    }


    useEffect(() => {
        fetch('http://localhost:3000/comments')
        .then(r=> r.json())
        .then(setNewComment)
    },[])     

    function handleSubmit(e) {
        e.preventDefault()
    
        const newRating = {
            comment
        }
    
        //How are we going to render these comments to the page?
        //Do we need to fetch the comments that are already in the database?
    fetch( `http://localhost:3000/comments`, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( newRating )
      } )
        .then( r => r.json() )
        .then()
      e.target.reset()
    }
    //what to do?
    return (
        <div className="new-comment-form">
            <h2>New Rating</h2>
            <form onSubmit={ handleSubmit } >
                <input onChange={ handleComment } type="text" name="name" 
                placeholder="Comments" />
                <button type="submit">Submit</button>
            </form>
            <NewComments newComment={newComment}/>
       </div>
    ) 
 }

 export default TripExperience
