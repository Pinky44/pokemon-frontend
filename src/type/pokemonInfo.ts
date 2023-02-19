export type PokemonesInfoAction =
  | FetchPokemonInfoAction
  | FetchPokemonInfoSuccessAction
  | FetchPokemonInfoErrorAction;

export interface PokemonInfoState {
  error: null | string;
  pokemonInfo: Pokemon | null;
}

export interface Pokemon {
  id: string;
  types: {
    type: {
      name: string;
      url: string;
    };
  }[];
  name: string;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  weight: string;
  height: string;
  species: {
    name: string;
    url: string;
  };
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
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
