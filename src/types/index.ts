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
  rating: number;
  review_amount: number;
  schedule: {
    days: string[];
    time: string;
  };
  title: string;
  gender: string;
  aviable: number;
  price: number;
}
