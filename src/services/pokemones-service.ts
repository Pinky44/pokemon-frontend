import { urlPokemon } from "src/helpers/constants";

const paginatedPokemonesService = async (
  skip: number,
  itemsPerPage: number
) => {
  const response = await fetch(
    `${urlPokemon}/?offset=${skip}&limit=${itemsPerPage}`
  ).then((response) => response.json());

  return response;
};

const allPokemonesService = async () => {
  const response = await fetch(`${urlPokemon}/?offset=0&limit=10000`).then(
    (response) => response.json()
  );

  return response;
};

const paginatedPokemonesDataService = async (paginatedPokemones: {
  results: { name: string; url: string }[];
}) => {
  const response = await Promise.all(
    paginatedPokemones.results.map((el: { name: string; url: string }) => {
      return fetch(`${urlPokemon}/${el.name}`).then((response) =>
        response.json()
      );
    })
  );

  return response;
};

const allPokemonesDataService = async (allPokemones: {
  results: { name: string; url: string }[];
}) => {
  const response = await Promise.all(
    allPokemones.results.map((el: { name: string; url: string }) => {
      return fetch(`${urlPokemon}/${el.name}`).then((response) =>
        response.json()
      );
    })
  );

  return response;
};

const pokemonInfoService = async (name: string) => {
  const response = await fetch(`${urlPokemon}/${name}`).then((response) =>
    response.json()
  );

  return response;
};

export {
  paginatedPokemonesService,
  allPokemonesService,
  paginatedPokemonesDataService,
  allPokemonesDataService,
  pokemonInfoService,
};
