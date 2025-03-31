import { Link } from "react-router";
import Navbar from "./Navbar";

function Header() {
   return (
      <header id="header" className="dev-border">
         <h1>
            <Link to="/">NC News</Link>
         </h1>
         
         <Navbar />
      </header>
   );
}

export default Header;
