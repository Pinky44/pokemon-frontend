import { Dispatch } from "redux";
import {
  allPokemonesDataService,
  allPokemonesService,
  paginatedPokemonesDataService,
  paginatedPokemonesService,
  pokemonInfoService,
} from "src/services/pokemones-service";
import { textErrorWhenLoading } from "src/helpers/constants";
import { PaginationAction, PaginationActionTypes } from "src/type/pagination";
import { PokemonesAction, PokemonesActionTypes } from "src/type/pokemon";
import {
  PokemonesInfoAction,
  PokemonesInfoActionTypes,
} from "src/type/pokemonInfo";

export const fetchPokemones = () => {
  return async (dispatch: Dispatch<PokemonesAction>) => {
    try {
      const allPokemones = await allPokemonesService();

      const allPokemonesData = await allPokemonesDataService(allPokemones);

      dispatch({
        type: PokemonesActionTypes.FETCH_ALL_POKEMONES_SUCCESS,
        payload: {
          allPokemones: allPokemonesData,
        },
      });
    } catch (error) {
      dispatch({
        type: PokemonesActionTypes.FETCH_POKEMONES_ERROR,
        payload: `${textErrorWhenLoading} покемонов`,
      });
    }
  };
};

export const paginatedPokemones = (skip: number, itemsPerPage: number) => {
  return async (dispatch: Dispatch<PokemonesAction | PaginationAction>) => {
    try {
      dispatch({ type: PokemonesActionTypes.FETCH_POKEMONES });
      const paginatedPokemones = await paginatedPokemonesService(
        skip,
        itemsPerPage
      );

      const paginatedPokemonesData = await paginatedPokemonesDataService(
        paginatedPokemones
      );

      dispatch({
        type: PokemonesActionTypes.FETCH_POKEMONES_SUCCESS,
        payload: {
          pokemones: paginatedPokemonesData,
        },
      });

      dispatch({
        type: PaginationActionTypes.CHANGE_TOTAL_PAGINATION,
        payload: {
          totalCount: Math.floor(paginatedPokemones.count / itemsPerPage),
        },
      });
    } catch (error) {
      dispatch({
        type: PokemonesActionTypes.FETCH_POKEMONES_ERROR,
        payload: `${textErrorWhenLoading} покемонов`,
      });
    }
  };
};

export const fetchPokemonInfo = (name: string) => {
  return async (dispatch: Dispatch<PokemonesInfoAction>) => {
    try {
      dispatch({
        type: PokemonesInfoActionTypes.FETCH_POKEMON_INFO,
      });
      const pokemonInfo = await pokemonInfoService(name);

      dispatch({
        type: PokemonesInfoActionTypes.FETCH_POKEMON_INFO_SUCCESS,
        payload: {
          pokemonInfo,
        },
      });
    } catch (error) {
      dispatch({
        type: PokemonesInfoActionTypes.FETCH_POKEMONES_INFO_ERROR,
        payload: `${textErrorWhenLoading} покемонa`,
      });
    }
  };
};
