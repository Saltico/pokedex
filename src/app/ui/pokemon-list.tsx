import { fetchAllPokedexData } from "../lib/data";
import PokemonCard from "./pokemon-card";
import usePokedex from "../lib/hooks/usePokedex";

interface Pokedex {
    name: string;
    url: string;
  }

export default async function PokemonList({page}: {page: number}){

    
    const pokemonList: Pokedex = await fetchAllPokedexData(page);

    return(
            <ul className="result">
                {pokemonList.map((pkmn: JSON) => (
                    <li key={pkmn.name}>
                        <PokemonCard url={pkmn.url}></PokemonCard>
                    </li>
                    ))
                }
            </ul>
        
    )
}