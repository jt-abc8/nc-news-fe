import { useState } from "react";
import { patchVotes } from "../api";
import thumbUp from "../assets/thumb-up.svg";
import thumbDown from "../assets/thumb-down.svg";

function VoteCounter({ votes, id }) {
   const [voteCount, setVoteCount] = useState(votes);
   const [error, setError] = useState(false);

   const vote = (value) => {
      const newVotes = voteCount + value;
      setVoteCount(newVotes);
      setError(false);
      patchVotes("articles", id, value).catch((err) => {
         const undoVotes = voteCount;
         setVoteCount(undoVotes);
         setError(true);
      });
   };

   return (
      <div className="vote-counter border">
         <div>
            <p className="vote-display">{voteCount} votes</p>
            <button className="border upvote interactable" onClick={() => vote(1)}>
               <img src={thumbUp} alt="Upvote" />
            </button>
            <button className="border downvote interactable" onClick={() => vote(-1)}>
               <img src={thumbDown} alt="Downvote" />
            </button>
         </div>
         <p className="vote-error">
            {error ? "Something went wrong..." : null}{" "}
         </p>
      </div>
   );
}

export default VoteCounter;
