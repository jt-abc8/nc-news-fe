import { getDate } from "../utils";
import { Link } from "react-router";

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
         <section className="article-card">
            <div className="card-img">
               <img src={article_img_url} alt="" />
            </div>
            <div className="card-text">
               <h4>{title}</h4>
               <div>
                  <h5>by {author}</h5>
                  <p>
                     {dd} {mm} {yyyy}
                  </p>
               </div>
               <div>
                  <p>#{topic}</p>
                  <p>{comment_count} comments</p>
                  <p>{votes} votes</p>
               </div>
            </div>
         </section>
      </Link>
   );
}

export default CardArticle;
