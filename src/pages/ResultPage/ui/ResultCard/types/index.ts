export interface Adress {
  index: string;
  city: string;
  metro: string;
  district: string;
  street: string;
  house: string;
}

export interface SectionProps {
  id: number;
  sport_organization: string;
  sport_type: string;
  title: string;
  address: Adress;
  gender: string;
  price: number;
  raiting: number | null;
  review_amount: number;
  shedule: {
    days: string;
    time: string;
  };
  [key: string]: any;
}
