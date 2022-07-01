import Link from "next/link";

const MobileNavLink = ({ href, onClick, text, ...rest }) => (
  <div className="m-4">
    <Link href={href} {...rest}>
      <a
        onClick={onClick}
        className="navigation__link min-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap hover:text-white dark:hover:text-black"
      >
        {text}
      </a>
    </Link>
  </div>
);

export default MobileNavLink;
