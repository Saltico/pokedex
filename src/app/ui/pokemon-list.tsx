import { fetchPokedexData } from "../lib/data";
import PokemonCard from "./pokemon-card";
import Pagination from './pagination-button';

export default async function PokemonList({page}: {page: number}){
    
    const pokemonList = await fetchPokedexData(page);
    return(
        <section className="section">
            <ul className="result">
            {pokemonList.map((pkmn: JSON) => (
                <li key={pkmn.name}>
                    <PokemonCard url={pkmn.url}></PokemonCard>
                </li>
                ))
            }
            </ul>
            <Pagination></Pagination>
        </section>
        
    )
}