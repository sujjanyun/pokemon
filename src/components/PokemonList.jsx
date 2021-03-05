import { Link } from "react-router-dom";

const PokemonList = ({characters}) => {
    console.log("This is the RESULTS: ", characters);
    return (
        <div>
            {characters.map((character, index) => (
                <Link to={`/character/${index}`}>
                    <h3 key={index}>{character.name}</h3>
                </Link>
            ))}
        </div>
    )
}

export default PokemonList;