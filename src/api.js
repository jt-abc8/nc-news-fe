import axios from "axios";

const api = axios.create({
   baseURL: "https://nc-news-i5we.onrender.com/api",
});

export const getArticles = (p, limit) => {
   return api
      .get("/articles", {
         params: {
            p,
            limit,
         },
      })
      .then(({ data }) => data);
};
