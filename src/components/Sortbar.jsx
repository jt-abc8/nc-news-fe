import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { useDataFetch } from "../custom-hooks";
import { pageDisplay } from "../utils";
import { Link, useNavigate, useSearchParams } from "react-router";

function Sortbar() {
   const navigate = useNavigate();
   const [params] = useSearchParams();
   const [topic, setTopic] = useState(params.get("topic") ?? "all");

   const {
      data: { topics },
      isLoading,
      isError,
   } = useDataFetch(getTopics);

   if (!topics) return pageDisplay(null, isLoading, isError);

   const dropdownOptions = topics.map(({ slug }) => {
      return (
         <option key={slug} value={slug}>
            #{slug}
         </option>
      );
   });

   const handleTopicSearch = (event) => {
      const topic = event.target.value;
      const query = topic !== "all" ? `?topic=${topic}` : "";
      navigate(`/articles${query}`);
      setTopic(topic);
   };

   return (
      <>
         <h3>Sortbar</h3>
         <label htmlFor="topic-select">Choose a topic:</label>
         <select
            name="topic-select"
            id="topic-select"
            value={topic}
            onChange={handleTopicSearch}
         >
            <option value={"all"}>--All articles--</option>
            {dropdownOptions}
         </select>
      </>
   );
}

export default Sortbar;
