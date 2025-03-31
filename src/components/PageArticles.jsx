import DisplayBlock from "./DisplayBlock";
import Sortbar from "./Sortbar";

function PageArticles() {
    return (
        <main id="articles">
            <h2>Articles</h2>
            <Sortbar/>
            <DisplayBlock/>
        </main>
    )
}

export default PageArticles;