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

  const res = await fetch(`${API_URL}/search_sections?${queryArray.join("&")}`);
  return checkResponse(res);
};

// Вход
export const login = async (email: string, password: string): Promise<any> => {
  const res = await fetch(`${API_URL}/login/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  // return checkResponse(res);
  try {
    const data = await checkResponse(res); // Проверяем статус ответа
    const { token } = data; // Извлекаем токен из ответа сервера
    localStorage.setItem("token", token); // Сохраняем токен в localStorage
    return data; // Возвращаем данные, если запрос успешен
  } catch (error: any) {
    // Обработка ошибок
    console.error("Ошибка:", error.message);
    throw error;
  }
};

// Регистрация
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
