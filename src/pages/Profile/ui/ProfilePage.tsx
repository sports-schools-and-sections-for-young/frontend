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
import ProfileForm from "./ProfileForm/ProfileForm.tsx";
import ProfileSections from "./ProfileSections/ProfileSections.tsx";
import { parseSchedule, parseSport } from "../../../utils/functions/index.ts";

const ProfilePage = () => {
  const { school, setSchool, sports } = useContext(AppContext);

  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const getInfo = async (token: string) => {
      try {
        const info: SchoolInfo = await getSchoolInfo(token);
        const sections: Section[] = await getSchoolSections(token);
        const parsedSections = sections.map((s: Section) => {
          return {
            ...s,
            sport_type: parseSport(+s.sport_type, sports),
            schedule: parseSchedule(s.schedule),
          };
        });
        setSchool({
          info,
          sections: parsedSections,
        });
      } catch (e) {
        console.log(e);
      }
    };
    const { token } = cookies;

    console.log(token);

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
          <Route path="/" element={<ProfileSections />} />
          <Route path="/edit" element={<ProfileForm />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;
