import Image from 'next/image';

export default async function PokemonCard(data: string){
    const response = await fetch(data.url)
    const result = await response.json();
    const img = result.sprites.other['official-artwork'];
    const name = result.name;
    const id = await result.id;
    const types = result.types;
    return(
        <div className='card'>
            <Image
            src={img.front_default}
            alt="pkmn front image"
            width={200}
            height={200}
            className="pkmn-img"
            />
            <p>N° {id}</p>
            <h5>{name}</h5>
            {types.map((el: object)=>(
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
                            }}
                    
                    >
                    {el.type.name}
                </span>
                
            ))}
        </div>
        
        
    )
}