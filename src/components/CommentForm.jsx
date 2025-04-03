import { useState } from "react";
import { simulateLogin } from "../utils";
import { getComments, postComment } from "../api";

function CommentForm({ setData, article_id }) {
   const { username, avatar } = simulateLogin();
   const [input, setInput] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const [isSubmitted, setisSubmitted] = useState(false);

   const handleInput = (event) => {
      setInput(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      setIsLoading(true);
      setIsError(false);
      postComment(article_id, username, input)
         .then(() => {
            setInput("");
            setisSubmitted(true);
            getComments(article_id).then((data) => {
               setData(data);
            });
         })
         .catch((err) => {
            setIsError(true);
            setisSubmitted(false);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   if (isLoading) {
      return <p>Submitting...</p>;
   }

   const submitState = () => {
      if (isSubmitted) return "Comment submitted!";
      if (isError) return "Something went wrong...";
   };

   return (
      <>
         <form id="comment-form" onSubmit={handleSubmit}>
            <label id="comment-form-label" htmlFor="comment">
               Leave a comment:
            </label>
            <div id="comment-user-display">
               <img src={avatar} alt="" />
               <p>{username}</p>
            </div>
            <textarea
               required
               id="comment"
               name="comment"
               placeholder="Comment goes here..."
               maxLength={250}
               value={input}
               onChange={handleInput}
            />
            <p id="comment-char-count">{input.length}/250</p>
            <button>Submit</button>
         </form>
         <p id="comment-submit-msg">{submitState()}</p>
      </>
   );
}

export default CommentForm;
