export interface RegisterBody {
  email: string;
  password: string;
  check_password: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

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
