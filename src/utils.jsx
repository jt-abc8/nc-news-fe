import CardArticle from "./components/CardArticle";

export const getDate = (created_at) => {
   const date = new Date(created_at);
   const monthLookup = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec",
   };
   return {
      dd: date.getDate(),
      mm: monthLookup[date.getMonth()],
      yyyy: date.getFullYear(),
   };
};

export const pageDisplay = (html, isLoading, isError) => {
   if (isLoading) return <p>Loading...</p>;
   if (isError) return <p>Something went wrong...</p>;
   return html;
};

export const returnArticleCards = ({ articles }) => {
   return articles.map((data) => {
      const { article_id } = data;
      return <CardArticle key={article_id} data={data} />;
   });
};
