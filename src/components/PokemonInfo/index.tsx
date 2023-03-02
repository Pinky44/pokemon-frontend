import React, { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { } from "redux-thunk/extend-redux";
import { Container } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import { CustomSkeleton } from "src/components/CustomElements";
import { fetchPokemonInfo } from "src/store/action-creators/pokemon";
import { useAppDispatch, useAppSelector } from "src/store/hooks/useTypedSelector";
import { urlImg } from "src/helpers/constants";
import "./style.scss";

export const PokemonInfo: React.FC = () => {
  const { pokemones } = useAppSelector((state) => state.pokemon);
  const { pokemonInfo, error } = useAppSelector((state) => state.pokemonInfo);

  const { name } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const data = useMemo(() => {
    const pokemonFromList = pokemones.find((e) => e.name === name);
    if (pokemonFromList) {
      return pokemonFromList;
    }
    return pokemonInfo;
  }, [pokemones, name, pokemonInfo]);

  useEffect(() => {
    if (name && !data) {
      dispatch(fetchPokemonInfo(name));
    }
  }, []);

  if (error) {
    return (
      <div className="error-api">{error}</div>
    )
  }

  if (!data) {
    return (
      <Container maxWidth="sm">
        <CustomSkeleton />
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <div className="card-header">
        <button
          className="card-header-button"
          onClick={() => navigate("/home")}
        >
          <ReplyIcon />
        </button>
        <div className="card-header-type">
          {data &&
            data.types.map((element) => (
              <div className="card-header-type_name" key={element.type.name}>
                {element.type.name}
              </div>
            ))}
        </div>
      </div>

      <div className="wrapper-pokemon">

        <h1 className="pokemon-name">{data.name}</h1>

        <img
          className="pokemon-img"
          src={`${urlImg}/${data.id}.png`}
          alt={data.name}
        />
        <div className="pokemon-characteristic">
          <div className="pokemon-characteristic-ability">
            <h2>Ability:</h2>

            {data.abilities.map((item) => (
              <div key={item.ability.name}>{item.ability.name}</div>
            ))}
            <div className="pokemon-characteristic-size">
              <p className="pokemon-characteristic-size_height-weight">
                {"Height " + data.height}
              </p>

              <p className="pokemon-characteristic-size_height-weight">
                {"Weight " + data.weight}
              </p>
            </div>
          </div>

          <div className="pokemon-stats">
            <h2>Stats:</h2>
            {data.stats.map((item) => (
              <div key={item.stat.name}>
                <div className="pokemon-stats_name">
                  <p>{item.stat.name}</p>

                  <p>{item.base_stat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
