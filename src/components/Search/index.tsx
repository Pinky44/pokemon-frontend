import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useDebounce from "src/store/hooks/useDebounce";
import { useAppDispatch } from "src/store/hooks/useTypedSelector";
import { PokemonesActionTypes } from "src/type/pokemon";
import close from "src/images/close.png";
import "./style.scss";

export const Search = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [debouncedValue] = useDebounce(search, 500);

  const handleReset = () => {
    setSearch("");
  };

  useEffect(() => {
    searchParams.set("searchValue", search);
    setSearchParams(searchParams);

    dispatch({
      type: PokemonesActionTypes.SEARCH_POKEMONES,
      payload: search,
    });
  }, [debouncedValue]);

  return (
    <div className="search">
      <input
        data-testid="searchInput"
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search"
      />

      <button className="search-button" onClick={handleReset} data-testid="searchButton">
        <img className="search-img-close" src={close} alt="close" />
      </button>
    </div>
  );
};
