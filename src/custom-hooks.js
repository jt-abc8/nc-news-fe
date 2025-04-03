import { useState, useEffect } from "react";

export const useDataFetch = (apiRequest, ...args) => {
   const [data, setData] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      setIsLoading(true);
      setError(null);
      apiRequest(...args)
         .then((data) => setData(data))
         .catch((err) => setError(err))
         .finally(() => setIsLoading(false));
   }, [...args]);

   return {data, setData, isLoading, error};
};
