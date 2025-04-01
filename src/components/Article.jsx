import { useParams } from "react-router";
import { getArticleById } from "../api";
import { getDate, pageDisplay } from "../utils";
import { useDatafetch } from "../custom-hooks";
import Comments from "./Comments";

function Article() {
   const { article_id } = useParams();
   const {
      data: { article },
      isLoading,
      isError,
   } = useDatafetch(getArticleById, article_id);

   const html = () => {
      if (!article) return;

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

      return (
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
               <p>{votes} votes</p>
               <br/>
               <p>{body}</p>
            </div>
         </section>
         <br/>
         <Comments article_id={article_id} />
        </>
      );
   };

   return pageDisplay(html(), isLoading, isError);
}

export default Article;
