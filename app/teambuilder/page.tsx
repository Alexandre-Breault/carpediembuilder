import Main from "@/components/main";
import Image from "next/image";
import { env } from "node:process";
import React from "react";

async function getData() {
  const res = await fetch(env.NEXT_POKE_API + "api/v2/type/", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Set() {
  const data = await getData();
  data.results.splice(18, 2);
  return (
    <Main>
      <div className='flex md items-center justify-between py-4 bg-white dark:bg-gray-800'>
        <table className='text-sm text-left'>
          <thead className='text-xs uppercase'>
            <tr className='border-b'>
              <th></th>
              {data.results.map((types: { name: string }) => (
                <th key={types.name} scope='col' className='px-3 '>
                  {types.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.results.map((types: { name: string }) => (
              <tr key={types.name} className='border-b '>
                <th scope='col' className='px-3 py-2 border-r'>
                  {types.name}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Main>
  );
}
