import { fetchPokeAPI } from "../lib/data"
import { Pokemon } from "../lib/definitions";
import Image from 'next/image';
import PokemonStats from "../ui/info/pokemon-stats";
import PokemonBio from "../ui/info/pokemon-bio";
import BackButton from "../ui/info/back-button";

interface types {
  type:{

      name: string;
      url: string;
  }
}

export default async function InfoPage({
    searchParams,
  }: {
    searchParams?: {
      id?: string;
    };
  }){

    const currentId = Number(searchParams?.id) || '1';
    const pkmnData: Pokemon = await fetchPokeAPI(`https://pokeapi.co/api/v2/pokemon/${currentId}`)
    const img = pkmnData.sprites.other['official-artwork'];
    const name = pkmnData.name;
    const id = String(pkmnData.id);
    const cries = pkmnData.cries.latest;
    const types = pkmnData.types;

    let pkmnId = id;
    if (id.length < 4) {
        pkmnId = id.padStart(4, '0');
      }
    
    return(
        <div>
          <BackButton></BackButton>
            <div className="pkmn-title">
                {name.charAt(0).toUpperCase() + name.slice(1)}
                <span> N° {pkmnId}</span>
            </div>
            <section className="pkmn-data">
                <div className="left-col">
                    <Image
                    src={img.front_default}
                    alt="pkmn front image"
                    width={600}
                    height={600}
                    className="pkmn-img"
                    />
                    <audio controls style={{margin: '0 auto', padding: '6px 0'}}>
                      <source src={cries} type="audio/ogg" />
                      Your browser does not support the audio element.
                    </audio>
                    <PokemonStats></PokemonStats>
                </div>
                <div className="right-col">
                  <div>
                    <p className="pkmn-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. 
                    </p>
                  </div>
                  <PokemonBio pkmnData={pkmnData}></PokemonBio>
                  <p className="pkmn-description">Type</p>
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
                                        }`,
                                borderRadius: '5px',
                                fontSize: '100%',
                                lineHeight: '25px',
                    }}>
                        { el.type.name.charAt(0).toUpperCase() + el.type.name.slice(1)}
                    </span>
                ))}
                </div>
            </section>
            
        </div>
    )
}