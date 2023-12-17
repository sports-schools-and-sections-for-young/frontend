import { GEOCODER_KEY, GEOSUGGEST_KEY } from "../variables.ts";
import { IMapInstance, Sport, YandexAnswer } from "../../types";
import { Weekday } from "../constants/week.ts";

export function getDeclension(number: number, words: string[]) {
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
  ];
}

export const getCoordinates = async (address: string) => {
  const res = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=${GEOCODER_KEY}&geocode=${address}&format=json`,
  );
  const data = await res.json();
  return data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
    .split(" ")
    .map((pos: string) => +pos)
    .reverse();
};

export const getGeosuggestAddresses = async (value: string) => {
  const res = await fetch(
    `https://suggest-maps.yandex.ru/v1/suggest?apikey=${GEOSUGGEST_KEY}&text=${value}&types=locality,street,house&print_address=1`,
  );
  const addresses: YandexAnswer = await res.json();
  if (addresses.results) {
    const formattedAddresses = addresses.results.map((address) => ({
      id: address.distance.value,
      title: address.address.formatted_address,
    }));
    return formattedAddresses;
  }

  return [];
};

export const getGeoLocation = (
  map: IMapInstance,
  defaultLocation: [number, number],
) => {
  if (map) {
    return map.geolocation
      .get({ provider: "auto", mapStateAutoApply: true })
      .then((result) => result.geoObjects.position);
  }
  return defaultLocation;
};

export const abbreviateWeekDayName = (
  day: string,
  isMobile: boolean,
): string => {
  if (day === Weekday.MONDAY) return isMobile ? day : "Пн";
  if (day === Weekday.TUESDAY) return isMobile ? day : "Вт";
  if (day === Weekday.WEDNESDAY) return isMobile ? day : "Ср";
  if (day === Weekday.THURSDAY) return isMobile ? day : "Чт";
  if (day === Weekday.FRIDAY) return isMobile ? day : "Пт";
  if (day === Weekday.SATURDAY) return isMobile ? day : "Сб";
  if (day === Weekday.SUNDAY) return isMobile ? day : "Вс";
  return "";
};

export const parseSport = (sport_type: number, sports: Sport[]): string =>
  sports.find((s) => s.id === sport_type)?.title || "";

export const getDistanceToSchool = (schoolCoords: number[]) => {
  const earthRadius = 6371;
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
  const userCoords = [0, 0];
  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition((p) => {
      userCoords.splice(0, 2, p.coords.latitude, p.coords.longitude);
    });
  } else {
    return "?";
  }
  const dLat = toRadians(schoolCoords[0] - userCoords[0]);
  const dLon = toRadians(schoolCoords[1] - userCoords[1]);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) *
      Math.sin(dLon / 2) *
      Math.cos(toRadians(userCoords[0])) *
      Math.cos(toRadians(userCoords[1]));
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.floor(earthRadius * c);
};
