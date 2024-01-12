import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from "./components/PokemonCard.jsx";

    const PokemonDetails = () => {
        const [pokemonData, setPokemonData] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    // Make a request to the Pokemon API
                    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');

                    // Check if the request was successful (status code 200)
                    if (response.status === 200) {
                        // Parse the JSON response
                        const data = response.data
                        console.log(data)
                        setPokemonData(data.results)
                    } else {
                        // If the request was not successful, log an error
                        console.error('Failed to fetch Pokemon data');
                    }
                } catch (error) {
                    // Handle any exceptions that may occur
                    console.error('Error fetching Pokemon data:', error);
                }
            };

            // Call the fetchData function when the component mounts
            fetchData();
        }, []); // Empty dependency array means this effect runs once after the initial render

        return (
            <div>

                {pokemonData && pokemonData.map((pokemon) =>
                <li key={pokemon.name}>{
                    <PokemonCard pokemonurl={pokemon.url}/> }</li>)
                }
                {/*<h1>Pokemon List</h1>*/}
                {/*<ul>*/}
                {/*    {pokemonData.map((pokemon, index) => (*/}
                {/*        <li key={index}>{pokemon}</li>*/}
                {/*    ))}*/}
                {/*</ul>*/}
              {/*<PokemonCard pokemonurl={pokemonData[10].url}/>*/}
            </div>
        );
    };

    export default PokemonDetails;




// function App() {
//
//   return (
//     <>
//         <navbar />
//         <routes>
//       <h1>Gotta catch em all!</h1>
//         </routes>
//
//     </>
//   )
// }
//
// //export default App
