import { useState } from "react";
import { getArticles } from "../api";
import CardDisplay from "./CardDisplay";
import Sortbar from "./Sortbar";
import { useDataFetch } from "../custom-hooks";
import { pageDisplay } from "../utils";

function PageArticles() {
   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(10);
   const { data, setData, isLoading, isError } = useDataFetch(
      getArticles,
      page,
      limit
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
         <h2>Articles</h2>
         <Sortbar />
         {pageDisplay(articleList, isLoading, isError)}
      </main>
   );
}

export default PageArticles;
