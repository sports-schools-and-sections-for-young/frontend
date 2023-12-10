export interface Sport {
  id: number;
  title: string;
}

export interface Section {
  id: number;
  sport_organization: string;
  sport_type: string;
  year_from: number;
  year_until: number;
  address: {
    index: string;
    city: string;
    metro: string;
    district: string;
    street: string;
    house: string;
  };
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
