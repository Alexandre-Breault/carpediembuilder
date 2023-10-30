import Card from "@/components/card/card";
import { SelectPokemon } from "@/components/card/SelectPokemon";
import Main from "@/components/main";
import { getPokemon, getType } from "@/lib";
import { Pokemon } from "@/lib/types/type";
import Image from "next/image";
import React, { useContext, useState } from "react";

export default async function Set() {
  const data = await getType();
  data.splice(18, 2);
  const pokemons: Pokemon[] = await getPokemon();
  return (
    <Main>
      <SelectPokemon pokemons={pokemons} />
    </Main>
  );
}
