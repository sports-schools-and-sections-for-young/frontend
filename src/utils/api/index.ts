import { API_URL } from "../variables.ts";

const checkResponse = (res: Response) =>
  res.ok ? res.json() : Promise.reject(res);

export const getSports = async () => {
  const res = await fetch(`${API_URL}/sports`);
  return checkResponse(res);
};
