import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

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
      onChange={() => setTimeout(() => toggleTheme(), 300)}
      className={`${
        darkMode ? "bg-gray-900 dark:bg-gray-300/20" : "bg-gray-200"
      }
          relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${darkMode ? "translate-x-[26px]" : "translate-x-0"}
            pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
}
