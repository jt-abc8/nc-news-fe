import { useEffect, useState } from "react";
import { useDatafetch } from "../custom-hooks";
import { pageDisplay, articleCards, commentCards } from "../utils";

function CardDisplay({ apiRequest }) {
   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(10);
   const [totalPages, setTotalPages] = useState(null);
   const { data, isLoading, isError } = useDatafetch(apiRequest, page, limit);

   useEffect(() => setTotalPages(Math.ceil(data.total_count / limit)), [data]);

   const updatePage = (num) => {
      const newPage = page + num;
      setPage(newPage);
   };

   const cardArray = () => {
      if (data.articles) return articleCards(data);
      if (data.comments) return commentCards(data);
   };

   const navButton = (text, value, condition) => {
      if (condition) {
         return <button onClick={() => updatePage(value)}>{text}</button>;
      }
   };

   const html = (
      <div className="display-block">
         {cardArray()}
         {navButton("Previous page", -1, page > 1)}
         {navButton("Next Page", 1, page < totalPages)}
      </div>
   );

   return pageDisplay(html, isLoading, isError);
}

export default CardDisplay;
