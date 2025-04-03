import { useState } from "react";
import { patchVotes } from "../api";

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
      <>
         <div className="vote-counter">
            <p>{voteCount} votes</p>
            <button onClick={() => vote(1)}>👍</button>
            <button onClick={() => vote(-1)}>👎</button>
            <p>{error ? "Something went wrong..." : null}</p>
         </div>
      </>
   );
}

export default VoteCounter;
