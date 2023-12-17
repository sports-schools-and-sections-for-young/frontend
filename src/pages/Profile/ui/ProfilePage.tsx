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
import { parseSport } from "../../../utils/functions/index.ts";
import { weekdays } from "../../../utils/constants/week.ts";

const ProfilePage = () => {
  const { school, setSchool, sports } = useContext(AppContext);

  useEffect(() => {
    const getInfo = async () => {
      const info: SchoolInfo = await getSchoolInfo(
        "71f13ec46fa7bcfe885c29b21cdbf0e6e383e6e9",
      );
      const sections: Section[] = await getSchoolSections(
        "71f13ec46fa7bcfe885c29b21cdbf0e6e383e6e9",
      );
      setSchool({
        info,
        sections: sections.map((s) => {
          return {
            ...s,
            sport_type: parseSport(s, sports),
            schedule: s.schedule.map((d: number) => weekdays[d - 1]).join(","),
          };
        }),
      });
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
