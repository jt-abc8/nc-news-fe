import { articleCards, commentCards, topicCards } from "../utils";
import { useState, useEffect } from "react";

function CardDisplay({ data, setData, page, setPage, limit}) {
   const [totalPages, setTotalPages] = useState(0);
   const [cardArray, setCardArray] = useState([]);

   useEffect(() => {
      setTotalPages(Math.ceil(data.total_count / limit));
      setCardArray(cards());
   }, [data]);

   const updatePage = (num) => {
      const newPage = page + num;
      setPage(newPage);
   };

   const cards = () => {
      if (data.articles) return articleCards(data);
      if (data.comments) return commentCards(data, setData);
      if (data.topics) return topicCards(data);
   };

   const navButton = (text, value, condition) => {
      if (condition) {
         return <button onClick={() => updatePage(value)}>{text}</button>;
      }
   };

return (
      <div className="display-block">
         {cardArray}
         {navButton("Previous page", -1, page > 1)}
         {navButton("Next Page", 1, page < totalPages)}
      </div>
   );
}

export default CardDisplay;
