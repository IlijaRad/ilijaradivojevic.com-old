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
    <div className="px-6 md:px-[5vw] py-9 lg:py-12">
      <nav className="text-black mx-auto flex max-w-[96rem] items-center justify-between">
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
              className="peer navigation__checkbox"
              id="navi-toggle"
              checked={mobileNavOpen}
              onChange={() => toggleMobileNav()}
            />
            <label
              htmlFor="navi-toggle"
              className="navigation__button text-black dark:text-white border-2 border-gray-200 outline-none dark:border-gray-600 hover:border-black dark:hover:border-white peer-focus:border-black dark:peer-focus:border-white transition"
            >
              <span className="navigation__icon bg-black after:bg-black before:bg-black dark:bg-white dark:after:bg-white dark:before:bg-white">
                &nbsp;
              </span>
            </label>
            <div className={"navigation__background dark:bg-gray-900 bg-white"}>
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
                    onClick={() => toggleMobileNav()}
                  >
                    <span>{`0${ix + 1}`}</span>
                    {link.name}
                  </MobileNavLink>
                ))}
                <div
                  onClick={() => {
                    toggleSwitched();
                    toggleMobileNav();
                  }}
                  className="navigation__theme-toggler hover:text-white dark:hover:text-black whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer"
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
