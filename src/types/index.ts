import { geolocation } from "yandex-maps";

export interface Sport {
  id: number;
  title: string;
}

export interface Section {
  id: number;
  sport_organization: string;
  sport_type: string | number;
  year_from: number;
  year_until: number;
  address: string;
  latitude: string;
  longitude: string;
  rating: number;
  review_amount: number;
  schedule: string;
  title: string;
  gender: string;
  aviable: number;
  price: number;
  free_class: boolean;
  site: string;
  phone: string;
}

export interface SchoolInfo {
  id: number;
  title: string | null;
  logo: string | null;
  address: string | null;
  email: string | null;
  site: string | null;
  description: string | null;
  phone: string | null;
}

export interface School {
  info: SchoolInfo;
  sections: Section[];
}

export interface YandexAnswer {
  suggest_reqid: string;
  results: {
    address: {
      component: {
        name: string;
        kind: string[];
      }[];
      formatted_address: string;
    };
    distance: {
      value: number;
      text: string;
    };
    tags: string[];
    title: {
      hl: { begin: number; end: number }[];
      text: string;
    };
  }[];
}

export interface IMapInstance {
  geolocation: {
    get: (
      options?: geolocation.IGeolocationOptions,
    ) => Promise<{ geoObjects: { position: [number, number] } }>;
  };
}
