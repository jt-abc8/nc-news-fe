import { getTopics } from "../api";
import { useDataFetch } from "../custom-hooks";
import { pageDisplay } from "../utils";
import CardDisplay from "./CardDisplay";

function PageTopics() {
   const {
      data: { topics },
      isLoading,
      error,
   } = useDataFetch(getTopics);

   const html = <CardDisplay data={{ topics }} />;

   return (
      <main id="topics-page">
         <h2>Topics</h2>
         {pageDisplay(html, isLoading, error)}
      </main>
   );
}

export default PageTopics;
