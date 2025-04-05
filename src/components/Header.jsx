import { Link } from "react-router";
import "../styling/header.css";
import { simulateLogin } from "../utils";

function Header() {
   const { username, avatar } = simulateLogin();
   return (
      <header id="header">
         <div className="user-display">
            <div>
               <img src={avatar} className="border" alt="User avatar" />
            </div>
            <p>{username}</p>
         </div>

         <h1 id="site-heading" className="interactable">
            <Link id="home-link" to="/">
               NC News
            </Link>
         </h1>

         <nav id="navbar">
            <Link to="/articles" className="border interactable">
               Articles
            </Link>
            <Link to="/topics" className="border interactable">
               Topics
            </Link>
         </nav>
      </header>
   );
}

export default Header;
