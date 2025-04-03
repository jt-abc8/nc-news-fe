import { getTopics } from "../api";
import { useDataFetch } from "../custom-hooks";
import { pageDisplay } from "../utils";
import CardDisplay from "./CardDisplay";

function PageTopics() {
    const {data : {topics}, isLoading, error} = useDataFetch(getTopics);

    const html = (
        <main id="topics-page">
            <h2>Topics</h2>
            <CardDisplay data={{topics}}/>
        </main>
    )

    return pageDisplay(html, isLoading, error);
}

export default PageTopics;