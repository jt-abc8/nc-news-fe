import { getArticles } from "../api";
import CardDisplay from "./CardDisplay";
import Sortbar from "./Sortbar";

function PageArticles() {
    return (
        <main id="articles-page">
            <h2>Articles</h2>
            <Sortbar/>
            <CardDisplay apiRequest={getArticles}/>
        </main>
    )
}

export default PageArticles;