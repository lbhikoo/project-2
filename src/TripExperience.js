import {useState, useEffect} from "react"
import NewComments from "./NewComments"
import "./TripExperience.css"

//Form
function TripExperience() {
    const [comment, setComment] = useState('')
    const [newComment, setNewComment] = useState([])
    console.log(newComment)

    function handleComment(e) {
        setComment(e.target.value)
    }

    const handleNewComment = newComments => {
        setNewComment( [ ...newComment, newComments ] )
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
        .then(handleNewComment)
      e.target.reset()
    }
    //what to do?
    return (
        <div className="new-comment-form">
            <h3 className="h3">What're some of your favorite locations and why?</h3>
            <form onSubmit={ handleSubmit } >
                <input onChange={ handleComment } type="text" name="name" 
                placeholder="Comments" />
                <button className= "button" type="submit">Submit</button>
            </form>
            <NewComments newComment={newComment}/>
       </div>
    ) 
 }

 export default TripExperience
