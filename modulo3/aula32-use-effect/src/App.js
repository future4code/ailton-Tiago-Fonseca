import React from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import { useState, useEffect } from "react";

const ComponenteFuncional = () => {
  const [pokeName, setPokeName] = useState("");
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    const pegarPokemon = () => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/${pokeList}/")
        .then((response) => {
          setPokeList(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    pegarPokemon();
  }, [pokeList]);

  const changePokeName = (event) => {
    setPokeName({ pokeName: event.target.value });
  };

  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
};

export default ComponenteFuncional;
