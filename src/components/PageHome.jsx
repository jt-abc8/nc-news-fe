import { Link } from "react-router";
import { getArticles } from "../api";
import { useDataFetch } from "../custom-hooks";
import { pageDisplay, simulateLogin } from "../utils";
import CardDisplay from "./CardDisplay";
import "../styling/home.css"

function PageHome() {
   const { username } = simulateLogin();
   const recent = useDataFetch(getArticles, 1, 3);
   const liked = useDataFetch(getArticles, 1, 3, null, "votes");

   const articleList = (data) => (
      <CardDisplay
         data={data}
         setData={null}
         page={1}
         setPage={null}
         limit={3}
      />
   );

   return (
      <main id="home-page">
         <h2>Welcome back, {username}!</h2>
         <Link to="/articles" className="border see-all interactable" >See all articles</Link>
         <h3>Most recent:</h3>
         {pageDisplay(articleList(recent.data), recent.isLoading, recent.error)}
         <h3>Most liked:</h3>
         {pageDisplay(articleList(liked.data), liked.isLoading, liked.error)}
      </main>
   );
}

export default PageHome;
