"use client";
import React, { ChangeEvent, useState } from "react";
const Select = ({ data }: { data: string }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.target.value);
    SetPkmn(e.target.value);
  };
  const [selectPkmn, SetPkmn] = useState("");
  return (
    <input
      className='text-black'
      type='text'
      value={selectPkmn}
      placeholder='Nom Pokemon entrée'
      list={data}
      name='search_Pokemon1'
      tabIndex={1}
      onChange={handleChange}
    ></input>
  );
};

export { Select };
