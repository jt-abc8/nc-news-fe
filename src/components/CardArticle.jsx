import { getDate } from "../utils";
import { Link } from "react-router";
import "../styling/card.css";

function CardArticle({ data }) {
   const {
      article_id,
      article_img_url,
      author,
      comment_count,
      created_at,
      title,
      topic,
      votes,
   } = data;
   const { dd, mm, yyyy } = getDate(created_at);

   return (
      <Link to={`/articles/${article_id}`}>
         <section
            className="article-card interactable"
            style={{ backgroundImage: `url(${article_img_url})` }}
         >
            <h4 className="card-title">{title}</h4>
            <div className="card-data">
               <h5>by {author}</h5>
               <p>
                  {dd} {mm} {yyyy}
               </p>
               <p>{comment_count} comments</p>
               <p>{votes} votes</p>
            </div>
            <div className="card-tag">
               <p className="border">
                  #{topic}
               </p>
            </div>
         </section>
      </Link>
   );
}

export default CardArticle;
