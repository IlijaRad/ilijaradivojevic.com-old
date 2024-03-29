import Link from "next/link";
import { HOME } from "../../constants/routes";
import ThemeSwitch from "../theme-switch";
import DarkThemeIcon from "../../public/assets/icons/DarkThemeIcon";
import LightThemeIcon from "../../public/assets/icons/LightThemeIcon";
import { useState, useEffect } from "react";
import DesktopNavLink from "./DesktopNavLink";
import MobileNavLink from "./MobileNavLink";
import { LINKS } from "../../constants/navLinks";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileMenuLinksVisible, setMobileMenuLinksVisible] = useState(true);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

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

  const toggleTheme = () => {
    if (currentTheme === "dark") setTheme("light");
    else setTheme("dark");
  };

  if (!mounted) return null;

  return (
    <div className="py-9 lg:py-12">
      <nav className="mx-auto flex items-center justify-between">
        <div>
          <h1>
            <Link href={HOME} passHref>
              <a className="underlined cursor-pointer text-2xl font-medium transition focus:outline-none md:text-[26px]">
                Ilija Radivojevic
              </a>
            </Link>
          </h1>
        </div>
        <ul className="hidden lg:flex">
          {LINKS.map(({ to, name }) => (
            <DesktopNavLink key={to} href={to} text={name} />
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
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  e.target.click();
                }
              }}
              type="checkbox"
              className="navigation__checkbox peer pointer-events-none opacity-0"
              id="navi-toggle"
              checked={mobileNavOpen}
              onChange={() => toggleMobileNav()}
            />
            <label
              htmlFor="navi-toggle"
              className="navigation__button border-2 border-gray-200 outline-none transition hover:border-black peer-focus:border-black dark:border-gray-600 dark:hover:border-white dark:peer-focus:border-white"
            >
              <span className="navigation__icon select-none bg-black before:bg-black after:bg-black dark:bg-white dark:before:bg-white dark:after:bg-white">
                &nbsp;
              </span>
            </label>
            <div className="navigation__background select-none bg-white dark:bg-gray-900">
              &nbsp;
            </div>
            <nav className="navigation__nav">
              <div
                className={
                  mobileMenuLinksVisible ? "navigation__list" : "hidden"
                }
              >
                {LINKS.map(({ to, name }) => (
                  <MobileNavLink
                    key={to}
                    href={to}
                    onClick={() => {
                      if (mobileNavOpen) toggleMobileNav();
                    }}
                    text={name}
                  />
                ))}
                <button
                  onClick={() => {
                    if (mobileNavOpen) {
                      toggleTheme();
                      toggleMobileNav();
                    }
                  }}
                  className="navigation__theme-toggler group -ml-[18px] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap hover:text-white focus:text-white dark:hover:text-black dark:focus:text-black"
                >
                  <div className="flex items-center justify-between py-4 px-8 first:stroke-gray-900 first:hover:stroke-white group-focus:first:stroke-white dark:first:stroke-white dark:first:hover:stroke-gray-900 dark:group-focus:first:stroke-black">
                    {currentTheme === "dark" ? (
                      <DarkThemeIcon className="mr-4 transition" />
                    ) : (
                      <LightThemeIcon className="mr-4 transition" />
                    )}
                    {currentTheme === "dark" ? "Light" : "Dark"} mode
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
