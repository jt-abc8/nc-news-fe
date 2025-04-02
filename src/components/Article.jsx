import { useParams } from "react-router";
import { getArticleById } from "../api";
import { getDate, pageDisplay } from "../utils";
import { useDatafetch } from "../custom-hooks";
import Comments from "./Comments";
import VoteCounter from "./VoteCounter";

function Article() {
   const { article_id } = useParams();
   const {
      data: { article },
      isLoading,
      isError,
   } = useDatafetch(getArticleById, article_id);
   if (!article) return pageDisplay(null, isLoading, isError);

   const {
      article_img_url,
      author,
      body,
      comment_count,
      created_at,
      title,
      topic,
      votes,
   } = article;

   const { dd, mm, yyyy } = getDate(created_at);

   const html = (
      <>
         <section id="article">
            <img src={article_img_url} alt="" />
            <div>
               <p>#{topic}</p>
               <h2>{title}</h2>
               <h3>by {author}</h3>
               <p>
                  {dd} {mm} {yyyy}
               </p>
               <p>{comment_count} comments</p>
               <VoteCounter votes={votes} id={article_id} />

               <br />
               <p>{body}</p>
            </div>
         </section>
         <br />
         <Comments article_id={article_id} />
      </>
   );

   return pageDisplay(html, isLoading, isError);
}

export default Article;
