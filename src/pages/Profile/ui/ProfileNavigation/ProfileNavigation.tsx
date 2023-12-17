import styles from "./ProfileNavigation.module.scss";
import NavLink from "../../../../components/ui/NavLink/NavLink.tsx";

const ProfileNavigation = () => {
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
