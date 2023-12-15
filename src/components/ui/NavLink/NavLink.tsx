import { Link, useLocation } from "react-router-dom";
import { FC, LinkHTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./NavLink.module.scss";

interface NavLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  path: string;
}

const NavLink: FC<NavLinkProps> = (props) => {
  const { path, children } = props;

  const location = useLocation();

  const navLinkClass = classnames({
    [styles.link]: true,
    [styles.active]: location.pathname === path,
  });

  return (
    <Link className={navLinkClass} to={path}>
      {children}
    </Link>
  );
};

export default NavLink;
