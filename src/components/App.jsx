import { Routes, Route } from "react-router";
import Header from "./Header";
import PageHome from "./PageHome";
import PageArticle from "./PageArticle";
import PageArticles from "./PageArticles";
import PageTopics from "./PageTopics";
import PageError from "./PageError";

function App() {
   return (
      <>
         <Header />

         <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/articles" element={<PageArticles />} />
            <Route path="/articles/:article_id" element={<PageArticle/>}/>
            <Route path="/topics" element={<PageTopics />} />
            
            <Route path="/*" element={<PageError status={404}/>}/>
         </Routes>
      </>
   );
}

export default App;
