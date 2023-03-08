import CommentMade from "./CommentMade"


/// this is where we stopped! Make sure to create a new component to render this info!
function NewComments({newComment}) {
    // console.log(newComment)

    const newComments = newComment.map((commentObj) => 
        <CommentMade 
            key ={commentObj.id} 
             {...commentObj}
        />)

    return (
        <div>
            {newComments}
        </div>
    )
}

export default NewComments