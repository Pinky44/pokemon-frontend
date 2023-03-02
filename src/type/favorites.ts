export type PokemonesFavoritesAction =
  | FavoritesSuccessAction
  | FavoritesPokemonesSearchAction;

export interface FavoritesState {
  error: null | string;
  favorites: Favorites[];
  searchValueFavorites: string;
  filteredFavoritesPokemones: Favorites[];
}

export interface Favorites {
  id: string;
  types: {
    type: {
      name: string;
      url: string;
    };
  }[];
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}
export enum FavoritesActionTypes {
  POKEMONES_FAVORITES_TOGGLER = "POKEMONES_FAVORITES_TOGGLER",
  SEARCH_POKEMONES_FAVORITES = "SEARCH_POKEMONES_FAVORITES",
}

interface FavoritesSuccessAction {
  type: FavoritesActionTypes.POKEMONES_FAVORITES_TOGGLER;
  payload: Favorites;
}

interface FavoritesPokemonesSearchAction {
  type: FavoritesActionTypes.SEARCH_POKEMONES_FAVORITES;
  payload: string;
}
