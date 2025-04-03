import { useState } from "react";
import { getArticles } from "../api";
import CardDisplay from "./CardDisplay";
import Sortbar from "./Sortbar";
import { useDataFetch } from "../custom-hooks";
import { pageDisplay } from "../utils";
import { useParams, useSearchParams } from "react-router";

function PageArticles() {
   const [params] = useSearchParams();
   const topic = params.get("topic");
   const sort = params.get("sort_by");
   const order = params.get("order")

   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(10);
   const { data, setData, isLoading, error } = useDataFetch(
      getArticles,
      page,
      limit,
      topic,
      sort,
      order
   );

   const articleList = (
      <CardDisplay
         data={data}
         setData={setData}
         page={page}
         setPage={setPage}
         limit={limit}
      />
   );

   return (
      <main id="articles-page">
         <h2>Articles{topic ? ` - #${topic}` : null}</h2>
         <Sortbar />
         {pageDisplay(articleList, isLoading, error)}
      </main>
   );
}

export default PageArticles;
