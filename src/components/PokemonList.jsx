import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components'

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

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

export default PokemonList;