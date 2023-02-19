export type PokemonesAction =
  | FetchPokemonesAction
  | FetchPokemonesSuccessAction
  | FetchPokemonesErrorAction
  | PokemonesSearchAction
  | FetchPokemonesAllPokemonesSuccessAction;

export interface PokemonState {
  isLoading: boolean;
  error: null | string;
  pokemones: Pokemon[];
  searchValue: string;
  filteredPokemones: Pokemon[];
  allPokemones: Pokemon[];
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

export enum PokemonesActionTypes {
  FETCH_POKEMONES = "FETCH_POKEMONES",
  FETCH_POKEMONES_SUCCESS = "FETCH_POKEMONES_SUCCESS",
  FETCH_ALL_POKEMONES_SUCCESS = "FETCH_ALL_POKEMONES_SUCCESS",
  FETCH_POKEMONES_ERROR = "FETCH_POKEMONES_ERROR",
  SEARCH_POKEMONES = "SEARCH_POKEMONES",
}

interface FetchPokemonesAction {
  type: PokemonesActionTypes.FETCH_POKEMONES;
}

interface FetchPokemonesSuccessAction {
  type: PokemonesActionTypes.FETCH_POKEMONES_SUCCESS;
  payload: {
    pokemones: Pokemon[];
  };
}

interface FetchPokemonesAllPokemonesSuccessAction {
  type: PokemonesActionTypes.FETCH_ALL_POKEMONES_SUCCESS;
  payload: {
    allPokemones: Pokemon[];
  };
}

interface FetchPokemonesErrorAction {
  type: PokemonesActionTypes.FETCH_POKEMONES_ERROR;
  payload: string;
}

interface PokemonesSearchAction {
  type: PokemonesActionTypes.SEARCH_POKEMONES;
  payload: string;
}
