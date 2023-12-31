import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import ProfileHeader from "./ProfileHeader/ProfileHeader.tsx";
import styles from "./ProfilePage.module.scss";
import Header from "../../../components/ui/Header/Header.tsx";
import Footer from "../../../components/Footer/Footer.tsx";
import {
  getSchoolInfo,
  getSchoolSections,
  getSports,
} from "../../../utils/api";
import AppContext from "../../../context/AppContext.ts";
import { SchoolInfo, Section, Sport } from "../../../types";
import ProfileForm from "./ProfileForms/ProfileForms.tsx";
import ProfileSections from "./ProfileSections/ProfileSections.tsx";
import { parseSchedule, parseSport } from "../../../utils/functions/index.ts";

const ProfilePage = () => {
  const { setSchool } = useContext(AppContext);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, _, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    const getInfo = async (token: string) => {
      try {
        const sports: Sport[] = await getSports();
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
        if (e instanceof Response && e.status === 401) {
          removeCookie("token", { path: "/" });
          removeCookie("token", { path: "/profile" });
          setSchool(null);
        }
      }
    };
    const { token } = cookies;

    if (token) {
      getInfo(token);
    }
  }, []);

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
