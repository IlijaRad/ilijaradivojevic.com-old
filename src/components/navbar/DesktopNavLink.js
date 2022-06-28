import clsx from "clsx";
import { NavLink } from "react-router-dom";

const DesktopNavLink = ({ to, ...rest }) => (
  <li className="px-5 py-2">
    <NavLink
      className={({ isActive }) => {
        return clsx(
          "underlined block whitespace-nowrap text-lg font-medium hover:text-black focus:text-black focus:outline-none dark:hover:text-white dark:focus:text-white dark:active:text-white",
          {
            active: isActive,
            "text-gray-500 dark:text-gray-dark": !isActive,
          }
        );
      }}
      to={to}
      {...rest}
    />
  </li>
);

export default DesktopNavLink;
