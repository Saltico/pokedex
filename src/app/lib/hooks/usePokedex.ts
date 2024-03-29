'use client'
import {useState} from 'react'
import { fetchAllPokedexData } from '../data';

interface Pokedex {
    name: string;
    url: string;
  }

const usePokedex = (page: number) => {
    const [pokedex, setPokedex] = useState([]);

    const loadPokedex = async () => {
        const pokemonList = await fetchAllPokedexData(page);
        const newPokemonList = pokemonList.results.map((pokemon: Pokedex) => pokemon.name);
        setPokedex((prevList) => [...prevList, ...newPokemonList]);
        console.log(newPokemonList)
        return newPokemonList
      };
}

export default usePokedex;