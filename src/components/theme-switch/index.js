import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

export default function ThemeSwitch() {
  const [switched, setSwitched] = useState(() => {
    if (localStorage.getItem("theme") === "light") {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (switched) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [switched]);

  if (
    localStorage.getItem("theme") === "light" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: light)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="mr-1.5 h-[26px]">
      <Switch
        checked={switched}
        onChange={() => setSwitched((switched) => !switched)}
        className={`${!switched ? "bg-gray-900" : "bg-gray-200 "}
          relative inline-flex h-6 w-[52px] shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2focus-visible:ring-white focus-visible:ring-opacity-75 border-2 border-gray-200`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${!switched ? "translate-x-[26px]" : "translate-x-0"}
            pointer-events-none inline-block h-5 w-[22px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
