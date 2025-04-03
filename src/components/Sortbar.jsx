import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { useDataFetch } from "../custom-hooks";
import { pageDisplay } from "../utils";
import { useNavigate, useSearchParams } from "react-router";

function Sortbar() {
   const navigate = useNavigate();
   const [params] = useSearchParams();
   const [topic, setTopic] = useState(params.get("topic") ?? "all");
   const [sort, setSort] = useState(params.get("sort_by") ?? "default");
   const [order, setOrder] = useState(params.get("order") ?? "default");

   const {
      data: { topics },
      isLoading,
      error,
   } = useDataFetch(getTopics);

   useEffect(() => {
      const sortQuery = sort !== "default" ? `sort_by=${sort}` : "";
      const orderQuery = order !== "default" ? `&order=${order}` : "";
      const topicQuery = topic !== "all" ? `&topic=${topic}` : "";
      navigate(`/articles?${sortQuery}${orderQuery}${topicQuery}`);
   }, [topic, sort, order]);

   const topicFilter = () => {
      const options = topics.map(({ slug }) => {
         return (
            <option key={slug} value={slug}>
               #{slug}
            </option>
         );
      });

      return (
         <div className="sort-category">
            <label htmlFor="topic-select">Topic</label>
            <select
               name="topic-select"
               id="topic-select"
               value={topic}
               onChange={(event) => handleFilter(event, setTopic)}
            >
               <option value={"all"}>--All articles--</option>
               {options}
            </select>
         </div>
      );
   };

   const handleFilter = (event, setState) => {
      setState(event.target.value);
   };

   const sortBy = (
      <div className="sort-category">
         <label htmlFor="sort-by">Sort by</label>
         <select
            name="sort-by"
            id="sort-by"
            value={sort}
            onChange={(event) => handleFilter(event, setSort)}
         >
            <option value="default">--Default--</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
         </select>
      </div>
   );

   const ascLabel = {
      default: "oldest first",
      created_at: "oldest first",
      comment_count: "least to most",
      votes: "least to most",
   };

   const descLabel = {
      default: "newest first",
      created_at: "newest first",
      comment_count: "most to least",
      votes: "most to least",
   };

   const orderBy = (
      <div className="sort-category">
         <label htmlFor="order-by">Order</label>
         <select
            name="order-by"
            id="order-by"
            value={order}
            onChange={(event) => handleFilter(event, setOrder)}
         >
            <option value="default">--Default--</option>
            <option value="desc">{descLabel[sort]}</option>
            <option value="asc">{ascLabel[sort]}</option>
         </select>
      </div>
   );

   const html = () => (
      <section id="sort-bar">
         {topicFilter()}
         {sortBy}
         {orderBy}
      </section>
   );

   return pageDisplay(topics ? html() : null, isLoading, error);
}

export default Sortbar;
