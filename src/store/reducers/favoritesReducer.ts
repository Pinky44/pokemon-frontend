import {
  PokemonesFavoritesAction,
  FavoritesActionTypes,
  FavoritesState,
} from "src/type/favorites";

const initialState: FavoritesState = {
  error: null,
  favorites: [],
  searchValueFavorites: "",
  filteredFavoritesPokemones: [],
};

export const favoritesReducer = (
  state = initialState,
  action: PokemonesFavoritesAction
): FavoritesState => {
  switch (action.type) {
    case FavoritesActionTypes.POKEMONES_FAVORITES_TOGGLER:
      if (state.favorites.find((e) => e.name === action.payload.name)) {
        return {
          ...state,
          error: null,
          favorites: state.favorites.filter(
            (e) => e.name !== action.payload.name
          ),
        };
      }
      return {
        ...state,
        error: null,
        favorites: state.favorites.concat(action.payload),
      };
    case FavoritesActionTypes.SEARCH_POKEMONES_FAVORITES:
      return {
        ...state,
        searchValueFavorites: action.payload,
        filteredFavoritesPokemones: state.favorites.filter((e) =>
          e.name.match(action.payload)
        ),
      };
    default:
      return state;
  }
};
