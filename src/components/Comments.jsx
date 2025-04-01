import { getCommentsByArticleId } from "../api";
import CardDisplay from "./CardDisplay";

function Comments({article_id}) {
   return (
      <section id="comment-section">
         <div>user comment form</div>
         <CardDisplay apiRequest={getCommentsByArticleId}/>
      </section>
   );
}

export default Comments;
