import { Dispatch, SetStateAction } from "react";

export interface AddSectionRequest {
  title: string;
  gender: string;
  sport_type: number | null;
  schedule: number[];
  year_from: number;
  year_until: number;
  price: number;
  address: string;
}

export interface SportSectionProps {
  setValid: Dispatch<SetStateAction<boolean>>;
  request: AddSectionRequest;
  setRequest: Dispatch<SetStateAction<AddSectionRequest>>;
}
