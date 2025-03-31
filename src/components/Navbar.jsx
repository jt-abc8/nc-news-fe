import { Link } from "react-router";

function Navbar() {
   return (
      <nav id="navbar" className="dev-border">
         <Link to="/articles" className="nav-link">Articles</Link>
         <Link to="/topics" className="nav-link">Topics</Link>
         <p className="nav-link">User</p>
      </nav>
   );
}

export default Navbar;
