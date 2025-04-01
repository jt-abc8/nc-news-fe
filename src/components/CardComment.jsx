import { getDate, getTime } from "../utils";

function CardComment({ data: { author, body, created_at, votes } }) {
   const date = getDate(created_at);
   const time = getTime(created_at);
   const {dd, mm, yyyy} = date;
   return (
      <section className="comment-card">
         <div className="card-text">
            <h4>{author}</h4>
            <h5>{dd} {mm} {yyyy} {time}</h5>
            <p>{body}</p>
            <p>{votes} votes</p>
         </div>
      </section>
   );
}

export default CardComment;
