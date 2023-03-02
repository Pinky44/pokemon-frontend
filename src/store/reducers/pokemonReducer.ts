import {
  PokemonesAction,
  PokemonesActionTypes,
  PokemonState,
} from "src/type/pokemon";

const initialState: PokemonState = {
  isLoading: false,
  error: null,
  pokemones: [],
  searchValue: "",
  filteredPokemones: [],
  allPokemones: [],
};

export const pokemonReducer = (
  state = initialState,
  action: PokemonesAction
): PokemonState => {
  switch (action.type) {
    case PokemonesActionTypes.FETCH_POKEMONES:
      return {
        ...state,
        isLoading: true,
        error: null,
        searchValue: "",
      };
    case PokemonesActionTypes.FETCH_POKEMONES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        pokemones: action.payload.pokemones,
        searchValue: "",
      };
    case PokemonesActionTypes.FETCH_ALL_POKEMONES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        searchValue: "",
        allPokemones: action.payload.allPokemones,
      };
    case PokemonesActionTypes.FETCH_POKEMONES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        searchValue: "",
        filteredPokemones: [],
      };
    case PokemonesActionTypes.SEARCH_POKEMONES:
      return {
        ...state,
        searchValue: action.payload,
        filteredPokemones: state.allPokemones.filter((e) =>
          e.name.match(action.payload)
        ),
      };
    default:
      return state;
  }
};
