import React, {useEffect, useState} from "react";
import axios from "axios";

function PokemonCard({pokemonurl}) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(pokemonurl);

                if (response.status === 200) {

                    const data = response.data
                    // console.log(data)
                    setPokemonData(data)
                } else {
                    console.error('Failed to fetch Pokemon data');
                }
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        };

        fetchData();
    }, []);

    // console.log(pokemonData)
    return (
        <>
        { pokemonData &&
            <div>
            <h1 > Pokemon Details</h1>

            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
            <h2>Moves: {pokemonData.moves.length}</h2>
            <h2>Weight: {pokemonData.weight}</h2>
            {/*<h2>Abilities: {pokemonData.abilities[0].ability.name}</h2>*/}
            </div>

}

</>
)
}

export default PokemonCard

