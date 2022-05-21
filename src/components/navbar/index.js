import { Link, NavLink } from "react-router-dom";
import { HOME, PROJECTS, CONTACT } from "../../constants/routes";
import clsx from "clsx";
import ThemeSwitch from "../theme-switch";
import DarkThemeIcon from "../../assets/icons/DarkThemeIcon";
import LightThemeIcon from "../../assets/icons/LightThemeIcon";

const LINKS = [
  { name: "About", to: HOME },
  { name: "Projects", to: PROJECTS },
  { name: "Contact", to: CONTACT },
];

const NavItem = ({ to, ...rest }) => {
  return (
    <li className="px-5 py-2">
      <NavLink
        className={({ isActive }) => {
          return clsx(
            "underlined focus:outline-none block whitespace-nowrap text-lg font-medium hover:text-black dark:hover:text-white dark:focus:text-white focus:text-black active:text-black dark:active:text-white",
            {
              "active text-black dark:text-white": isActive,
              "text-gray-500 dark:text-gray-dark": !isActive,
            }
          );
        }}
        to={to}
        {...rest}
      />
    </li>
  );
};

const Navbar = () => {
  return (
    <div className="py-9 lg:py-12">
      <nav className="text-black mx-auto flex max-w-8xl items-center justify-between">
        <div>
          <Link
            className="text-black dark:text-white underlined focus:outline-none block whitespace-nowrap text-2xl font-medium transition"
            to={HOME}
          >
            <h1 className="text-[26px]">Ilija Radivojevic</h1>
          </Link>
        </div>
        <ul className="hidden lg:flex">
          {LINKS.map((link) => (
            <NavItem key={link.to} to={link.to}>
              {link.name}
            </NavItem>
          ))}
        </ul>
        <div className="flex gap-x-1.5 items-center justify-center">
          <LightThemeIcon className="dark:stroke-white stroke-gray-900" />
          <ThemeSwitch />
          <DarkThemeIcon className="dark:stroke-white stroke-gray-900" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
