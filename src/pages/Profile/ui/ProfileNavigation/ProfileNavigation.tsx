import { useLocation } from "react-router-dom";
import styles from "./ProfileNavigation.module.scss";
import NavLink from "../../../../components/ui/NavLink/NavLink.tsx";

const ProfileNavigation = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <NavLink path="/profile">Секции</NavLink>
        </li>
        <li>
          <NavLink path="/profile/edit">Профиль</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileNavigation;
