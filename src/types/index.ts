export interface Sport {
  id: number;
  name: string;
}

export interface School {
  id: number;
  name: string;
  sportId: number;
  ageFrom: number;
  ageTo: number;
  address: string;
  coordinates: [number, number];
}
