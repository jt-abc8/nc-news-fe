import CardArticle from "./components/CardArticle";
import CardComment from "./components/CardComment";
import { UserContext } from "./contexts/User";
import { useContext } from "react";

export const simulateLogin = () => {
   const user = useContext(UserContext);
   return { username: user[0], name: user[1], avatar: user[2] };
};

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

export const getTime = (created_at) => {
   const date = new Date(created_at);
   let hh = date.getHours();
   let mm = date.getMinutes();
   if (hh < 10) hh = `0${hh}`;
   if (mm < 10) mm = `0${mm}`;
   return `${hh}:${mm}`;
};

export const pageDisplay = (html, isLoading, isError) => {
   if (isLoading) return <p>Loading...</p>;
   if (isError) return <p>Something went wrong...</p>;
   return html;
};

export const articleCards = ({ articles }) => {
   return articles.map((data) => {
      const { article_id } = data;
      return <CardArticle key={article_id} data={data} />;
   });
};

export const commentCards = ({ comments }) => {
   return comments.map((data) => {
      const { comment_id } = data;
      return <CardComment key={comment_id} data={data} />;
   });
};
