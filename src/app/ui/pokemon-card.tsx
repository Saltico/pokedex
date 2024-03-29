import Image from 'next/image';
import Link from 'next/link';
import { Pokemon } from '../lib/definitions';
import { fetchPokeAPI } from '../lib/data';

interface types {
    type:{

        name: string;
        url: string;
    }
}

export default async function PokemonCard({url}:{url: string}){
    const pkmnData: Pokemon = await fetchPokeAPI(url)

    const img= pkmnData.sprites.other['official-artwork'];
    const name = pkmnData.name;
    const id = String(pkmnData.id);
    const types = pkmnData.types;

    let pkmnId = id;
    if (id.length < 4) {
        pkmnId = id.padStart(4, '0');
      }

    return(
        <div className='card'>
            <Link
            href={{
                pathname: '/info',
                query: {id: id},
            }}
            >
                <Image
                src={img.front_default}
                alt="pkmn front image"
                width={200}
                height={200}
                className="pkmn-img"
                />
            </Link>
            <div className='pkmn-info'>
                <span className='id'>N° {pkmnId}</span>
                <h5>{ name.charAt(0).toUpperCase() + name.slice(1)}</h5>
                {types.map((el: types)=>(
                    <span className='type-badge' 
                        key={id}
                        style={{background: `var(--type-${el.type.name})`,
                                color: `${  el.type.name === 'poison' ||
                                            el.type.name === 'fire' ||
                                            el.type.name === 'water' ||
                                            el.type.name === 'bug' ||
                                            el.type.name === 'fight' ||
                                            el.type.name === 'psychic' ||
                                            el.type.name === 'rock' ||
                                            el.type.name === 'ghost' ||
                                            el.type.name === 'dragon' ||
                                            el.type.name === 'dark' 
                                            ? '#fff' : "#212121"
                                        }`
                    }}>
                        { el.type.name.charAt(0).toUpperCase() + el.type.name.slice(1)}
                    </span>
                ))}
            </div>  
        </div>
        
        
    )
}