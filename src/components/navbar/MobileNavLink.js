import { Link } from "react-router-dom";

const MobileNavLink = ({ to, ...rest }) => (
  <li className="m-4">
    <Link
      className="navigation__link min-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap hover:text-white dark:hover:text-black"
      to={to}
      {...rest}
    />
  </li>
);

export default MobileNavLink;