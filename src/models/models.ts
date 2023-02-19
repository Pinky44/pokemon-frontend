import { Pokemon } from "src/type/pokemon";

export interface FormValues {
  login: string;
  password: string;
  repeatedPassword?: string;
}

export interface PropsCard {
  isFavorite: boolean;
  pokemon: Pokemon;
}
