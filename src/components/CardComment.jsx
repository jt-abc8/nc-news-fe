import { useState } from "react";
import { getDate, getTime, simulateLogin } from "../utils";
import deleteIcon from "../assets/delete-icon.svg";
import { deleteComment } from "../api";
import { getComments } from "../api";

function CardComment({ commentData, setCommentArray }) {
   const { article_id, author, body, comment_id, created_at, votes } =
      commentData;
   const [isDeleting, setIsDeleting] = useState(false);
   const [isError, setIsError] = useState(false);
   const { username } = simulateLogin();
   const date = getDate(created_at);
   const time = getTime(created_at);
   const { dd, mm, yyyy } = date;

   const deleteButton = () => {
      if (author === username) {
         return (
            <button
               onClick={handleDeleteComment}
               className="comment-delete-btn border"
            >
               <img src={deleteIcon} alt="Delete comment" />
            </button>
         );
      }
   };

   const handleDeleteComment = (event) => {
      setIsError(false);
      setIsDeleting(true);
      deleteComment(comment_id)
         .then(() => getComments(article_id))
         .then((data) => setCommentArray(data))
         .catch((err) => setIsError(true))
         .finally(() => setIsDeleting(false));
   };

   return (
      <section className="comment-card border">
         <div className="comment-heading">
            <div>
               <h4>{author}</h4>
               <h5>
                  {dd} {mm} {yyyy} {time}
               </h5>
            </div>
            {deleteButton()}
         </div>
         <br/>
         <p>{body}</p>
         <p>{votes} votes</p>
         {isDeleting ? "Deleting..." : null}
         {isError ? "Failed to delete..." : null}
      </section>
   );
}

export default CardComment;
