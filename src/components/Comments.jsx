import { getComments } from "../api";
import CardDisplay from "./CardDisplay";
import CommentForm from "./CommentForm";
import { useState } from "react";
import { useDataFetch } from "../custom-hooks";
import { pageDisplay } from "../utils";

function Comments({ article_id }) {
   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(10);
   const { data, setData, isLoading, error } = useDataFetch(
      getComments,
      article_id
   );

   const commentDisplay = (
      <CardDisplay
         data={data}
         setData={setData}
         page={page}
         setPage={setPage}
         limit={limit}
      />
   );

   return (
      <section id="comment-section">
         <CommentForm setData={setData} article_id={article_id} />
         <h3>{data.comments ? data.comments.length : 0} comments</h3>
         {pageDisplay(commentDisplay, isLoading, error)}
      </section>
   );
}

export default Comments;
