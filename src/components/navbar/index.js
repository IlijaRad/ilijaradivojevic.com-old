import { Link, NavLink } from "react-router-dom";
import { HOME, PROJECTS, CONTACT } from "../../constants/routes";
import clsx from "clsx";
import ThemeSwitch from "../theme-switch";
import DarkThemeIcon from "../../assets/icons/DarkThemeIcon";
import LightThemeIcon from "../../assets/icons/LightThemeIcon";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const LINKS = [
  { name: "About", to: HOME },
  { name: "Projects", to: PROJECTS },
  { name: "Contact", to: CONTACT },
];

const DesktopNavLink = ({ to, ...rest }) => (
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

const MobileNavLink = ({ to, ...rest }) => (
  <li className="navigation__item">
    <Link
      className="navigation__link hover:text-white dark:hover:text-black whitespace-nowrap text-ellipsis overflow-hidden"
      to={to}
      {...rest}
    />
  </li>
);

const Navbar = () => {
  const { switched, setSwitched } = useContext(ThemeContext);
  const [mobileNavClosed, setMobileNavClosed] = useState(true);

  const toggleMobileNav = () => {
    setMobileNavClosed((mobileNavClosed) => !mobileNavClosed);
  };

  const toggleSwitched = () => {
    setSwitched((switched) => !switched);
  };

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
            <DesktopNavLink key={link.to} to={link.to}>
              {link.name}
            </DesktopNavLink>
          ))}
        </ul>
        <div className="hidden lg:flex gap-x-1.5 items-center justify-center">
          <LightThemeIcon className="dark:stroke-white stroke-gray-900" />
          <ThemeSwitch />
          <DarkThemeIcon className="dark:stroke-white stroke-gray-900" />
        </div>
        <div className="lg:hidden">
          <div className="navigation">
            <input
              type="checkbox"
              className="navigation__checkbox"
              id="navi-toggle"
              checked={mobileNavClosed}
              onChange={() =>
                setMobileNavClosed((mobileNavClosed) => !mobileNavClosed)
              }
            />

            <label
              htmlFor="navi-toggle"
              className="navigation__button focus-visible:border-black dark:focus-visible: hover:border-black dark:hover:border-white border-gray-200 dark:border-gray-600 text-black focus:outline-none border-2 transition dark:text-white"
            >
              <span className="navigation__icon bg-black after:bg-black before:bg-black dark:bg-white dark:after:bg-white dark:before:bg-white">
                &nbsp;
              </span>
            </label>

            <div className="navigation__background dark:bg-gray-900 bg-white">
              &nbsp;
            </div>

            <nav className="navigation__nav">
              <ul className="navigation__list text-black dark:text-white">
                {LINKS.map((link, ix) => (
                  <MobileNavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => toggleMobileNav()}
                  >
                    <span>{`0${ix + 1}`}</span>
                    {link.name}
                  </MobileNavLink>
                ))}
                <div
                  onClick={() => toggleSwitched()}
                  className="navigation__link hover:text-white dark:hover:text-black whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer"
                >
                  <div className="flex items-center self-center first:stroke-gray-900 dark:first:stroke-white first:hover:stroke-white dark:first:hover:stroke-gray-900 px-2">
                    {switched ? (
                      <DarkThemeIcon className="mr-6" />
                    ) : (
                      <LightThemeIcon className="mr-6" />
                    )}
                    {switched ? "Dark" : "Light"} mode
                  </div>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
