import { useState, useEffect } from "react";

export const useDataFetch = (apiRequest, ...args) => {
   const [data, setData] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      setIsError(false);
      apiRequest(...args)
         .then((data) => setData(data))
         .catch(() => setIsError(true))
         .finally(() => setIsLoading(false));
   }, [...args]);

   return {data, setData, isLoading, isError};
};
