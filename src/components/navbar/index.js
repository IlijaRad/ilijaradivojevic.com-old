import { Link, NavLink } from "react-router-dom";
import { HOME, PROJECTS, CONTACT } from "../../constants/routes";
import clsx from "clsx";
import ThemeSwitch from "../theme-switch";
import DarkThemeIcon from "../../assets/icons/DarkThemeIcon";
import LightThemeIcon from "../../assets/icons/LightThemeIcon";
import { useContext, useState, useEffect } from "react";
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
          "underlined block whitespace-nowrap text-lg font-medium hover:text-black focus:text-black focus:outline-none active:text-black dark:hover:text-white dark:focus:text-white dark:active:text-white",
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
      className="navigation__link min-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap hover:text-white dark:hover:text-black"
      to={to}
      {...rest}
    />
  </li>
);

const Navbar = () => {
  const { switched, setSwitched } = useContext(ThemeContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileMenuLinksVisible, setMobileMenuLinksVisible] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const code = e.keyCode ? e.keyCode : e.which;
      // ESC key
      if (code === 27 && mobileNavOpen) {
        setMobileNavOpen(false);
      }
    };
    let id;
    if (!mobileNavOpen) {
      id = setTimeout(() => setMobileMenuLinksVisible(false), 800);
    } else {
      setMobileMenuLinksVisible(true);
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (id) clearTimeout(id);
    };
  }, [mobileNavOpen]);

  const toggleMobileNav = () => {
    setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
  };

  const toggleSwitched = () => {
    setSwitched((switched) => !switched);
  };

  return (
    <div className="px-6 py-9 md:px-[5vw] lg:py-12">
      <nav className="mx-auto flex items-center justify-between text-black">
        <div>
          <Link
            className="underlined block whitespace-nowrap text-2xl font-medium text-black transition focus:outline-none dark:text-white"
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
        <div className="hidden items-center justify-center gap-x-1.5 lg:flex">
          <LightThemeIcon className="stroke-gray-900 dark:stroke-white" />
          <ThemeSwitch />
          <DarkThemeIcon className="stroke-gray-900 dark:stroke-white" />
        </div>
        <div className="lg:hidden">
          <div className="navigation">
            <input
              type="checkbox"
              className="navigation__checkbox peer"
              id="navi-toggle"
              checked={mobileNavOpen}
              onChange={() => toggleMobileNav()}
            />
            <label
              htmlFor="navi-toggle"
              className="navigation__button border-2 border-gray-200 text-black outline-none transition hover:border-black peer-focus:border-black dark:border-gray-600 dark:text-white dark:hover:border-white dark:peer-focus:border-white"
            >
              <span className="navigation__icon bg-black before:bg-black after:bg-black dark:bg-white dark:before:bg-white dark:after:bg-white">
                &nbsp;
              </span>
            </label>
            <div className={"navigation__background bg-white dark:bg-gray-900"}>
              &nbsp;
            </div>
            <nav className="navigation__nav">
              <ul
                className={
                  mobileMenuLinksVisible
                    ? "navigation__list text-black dark:text-white"
                    : "hidden"
                }
              >
                {LINKS.map((link, ix) => (
                  <MobileNavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => {
                      if (mobileNavOpen) toggleMobileNav();
                    }}
                  >
                    {link.name}
                  </MobileNavLink>
                ))}
                <div
                  onClick={() => {
                    if (mobileNavOpen) {
                      toggleSwitched();
                      toggleMobileNav();
                    }
                  }}
                  className="navigation__theme-toggler -ml-[18px] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap hover:text-white dark:hover:text-black"
                >
                  <div className="flex items-center justify-between py-4 px-8 first:stroke-gray-900 first:hover:stroke-white dark:first:stroke-white dark:first:hover:stroke-gray-900">
                    {switched ? (
                      <DarkThemeIcon className="mr-4" />
                    ) : (
                      <LightThemeIcon className="mr-4" />
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
