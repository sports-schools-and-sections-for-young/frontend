import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProfileHeader from "./ProfileHeader/ProfileHeader.tsx";
import styles from "./ProfilePage.module.scss";
import Header from "../../../components/ui/Header/Header.tsx";
import Footer from "../../../components/Footer/Footer.tsx";
import { getSchoolInfo, getSchoolSections } from "../../../utils/api";
import AppContext from "../../../context/AppContext.ts";
import { SchoolInfo, Section } from "../../../types";
import Preloader from "../../../components/ui/Preloader/Preloader.tsx";
import { PreloaderSize } from "../../../components/ui/Preloader/types";
import ProfileForm from "./ProfileForm/ProfileForm.tsx";

const ProfilePage = () => {
  const { school, setSchool } = useContext(AppContext);

  useEffect(() => {
    const getInfo = async () => {
      const info: SchoolInfo = await getSchoolInfo(
        "cb491fa10ce98c5d79ebdd9a429fbd84fa3f7268",
      );
      const sections: Section[] = await getSchoolSections(
        "cb491fa10ce98c5d79ebdd9a429fbd84fa3f7268",
      );
      setSchool({ info, sections });
    };
    getInfo();
  }, []);

  console.log(school);

  return (
    <>
      <Header />
      <main className={styles.page}>
        <ProfileHeader />
        <Routes>
          <Route path="/" element={<Preloader size={PreloaderSize.Large} />} />
          <Route path="/edit" element={<ProfileForm />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;
