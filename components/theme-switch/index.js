import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import clsx from "clsx";

export default function ThemeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const darkMode = currentTheme === "dark";

  const toggleTheme = () => {
    if (darkMode) setTheme("light");
    else setTheme("dark");
  };

  return (
    <Switch
      checked={darkMode}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          e.target.click();
        }
      }}
      onChange={() => setTimeout(() => toggleTheme(), 300)}
      className={clsx(
        "relative inline-flex h-7 w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75 dark:focus-visible:ring-white",
        {
          "bg-gray-900 dark:bg-gray-300/20": darkMode,
          "bg-gray-200": !darkMode,
        }
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={clsx(
          "pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
          {
            "translate-x-[26px]": darkMode,
            "translate-x-0": !darkMode,
          }
        )}
      />
    </Switch>
  );
}
