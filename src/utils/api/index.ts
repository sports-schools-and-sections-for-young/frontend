import { API_URL } from "../variables.ts";
import { ISectionsRequest } from "../../context/AppContext.ts";

const checkResponse = (res: Response) =>
  res.ok ? res.json() : Promise.reject(res);

export const getSports = async () => {
  const res = await fetch(`${API_URL}/sport_types`);
  return checkResponse(res);
};

export const searchSections = async (sectionRequest: ISectionsRequest) => {
  const queryArray: string[] = [];

  if (sectionRequest.sports) {
    sectionRequest.sports.forEach((sport) =>
      queryArray.push(`sport_type=${sport.title}`),
    );
  }

  if (sectionRequest.age) {
    queryArray.push(`age_group=${sectionRequest.age}`);
  }

  if (sectionRequest.gender) {
    queryArray.push(`gender=${sectionRequest.gender}`);
  }

  if (sectionRequest.location) {
    queryArray.push(`coords=${sectionRequest.location.join(":")}`);
  }

  if (sectionRequest.distance) {
    queryArray.push(`distance=${sectionRequest.distance}`);
  }

  if (sectionRequest.schedule) {
    queryArray.push(`schedule=${sectionRequest.schedule.join(",")}`);
  }

  const res = await fetch(`${API_URL}/search_sections?${queryArray.join("&")}`);
  return checkResponse(res);
};

export const getSchoolInfo = async () => {
  const info = await fetch(`http://127.0.0.1:8000/api/sport_school/`, {
    headers: {
      Authorization: "Token 73c195200dafca241c31da8f7e0122276dfc1d98",
    },
  });

  return checkResponse(info);
};

export const getSchoolSections = async () => {
  const sections = await fetch("http://127.0.0.1:8000/api/section/", {
    headers: {
      Authorization: "Token 73c195200dafca241c31da8f7e0122276dfc1d98",
    },
  });

  return checkResponse(sections);
};
