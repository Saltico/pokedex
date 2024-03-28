import { fetchPokedexData } from "../lib/data";
import PokemonCard from "./pokemon-card";
import {v4 as uuidv4} from "uuid";
import { Pokemon } from "../lib/definitions";

export default async function PokemonList({page}: {page: number}){
    
    const pokemonList = await fetchPokedexData(page);
    const uniqueId = uuidv4();
    return(
        <section className="section">
            <ul className="result">
            {pokemonList.map((pkmn: JSON) => (
                <li key={uniqueId}>
                    <PokemonCard url={pkmn.url}></PokemonCard>
                </li>
                ))
            }
            </ul>
        </section>
        
    )
}