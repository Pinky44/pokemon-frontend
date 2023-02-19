import { FC, useEffect, useLayoutEffect } from "react";
import type { } from "redux-thunk/extend-redux";
import { CardsContainer, Pagination } from "src/components";
import { useAppDispatch, useAppSelector } from "src/store/hooks/useTypedSelector";
import {
  fetchPokemones,
  paginatedPokemones,
} from "src/store/action-creators/pokemon";
import { checkTokenUser } from "src/store/action-creators/user";
import { localStorageTokenPair } from "src/helpers/localStorage";

export const Home: FC = () => {
  const { skip, itemsPerPage } = useAppSelector((state) => state.pagination);
  const { allPokemones, pokemones, isLoading } = useAppSelector(
    (state) => state.pokemon,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pokemones) {
      dispatch(paginatedPokemones(skip, itemsPerPage));
    }
  }, [skip, itemsPerPage]);

  useLayoutEffect(() => {
    if (!allPokemones.length) {
      dispatch(fetchPokemones());
    }
  }, []);

  useEffect(() => {
    const tokens = localStorageTokenPair.getItem();
    dispatch(checkTokenUser(tokens.aToken));
  }, []);

  return (
    <div>
      <CardsContainer />
      {!isLoading && <Pagination />}
    </div>
  );
};
