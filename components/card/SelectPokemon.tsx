"use client";
import { useState } from "react";
import { Pokemon } from "@/lib/types/type";
import Image from "next/image";
import Card from "./card";

const SelectPokemon = ({ pokemons }: { pokemons: Pokemon[] }) => {
  const [selectedPokemons, setSelectedPokemons] = useState("");
  const [team, setTeam] = useState<Pokemon[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputValue = e.target.value;

    const foundPokemon = pokemons.find((pokemon) => {
      return pokemon.name.fr === inputValue;
    });

    if (foundPokemon) {
      setTeam([...team, foundPokemon]);
      setSelectedPokemons(""); // Réinitialisez la valeur du champ de recherche
    } else {
      setSelectedPokemons(inputValue); // Mise à jour de la valeur de recherche
    }
  };

  return (
    <div>
      <input
        className='text-black'
        type='text'
        value={selectedPokemons}
        placeholder='Nom Pokemon entrée'
        list='pokemon-names'
        tabIndex={1}
        onChange={handleChange}
      ></input>
      <datalist id='pokemon-names'>
        {pokemons.map((element) => (
          <option key={element.pokedexId} value={element.name.fr} />
        ))}
      </datalist>
      {team.map((pokemon) => (
        <Card key={pokemon.pokedexId} data-slot={pokemon.pokedexId}>
          <div>
            <Image
              className='rounded-t-lg'
              src={pokemon.sprites.regular}
              alt=''
              width={64}
              height={64}
            />
          </div>
          <h5>{pokemon.name.fr}</h5>
        </Card>
      ))}
    </div>
  );
};

export { SelectPokemon };
