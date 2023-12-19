import { API_URL } from "../variables.ts";
import { ISectionsRequest } from "../../context/AppContext.ts";

import {
  CreateSchool,
  CreateSection,
  ResponseType,
  UpdateSchool,
  UpdateSection,
} from "./types";
import { getCoordinates } from "../functions";

const checkResponse = (res: Response) =>
  res.ok ? res.json() : Promise.reject(res);

export const getSports = async () => {
  const res = await fetch(`${API_URL}/sport_types`);
  return checkResponse(res);
};

export const getAllSports = async () => {
  const res = await fetch(`${API_URL}/sport_types_all`);
  return checkResponse(res);
};

export const addSportType = async (token: string, sportType: string) => {
  const info = await fetch(`${API_URL}/create_sport_types/`, {
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ title: sportType }),
  });
  return checkResponse(info);
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
    queryArray.push(`schedule=${sectionRequest.schedule}`);
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
    const { token } = loginResponse;
    if (token) {
      const date = new Date();
      date.setTime(date.getTime() + 2592000e3);
      setCookie("token", token, { path: "/", expires: date });
      setCookie("token", token, { path: "/profile", expires: date });
      navigate("/profile");
    } else {
      return ResponseType.WRONG;
    }
    return ResponseType.SUCCESS;
  } catch (error) {
    if (error instanceof Response) {
      const res = await error.json();
      if (res.message === "Пользователь с такими данными не существует!") {
        return ResponseType.WRONG;
      }
    }
    return ResponseType.ERROR;
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
  const coords = await getCoordinates(createBody.address);

  const info = await fetch(`${API_URL}/create_section/`, {
    headers: {
      Authorization: `Token ${token}`,
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      ...createBody,
      latitude: coords[0],
      longitude: coords[1],
    }),
  });

  return checkResponse(info);
};

export const updateSection = async (
  token: string,
  id: number,
  updateBody: UpdateSection,
) => {
  const coords = await getCoordinates(updateBody.address as string);

  const info = await fetch(`${API_URL}/section/${id}/update/`, {
    headers: {
      Authorization: `Token ${token}`,
      "Content-type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      ...updateBody,
      latitude: coords[0],
      longitude: coords[1],
    }),
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

  return info;
};
export const createSchoolInfo = async (
  token: string,
  createBody: CreateSchool,
) => {
  const info = await fetch(`${API_URL}/create_sport_organization/`, {
    headers: {
      Authorization: `Token ${token}`,
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(createBody),
  });

  return checkResponse(info);
};

export const updateSchoolInfo = async (
  token: string,
  updateBody: UpdateSchool,
) => {
  const info = await fetch(`${API_URL}/sport_school/update/`, {
    headers: {
      Authorization: `Token ${token}`,
      "Content-type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify(updateBody),
  });

  return checkResponse(info);
};

export const deleteAccount = async (token: string, password: string) => {
  const res = await fetch(`${API_URL}/user/delete/`, {
    headers: {
      Authorization: `Token ${token}`,
      "Content-type": "application/json",
    },
    method: "DELETE",
    body: JSON.stringify({ current_password: password }),
  });

  return res.ok ? "OK" : Promise.reject(res);
};

export const changePassword = async (
  token: string,
  body: { old_password: string; new_password: string; check_password: string },
) => {
  const data = await fetch(`${API_URL}/reset_password/`, {
    headers: {
      Authorization: `Token ${token}`,
      "Content-type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(body),
  });

  return checkResponse(data);
};
