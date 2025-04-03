import { Link } from "react-router";

function PageError({status}) {
   const lookup = {
      400: {
         title: "400 Bad Request",
         msg: "There was an issue with your request. Please try again."
      },
      404: {
         title: "404 Not Found",
         msg: "The page you're looking for doesn't exist."
      }
   }

   return (
      <main id="page-error">
            <h1>{lookup[status].title}</h1>
            <h2>{lookup[status].msg}</h2>
            <Link to="/">Take me home!</Link>
      </main>
   );
}

export default PageError;
