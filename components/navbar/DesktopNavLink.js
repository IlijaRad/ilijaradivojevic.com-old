import clsx from "clsx";
import Link from "next/link";

const DesktopNavLink = ({ href, text, ...rest }) => (
  <li className="px-5 py-2">
    <Link
      // className={({ isActive = false }) => {
      //   return clsx(
      //     "underlined block whitespace-nowrap text-lg font-medium hover:text-black focus:text-black focus:outline-none dark:hover:text-white dark:focus:text-white dark:active:text-white",
      //     {
      //       active: isActive,
      //       "text-gray-500 dark:text-gray-dark": !isActive,
      //     }
      //   );
      // }}
      href={href}
      {...rest}
    >
      <a className="underlined block whitespace-nowrap text-lg font-medium hover:text-black focus:text-black focus:outline-none dark:hover:text-white dark:focus:text-white dark:active:text-white text-gray-500 dark:text-gray-dark">
        {text}
      </a>
    </Link>
  </li>
);

export default DesktopNavLink;
