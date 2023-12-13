import { useContext, useEffect } from "react";
import ProfileNavigation from "./ProfileNavigation/ProfileNavigation.tsx";
import styles from "./ProfilePage.module.scss";
import Header from "../../../components/ui/Header/Header.tsx";
import Footer from "../../../components/Footer/Footer.tsx";
import { getSchoolInfo, getSchoolSections } from "../../../utils/api";
import AppContext from "../../../context/AppContext.ts";
import { SchoolInfo, Section } from "../../../types";

const ProfilePage = () => {
  const { school, setSchool } = useContext(AppContext);

  useEffect(() => {
    const getInfo = async () => {
      const info: SchoolInfo = await getSchoolInfo();
      const sections: Section[] = await getSchoolSections();
      setSchool({ info, sections });
    };
    getInfo();
  }, []);

  console.log(school);

  return (
    <>
      <Header />
      <main className={styles.page}>
        <ProfileNavigation />
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;
