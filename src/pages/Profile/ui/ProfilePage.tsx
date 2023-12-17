import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import ProfileHeader from "./ProfileHeader/ProfileHeader.tsx";
import styles from "./ProfilePage.module.scss";
import Header from "../../../components/ui/Header/Header.tsx";
import Footer from "../../../components/Footer/Footer.tsx";
import { getSchoolInfo, getSchoolSections } from "../../../utils/api";
import AppContext from "../../../context/AppContext.ts";
import { SchoolInfo, Section } from "../../../types";
import Preloader from "../../../components/ui/Preloader/Preloader.tsx";
import { PreloaderSize } from "../../../components/ui/Preloader/types";
import ProfileForms from "./ProfileForms/ProfileForms.tsx";

const ProfilePage = () => {
  const { school, setSchool } = useContext(AppContext);

  const [cookies, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    const getInfo = async (token: string) => {
      try {
        const info: SchoolInfo = await getSchoolInfo(token);
        const sections: Section[] = await getSchoolSections(token);
        setSchool({ info, sections });
      } catch (e) {
        if (e instanceof Response && e.status === 401) {
          removeCookie("token", null);
          setSchool(null);
        }
      }
    };
    const { token } = cookies;

    if (token) {
      getInfo(token);
    }
  }, []);

  console.log(school);

  return (
    <>
      <Header />
      <main className={styles.page}>
        <ProfileHeader />
        <Routes>
          <Route path="/" element={<Preloader size={PreloaderSize.Large} />} />
          <Route path="/edit" element={<ProfileForms />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;
