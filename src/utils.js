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
   const mm = monthLookup[date.getMonth()];
   return { dd: date.getDate(), mm, yyyy: date.getFullYear() };
};
