import { Pokemon } from "./pokemon";

export type PokemonesInfoAction =
  | FetchPokemonInfoAction
  | FetchPokemonInfoSuccessAction
  | FetchPokemonInfoErrorAction;

export interface PokemonInfoState {
  error: null | string;
  pokemonInfo: Pokemon | null;
}

export enum PokemonesInfoActionTypes {
  FETCH_POKEMON_INFO = "FETCH_POKEMON_INFO",
  FETCH_POKEMON_INFO_SUCCESS = "FETCH_POKEMON_INFO_SUCCESS",
  FETCH_POKEMONES_INFO_ERROR = "FETCH_POKEMONES_INFO_ERROR",
}

interface FetchPokemonInfoAction {
  type: PokemonesInfoActionTypes.FETCH_POKEMON_INFO;
}

interface FetchPokemonInfoSuccessAction {
  type: PokemonesInfoActionTypes.FETCH_POKEMON_INFO_SUCCESS;
  payload: {
    pokemonInfo: Pokemon;
  };
}

interface FetchPokemonInfoErrorAction {
  type: PokemonesInfoActionTypes.FETCH_POKEMONES_INFO_ERROR;
  payload: string;
}
