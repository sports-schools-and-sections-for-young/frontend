export interface CreateSection {
  title: string;
  gender: string;
  sport_type: string | number | null;
  schedule: number[] | string;
  year_from: number;
  year_until: number;
  price: number;
  address: string;
  free_class: boolean;
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

export enum ResponseType {
  SUCCESS = "success",
  WRONG = "wrong",
  ERROR = "error",
}

export interface UpdateSchool extends Partial<CreateSchool> {}
