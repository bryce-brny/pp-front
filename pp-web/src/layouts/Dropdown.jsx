import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import { RightFromBracketIcon } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/slice/auth-slice";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropdownEl = useRef(); //{current:10}

  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownEl.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownEl}>
      <div role="button" onClick={() => setOpen(!open)}>
        <Avatar src={user?.profileImage} />
      </div>
      {open && (
        <div className="absolute right-0 translate-y-1 bg-white border rounded-xl shadow-lg w-96 p-2">
          <Link to="/order" onClick={() => setOpen(false)}>
            <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg">
              <Avatar
                src={user.profileImage}
                className="rounded-full h-[3.75rem] w-[3.75rem]"
              />
              <div>
                <div className="font-semibold">
                  {user.firstName} {user.lastName}
                </div>
                <div className="text-gray-500 text-sm">See your Profile</div>
              </div>
            </div>
          </Link>
          <hr className="border border-gray-300 m-2" />
          <Link to="/">
            <div
              className="flex gap-4 items-center p-2 hover:bg-gray-100 rounded-lg"
              role="button"
              onClick={() => dispatch(logout())}
            >
              <div className="rounded-full bg-gray-300 h-9 w-9 flex justify-center items-center">
                <RightFromBracketIcon />
              </div>
              <span className="text-sm font-semibold">Log Out</span>
            </div>
          </Link>
        </div>
      )}
      {/* dropdown menu */}
    </div>
  );
}
