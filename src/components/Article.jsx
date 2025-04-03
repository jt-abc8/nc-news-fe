import { useParams } from "react-router";
import { getArticle } from "../api";
import { getDate, pageDisplay } from "../utils";
import { useDataFetch } from "../custom-hooks";
import Comments from "./Comments";
import VoteCounter from "./VoteCounter";
import { useEffect, useState } from "react";

function Article() {
   const { article_id } = useParams();
   const {
      data: { article },
      isLoading,
      isError,
   } = useDataFetch(getArticle, article_id);

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
               <VoteCounter votes={votes} id={article_id} />

               <br />
               <p>{body}</p>
            </div>
         </section>
         <br />
         <Comments article_id={article_id} comment_count={comment_count} />
      </>
   );

   return pageDisplay(html, isLoading, isError);
}

export default Article;
