import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Abdurashid's blog</h1>
      <div className="links">
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/create" className="newBlog">
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
