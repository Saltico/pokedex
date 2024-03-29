import PaginationButton from "./ui/pagination-button";
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
      <section className="section">
        <PokemonList page={currentPage}></PokemonList>
        <PaginationButton></PaginationButton>
      </section>
                
    )
}