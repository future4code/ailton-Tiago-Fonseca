import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const ComponenteFuncional = () => {
  const [pokemon, setPokemon] = useState({});

  useEffect((prevProps) => {
    setPokemon(pokemon);
    if (prevProps.pokemon !== pokemon) {
      setPokemon(pokemon);
    }

    setPokemon = (pokeName) => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
          .then((response) => {
            // guarda as infos do pokemon no estado
            this.setState({ pokemon: response.data });
          })
          .catch((err) => {
            console.log(err);
          });
      };
  } );

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
};

export default ComponenteFuncional;
