import { unstable_noStore as noStore } from 'next/cache';

export async function fetchPokedexData(page: number){
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