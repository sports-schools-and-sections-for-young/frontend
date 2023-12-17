import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProfileHeader from "./ProfileHeader/ProfileHeader.tsx";
import styles from "./ProfilePage.module.scss";
import Header from "../../../components/ui/Header/Header.tsx";
import Footer from "../../../components/Footer/Footer.tsx";
import { getSchoolInfo, getSchoolSections } from "../../../utils/api";
import AppContext from "../../../context/AppContext.ts";
import { SchoolInfo, Section } from "../../../types";
import ProfileForm from "./ProfileForm/ProfileForm.tsx";
import ProfileSections from "./ProfileSections/ProfileSections.tsx";

const ProfilePage = () => {
  const { school, setSchool } = useContext(AppContext);

  useEffect(() => {
    const getInfo = async () => {
      const info: SchoolInfo = await getSchoolInfo(
        "c9ab59f7cd24ef8735749254bea3666a14e1b769",
      );
      const sections: Section[] = await getSchoolSections(
        "c9ab59f7cd24ef8735749254bea3666a14e1b769",
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
          <Route path="/" element={<ProfileSections />} />
          <Route path="/edit" element={<ProfileForm />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;
