import { Link } from "react-router-dom";

export default function MenuItem({ Icon, to, active }) {
  return (
    <Link to={to}>
      <div
        className={`px-10 py-2 rounded-lg${
          active ? "" : " hover:bg-gray-100"
        } `}
      >
        <Icon className={active ? "fill-blue-500" : "fill-gray-500"} />
        {/* fill ใช้กับ svg */}
      </div>
    </Link>
  );
}
