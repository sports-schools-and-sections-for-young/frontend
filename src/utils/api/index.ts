import { API_URL } from "../variables.ts";
import { ISectionsRequest } from "../../context/AppContext.ts";

const checkResponse = (res: Response) =>
  res.ok ? res.json() : Promise.reject(res);

export const getSports = async () => {
  const res = await fetch(`${API_URL}/sports`);
  return checkResponse(res);
};

export const searchSections = async (sectionRequest: ISectionsRequest) => {
  const queryArray: string[] = [];
  if (sectionRequest.age) {
    queryArray.push(
      `year_from_lte=${sectionRequest.age}&year_until_gte=${sectionRequest.age}`,
    );
  }
  if (sectionRequest.gender) {
    queryArray.push(`gender_like=${sectionRequest.gender}`);
  }

  const res = await fetch(`${API_URL}/sections?${queryArray.join("&")}`);
  return checkResponse(res);
};
