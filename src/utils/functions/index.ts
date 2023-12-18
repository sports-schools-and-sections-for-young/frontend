import { ChangeEvent } from "react";
import { GEOCODER_KEY, GEOSUGGEST_KEY } from "../variables.ts";
import { IMapInstance, YandexAnswer } from "../../types";
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

export const formatPhoneInput = function (
  e: ChangeEvent<HTMLInputElement>,
): string {
  let content: string | string[] = e.target.value;
  content = Array.from(content).filter(
    (ltr) => ltr.charCodeAt(0) > 47 && ltr.charCodeAt(0) < 58,
  );

  switch (content[0]) {
    case "8":
      content[0] = "7";
      break;
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "9":
      content.unshift("7");
      break;
    default:
      break;
  }

  if (!content[0]) {
    e.target.value = "";
    return e.target.value;
  }

  const [countryCode, operatorCode, number3, number21, number22] = [
    content[0],
    content.slice(1, 4).join(""),
    content.slice(4, 7).join(""),
    content.slice(7, 9).join(""),
    content.slice(9, 11).join(""),
  ];

  e.target.value = countryCode.length ? `+${countryCode}` : "";
  if (operatorCode.length) e.target.value += `(${operatorCode}`;
  if (number3.length) e.target.value += `)${number3}`;
  if (number21.length) e.target.value += `-${number21}`;
  if (number22.length) e.target.value += `-${number22}`;

  return e.target.value;
};
