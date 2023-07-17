import { FacebookIcon } from "../icons";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";

export default function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  // console.log(user);
  return (
    <header className="grid grid-cols-3 px-4 bg-white shadow-lg sticky top-0 z-10">
      <div className="py-2 justify-self-start">
        <div className="navbar-start w-24">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-lightbluecute  hover:bg-gray-200"
          >
            Home
          </Link>
        </div>
      </div>

      <div>
        {user?.isAdmin ? (
          <div className="navbar-start w-24">
            <Link
              to="/admin"
              className="btn btn-ghost normal-case text-xl text-lightbluecute  hover:bg-gray-200"
            >
              Admin Mode
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>

      {isAuthenticated ? (
        <div className="justify-self-end self-center">
          <Dropdown />
        </div>
      ) : (
        <div className="justify-self-end self-center">
          <Link to="/login">
            <button className="btn ">Log in</button>
          </Link>
        </div>
      )}
    </header>
  );
}
