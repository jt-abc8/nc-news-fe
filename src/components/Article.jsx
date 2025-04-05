import { useParams, Link } from "react-router";
import { getArticle } from "../api";
import { getDate, pageDisplay } from "../utils";
import { useDataFetch } from "../custom-hooks";
import Comments from "./Comments";
import VoteCounter from "./VoteCounter";
import "../styling/article.css";

function Article() {
   const { article_id } = useParams();
   const {
      data: { article },
      isLoading,
      error,
   } = useDataFetch(getArticle, article_id);

   const html = () => {
      const { article_img_url, author, body, created_at, title, topic, votes } =
         article;

      const { dd, mm, yyyy } = getDate(created_at);

      return (
         <>
            <section id="article">
               <div id="article-img-container">
                  <img src={article_img_url} alt="" />
               </div>
               <div id="article-content">
                  <Link
                     to={`/articles?topic=${topic}`}
                     className="interactable border"
                     id="topic-link"
                  >
                     #{topic}
                  </Link>
                  <h2>{title}</h2>
                  <h3>by {author} </h3>
                  <p id="article-date">
                     {dd} {mm} {yyyy}
                  </p>
                  <br />
                  <p>{body}</p>
                  <br />
               </div>
            </section>
            <div id="vote-container">
               <VoteCounter votes={votes} id={article_id} />
            </div>
            <Comments article_id={article_id} />
         </>
      );
   };

   return pageDisplay(article ? html() : null, isLoading, error);
}

export default Article;
