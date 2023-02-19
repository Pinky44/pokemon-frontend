import {
  PokemonesInfoAction,
  PokemonesInfoActionTypes,
  PokemonInfoState,
} from "src/type/pokemonInfo";

const initialState: PokemonInfoState = {
  error: null,
  pokemonInfo: null,
};

export const pokemonInfoReducer = (
  state = initialState,
  action: PokemonesInfoAction
): PokemonInfoState => {
  switch (action.type) {
    case PokemonesInfoActionTypes.FETCH_POKEMON_INFO:
      return {
        ...state,
        error: null,
        pokemonInfo: null,
      };
    case PokemonesInfoActionTypes.FETCH_POKEMON_INFO_SUCCESS:
      return {
        ...state,
        error: null,
        pokemonInfo: action.payload.pokemonInfo,
      };
    case PokemonesInfoActionTypes.FETCH_POKEMONES_INFO_ERROR:
      return {
        ...state,
        error: null,
        pokemonInfo: null,
      };
    default:
      return state;
  }
};
