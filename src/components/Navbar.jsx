import { Link } from "react-router";
import { simulateLogin } from "../utils";

function Navbar() {
   const {username} = simulateLogin();
   
   return (
      <nav id="navbar" className="dev-border">
         <Link to="/articles" className="nav-link">
            Articles
         </Link>
         <Link to="/topics" className="nav-link">
            Topics
         </Link>
         <p className="nav-link">{username}</p>
      </nav>
   );
} 

export default Navbar;
