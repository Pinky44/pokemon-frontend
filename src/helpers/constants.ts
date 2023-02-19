export const passwordRegExp =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g;

export const urlPokemon = process.env.REACT_APP_URL_POKEMON + "/pokemon";

export const url = process.env.REACT_APP_URL;

export const urlImg =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

export const textErrorCheckingFieldForEmptiness = "Поле не должно быть пустым";

export const textErrorCheckingPassword = "Пароли не совпадают";

export const textErrorWhenLoading = "Произошла ошибка при загрузке";
