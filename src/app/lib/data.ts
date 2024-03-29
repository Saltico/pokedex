import { unstable_noStore as noStore } from 'next/cache';

export async function fetchAllPokedexData(page: number){
    noStore();
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${12*page}`)
        const result = await response.json();
        if (response) return result.results;
    } catch (error){
        console.error('Database Error:', error);
        throw new Error('Failed to fetch pokemon.');
    }
}

export async function fetchPagPokedexData(page: number){
    noStore();
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${12*(page-1)}&limit=12`)
        const result = await response.json();
        if (response) return result.results;
    } catch (error){
        console.error('Database Error:', error);
        throw new Error('Failed to fetch pokemon.');
    }
}

export async function fetchPokeAPI(url: string){
    noStore();
    try{
        const response = await fetch(url)
        const result = await response.json();
        if (response) return result
    } catch (error){
        console.error('Database Error:', error);
        throw new Error('Failed to fetch PokeApi URL');
    }
}