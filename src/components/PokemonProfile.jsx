import { useParams } from "react-router-dom";

const PokemonProfile = ({characters}) => {
    const { id } = useParams();
    const character = characters[id];
    console.log("character name", character)
    console.log("character url", character.url)
    return (
        <div>
            <h1>{character.name}</h1>
            <p>{character.url}</p>
        </div>
    )
}

export default PokemonProfile;