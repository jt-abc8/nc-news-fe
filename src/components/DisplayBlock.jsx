import { useEffect, useState } from "react";
import CardArticle from "./CardArticle";
import { Link } from "react-router";

function DisplayBlock({ apiRequest }) {
   const [displayData, setDisplayData] = useState([]);
   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(10);
   const [totalPages, setTotalPages] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      setIsError(false);
      apiRequest(page, limit)
         .then((data) => {
            setDisplayData(data);
            setTotalPages(Math.ceil(data.total_count / limit));
         })
         .catch((err) => setIsError(true))
         .finally(() => setIsLoading(false));
   }, [page]);

   const updatePage = (num) => {
      const newPage = page + num;
      setPage(newPage);
   };

   const articleCards = ({ articles }) =>
      articles.map((data) => {
         const { article_id } = data;
         return <CardArticle key={article_id} data={data} />;
      });

      if (isLoading) {
        return <p>Loading...</p>
      }

      if (isError) {
        return <p>Something went wrong...</p>
      }

   return (
      <div className="display-block">
         {displayData.articles ? articleCards(displayData) : null}
         {page > 1 ? (
            <button onClick={() => updatePage(-1)}>Previous page</button>
         ) : null}
         {page < totalPages ? (
            <button onClick={() => updatePage(1)}>Next Page</button>
         ) : null}
      </div>
   );
}

export default DisplayBlock;
