import { Link } from "react-router-dom";
import "../App.css";
function Navbar() {
  return (
    <nav className="flex justify-between bg-blue-400 font-semibold">
      <div className="flex justify-end m-5 text-2xl font-stretch-100% hover:text-green-300">
        <Link to="/">Welcome</Link>
      </div>

      <div className="flex justify-bewteen">
        <Link className="m-5" to="/">
          Home
        </Link>
        <Link className="m-5" to="/projects">
          Online Tutorials
        </Link>
        <Link className="m-5" to="/about">
          About
        </Link>
        <Link className="m-5" to="/contact">
          Contact
        </Link>
        <Link className="m-5" to="/notes">
          Notes
        </Link>
        <Link className="m-5" to="/secret">
          Secret
        </Link>
        <Link className="m-5" to="/login">
          Log in
        </Link>{" "}
        <Link className="m-5" to="/logout">
          Log out
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
