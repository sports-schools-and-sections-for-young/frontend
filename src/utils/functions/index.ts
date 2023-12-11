import { GEOCODER_KEY, GEOSUGGEST_KEY } from "../variables.ts";
import { IMapInstance, YandexAnswer } from "../../types";

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
