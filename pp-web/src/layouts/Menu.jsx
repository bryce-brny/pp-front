import { HouseIcon, UserGroupIcon } from "../icons";
import MenuItem from "./MenuItem";
import { useLocation } from "react-router-dom";

const menus = [
  { id: 1, Icon: HouseIcon, to: "/cart" },
  { id: 2, Icon: UserGroupIcon, to: "/product" },
];

export default function Menu() {
  const location = useLocation();
  return (
    <nav className="flex justify-center items-center gap-2">
      {menus.map((el) => (
        <MenuItem
          Icon={el.Icon}
          to={el.to}
          key={el.id}
          active={location.pathname === el.to}
        />
      ))}
    </nav>
  );
}
