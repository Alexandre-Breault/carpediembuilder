import { env } from "node:process";
import { Type } from "./types/type";
/**
 * Récupère les types de Pokémon à partir de l'API en utilisant l'URL fournie.
 * @returns {Promise} Une promesse qui résout avec les données des types de Pokémon.
 * @throws {Error} Lance une erreur si la requête échoue.
 */
async function getType(): Promise<Type[]> {
  const res = await fetch(env.NEXT_POKE_API + "api/v2/type/", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  if (data && data.results) {
    return data.results;
  } else {
    throw new Error("Data structure is invalid");
  }
}
/**
 * Récupère les informations sur les Pokémon à partir de l'API en utilisant l'URL fournie.
 * @returns {Promise} Une promesse qui résout avec les données des Pokémon.
 * @throws {Error} Lance une erreur si la requête échoue.
 */
async function getPokemon(): Promise<any> {
  const res = await fetch(env.NEXT_API_POKEMON + "api/v1/pokemon", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export { getType, getPokemon };
