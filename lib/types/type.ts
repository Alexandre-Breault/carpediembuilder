export type Pokemon = {
  pokedexId: number;
  generation: number;
  category: string;
  name: {
    fr: string;
    en: string;
    jp: string;
  };
  sprites: {
    regular: string;
    shiny: string | null;
    gmax: string | null;
  };
  types:
    | {
        name: string;
        image: string;
      }[]
    | null;
  talents:
    | {
        name: string;
        tc: boolean;
      }[]
    | null;
  stats: {
    hp: number;
    atk: number;
    def: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
  } | null;
  resistances:
    | {
        name: string;
        multiplier: number;
      }[];
  evolution: {
    pre: null;
    next:
      | {
          pokedexId: number;
          name: string;
          condition: string;
        }[]
      | null;
    mega: null;
  };
  height: string | null;
  weight: string | null;
  egg_groups: string[] | null;
  sexe: {
    male: number;
    female: number;
  } | null;
  catch_rate: number | null;
  level_100: number | null;
  forme: any | null; // Le type réel dépendra de ce que contient "forme"
};

export type Type = {
  name: string | null;
  url: string | null;
};
