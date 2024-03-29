import { Pokemon } from "@/app/lib/definitions";

export default function PokemonBio({pkmnData}:{pkmnData: Pokemon}){

    const addCommaBeforeLastChar = (str: string) => {
        if (str.length === 1) {
          return '0,' + str;
        } else {
          return str.slice(0, -1) + ',' + str.slice(-1);
        }
      };
    return(
        <div className="pkmn-bio">
            <section style={{minHeight: "243px", display: 'flex', flexWrap: 'wrap', padding: '10px 5px'}}>
                <div className="left-col">
                    <ul>
                        <li>
                            <span className="title">Height</span>
                            <span className="value">{addCommaBeforeLastChar(pkmnData.height?.toString())} m</span>
                        </li>
                        <li>
                            <span className="title">Weight</span>
                            <span className="value">{addCommaBeforeLastChar(pkmnData.weight?.toString())} kg</span>
                        </li>
                        <li>
                            <span className="title">Gender</span>
                            <span className="value">
                                <i className="icon icon_male_symbol"></i>
                                <i className="icon icon_female_symbol"></i>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="right-col">
                    <ul>
                        <li>
                            <span className="title">Category</span>
                            <span className="value">No info</span>
                        </li>
                        <li>
                            <span className="title">Abilities</span>
                            <ul className="attribute-list">
                                <li>
                                    <a>
                                        <span className="value">{pkmnData.abilities[0].ability.name.charAt(0).toUpperCase() + pkmnData.abilities[0].ability.name.slice(1)}</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}