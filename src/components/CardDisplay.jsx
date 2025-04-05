import { articleCards, commentCards, topicCards } from "../utils";
import { useState, useEffect } from "react";

function CardDisplay({ data, setData, page, setPage, limit }) {
   const [totalPages, setTotalPages] = useState(0);
   const [cardArray, setCardArray] = useState([]);

   useEffect(() => {
      if (setPage) setTotalPages(Math.ceil(data.total_count / limit));
      if (data) setCardArray(cards());
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

   const paginate = setPage ? true : false;
   const navButton = (text, value, condition) => {
      if (condition & paginate) {
         return (
            <button className="border interactable" onClick={() => updatePage(value)}>
               {text}
            </button>
         );
      }
   };

   return (
      <div className="display-block">
         <div className="nav-buttons">
            {navButton("Next Page", 1, page < totalPages)}
            {navButton("Previous page", -1, page > 1)}
         </div>
         {cardArray}
         <div className="nav-buttons">
            {navButton("Next Page", 1, page < totalPages)}
            {navButton("Previous page", -1, page > 1)}
         </div>
      </div>
   );
}

export default CardDisplay;
