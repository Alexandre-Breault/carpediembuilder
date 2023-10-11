import Image from "next/image";
import { env } from "node:process";

async function getData() {
  const res = await fetch(env.NEXT_API_POKEMON + "api/v1/pokemon", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Set() {
  const data = await getData();
  data.shift();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='w-full items-center justify-between font-mono text-sm lg:flex'>
        <table className='w-full text-sm text-left'>
          <thead className='text-xs text-gray-700 uppercase'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                #
              </th>
              <th scope='col' className='px-6 py-3'>
                Nom
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              (pokemon: {
                pokedexId: number;
                name: { fr: string; en: string; jp: string };
                sprites: {
                  regular: string;
                  shiny: string | null;
                  gmax: string | null;
                };
              }) => (
                <tr key={pokemon.pokedexId}>
                  <th scope='row' className='px-6 py-4 font-medium'>
                    {pokemon.pokedexId}
                  </th>
                  <td className='px-6 py-4'>{pokemon.name.fr}</td>
                  <td className='px-6 py-4'>
                    <Image
                      className='w-10 h-10 rounded-full'
                      src={pokemon.sprites.regular}
                      alt={pokemon.name.fr}
                      width={512}
                      height={512}
                    />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
