import { fetchPokedexData } from "./lib/data";
import PokemonList from "./ui/pokemon-list";

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      page?: string;
    };
  }){
    const currentPage = Number(searchParams?.page) || 1;
    return(
        <main className="container">
            <div className="wrapper">
                <PokemonList page={currentPage}></PokemonList>
            </div>
        </main>
    )
}