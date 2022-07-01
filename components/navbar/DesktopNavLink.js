import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

const DesktopNavLink = ({ href, text, ...rest }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <li className="px-5 py-2">
      <Link href={href} {...rest}>
        <a
          className={clsx(
            "underlined block whitespace-nowrap text-lg font-medium hover:text-black focus:text-black focus:outline-none dark:hover:text-white dark:focus:text-white dark:active:text-white",
            {
              active: isActive,
              "text-gray-500 dark:text-gray-dark": !isActive,
            }
          )}
        >
          {text}
        </a>
      </Link>
    </li>
  );
};

export default DesktopNavLink;
