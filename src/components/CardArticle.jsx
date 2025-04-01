import { getDate } from "../utils";

function CardArticle({ data }) {
   const {
      article_img_url,
      author,
      comment_count,
      created_at,
      title,
      topic,
      votes,
   } = data;
   const { day, dd, mm, yyyy } = getDate(created_at);
   return (
      <section className="article-card">
         <div className="card-img">
            <img src={article_img_url} alt="" />
         </div>
         <div className="card-text">
            <h4>{title}</h4>
            <h5>by {author}</h5>
            <div>
               <p>
                  {dd} {mm} {yyyy}
               </p>
               <p>#{topic}</p>
               <p>{votes} votes</p>
            </div>
         </div>
      </section>
   );
}

export default CardArticle;
