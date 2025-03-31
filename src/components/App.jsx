import { Routes, Route } from "react-router";
import Header from "./Header";
import PageHome from "./PageHome";
import PageArticles from "./PageArticles";
import PageTopics from "./PageTopics";

function App() {
   return (
      <>
         <Header />

         <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/articles" element={<PageArticles />} />
            <Route path="/topics" element={<PageTopics />} />
         </Routes>
      </>
   );
}

export default App;
