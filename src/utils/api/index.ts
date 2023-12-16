import { API_URL } from "../variables.ts";
import { ISectionsRequest } from "../../context/AppContext.ts";
import { CreateSection, UpdateSection } from "./types";

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

export const login = async (email: string, password: string): Promise<any> => {
  const res = await fetch(`${API_URL}/login/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return checkResponse(res);
};

export const handleLogin = async (
  email: string,
  password: string,
  navigate: any,
  setCookie: any,
) => {
  try {
    const loginResponse = await login(email, password);
    // console.log("Успешная авторизация", loginResponse);
    const { token } = loginResponse;
    setCookie("token", token, { path: "/" });
    navigate("/profile");
  } catch (error) {
    console.error("Ошибка при входе", error);
  }
};

export const registration = async (
  email: string,
  password: string,
  check_password: string,
): Promise<any> => {
  const res = await fetch(`${API_URL}/register/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, check_password }),
  });
  return checkResponse(res);
};

export const getSchoolInfo = async (token: string) => {
  const info = await fetch(`${API_URL}/sport_school/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  return checkResponse(info);
};

export const getSchoolSections = async (token: string) => {
  const sections = await fetch(`${API_URL}/section/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  return checkResponse(sections);
};

export const createSection = async (
  token: string,
  createBody: CreateSection,
) => {
  const info = await fetch(`${API_URL}/create_section/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
    method: "POST",
    body: JSON.stringify(createBody),
  });

  return checkResponse(info);
};

export const updateSection = async (
  token: string,
  id: number,
  updateBody: UpdateSection,
) => {
  const info = await fetch(`${API_URL}/section/${id}/update/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
    method: "PATCH",
    body: JSON.stringify(updateBody),
  });

  return checkResponse(info);
};

export const deleteSection = async (token: string, id: number) => {
  const info = await fetch(`${API_URL}/section/${id}/delete/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
    method: "DELETE",
  });

  return checkResponse(info);
};
