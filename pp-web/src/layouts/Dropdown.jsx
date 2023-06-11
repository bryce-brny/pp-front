import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import { RightFromBracketIcon } from "../icons";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropdownEl = useRef(); //{current:10}

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
        <Avatar src="https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=1920&q=75" />
      </div>
      {open && (
        <div className="absolute right-0 translate-y-1 bg-white border rounded-xl shadow-lg w-96 p-2">
          <Link to="/profile">
            <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg">
              <Avatar
                src="https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=1920&q=75"
                className="rounded-full h-[3.75rem] w-[3.75rem]"
              />

              <div>
                <div className="font-semibold">Green Fai</div>
                <div className="text-gray-500 text-sm">See your Profile</div>
              </div>
            </div>
          </Link>
          <hr className="border border-gray-300 m-2" />
          <div className="flex gap-4 items-center p-2 hover:bg-gray-100 rounded-lg">
            <div className="rounded-full bg-gray-300 h-9 w-9 flex justify-center items-center">
              <RightFromBracketIcon />
            </div>
            <span className="text-sm font-semibold">Log Out</span>
          </div>
        </div>
      )}
      {/* dropdown menu */}
    </div>
  );
}
