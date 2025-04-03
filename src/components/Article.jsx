import { useParams } from "react-router";
import { getArticle } from "../api";
import { getDate, pageDisplay } from "../utils";
import { useDataFetch } from "../custom-hooks";
import Comments from "./Comments";
import VoteCounter from "./VoteCounter";

function Article() {
   const { article_id } = useParams();
   const {
      data: { article },
      isLoading,
      error,
   } = useDataFetch(getArticle, article_id);

   const html = () =>{
      const {
         article_img_url,
         author,
         body,
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
                  <VoteCounter votes={votes} id={article_id} />
   
                  <br />
                  <p>{body}</p>
               </div>
            </section>
            <br />
            <Comments article_id={article_id} />
         </>
      );
   } 

   return pageDisplay(article ? html() : null, isLoading, error);
}

export default Article;
