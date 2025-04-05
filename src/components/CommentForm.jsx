import { useEffect, useState } from "react";
import { simulateLogin } from "../utils";
import { getComments, postComment } from "../api";

function CommentForm({ setData, article_id }) {
   const { username, avatar } = simulateLogin();
   const [input, setInput] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const [isSubmitted, setisSubmitted] = useState(false);
   const [msg, setMsg] = useState(null);
   const [msgTimer, setMsgTimer] = useState(false);

   const newMsg = () => {
      if (isSubmitted) return "Comment submitted!";
      if (isError)
         return "Something went wrong. Check your input is valid and try again.";
   };

   useEffect(() => {
      setMsg(newMsg());
   }, [msgTimer]);

   const handleInput = (event) => {
      setInput(event.target.value);
   };

   const messageTimer = () => {
      setMsgTimer(true);
      setTimeout(() => {
         setMsgTimer(false);
      }, 6000);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      setIsLoading(true);
      setIsError(false);

      if (!/\w/g.test(input)) {
         setIsLoading(false);
         setIsError(true);
         messageTimer();
         return;
      }

      postComment(article_id, username, input)
         .then(() => {
            setInput("");
            setisSubmitted(true);
            messageTimer();
            return getComments(article_id);
         })
         .then((data) => setData(data))
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

   return (
      <>
         <form id="comment-form" onSubmit={handleSubmit}>
            <label id="comment-form-label" htmlFor="comment">
               Leave a comment:
            </label>
            {/* <div className="user-display">
               <img className="border" src={avatar} alt="" />
               <p>{username}</p>
            </div> */}
            <textarea
               className="border"
               required
               id="comment"
               name="comment"
               placeholder="Comment goes here..."
               maxLength={250}
               value={input}
               onChange={handleInput}
            />
            <p id="comment-char-count">{input.length}/250</p>
            <button className="border interactable">Submit</button>
         </form>
         <p id="comment-submit-msg">{msgTimer ? msg : null}</p>
      </>
   );
}

export default CommentForm;
