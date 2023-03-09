import "./CommentMade.css"


function CommentMade({comment}){
    // console.log(comment)
    return(
        <div className="comment">
            <p>{comment}</p>
        </div>
    )
}

export default CommentMade