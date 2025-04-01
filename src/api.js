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

export const getArticleById = (article_id) => {
   return api.get(`/articles/${article_id}`).then(({ data }) => data);
};

export const getCommentsByArticleId = (article_id) => {
   return api.get(`/articles/${article_id}/comments`).then(({ data }) => data);
};
