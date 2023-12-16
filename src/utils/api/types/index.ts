export interface CreateSection {
  title: string;
  gender: "" | "Man" | "Woman";
  sport_type: number;
  schedule: number[];
  year_from: number;
  year_until: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
}

export interface UpdateSection extends Partial<CreateSection> {}

export interface CreateSchool {
  title: string;
  address: string;
  email: string;
  site?: string;
  description: string;
  phone: string;
}

export interface UpdateSchool extends Partial<CreateSchool> {}
