import { Link } from "react-router";
import "../styling/error.css";
import "../styling/index.css";

function PageError({ status }) {
   const lookup = {
      400: {
         title: "400 Bad Request",
         msg: "There was an issue with your request. Please try again.",
      },
      404: {
         title: "404 Not Found",
         msg: "The page you're looking for doesn't exist.",
      },
   };

   return (
      <main id="page-error">
         <div>
            <h1>{lookup[status].title}</h1>
            <h2>{lookup[status].msg}</h2>
            <div className="interactable">
               <Link to="/" className="border">
                  Take me home!
               </Link>
            </div>
         </div>
      </main>
   );
}

export default PageError;
