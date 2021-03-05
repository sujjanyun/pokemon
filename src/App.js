import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PokemonList from './components/PokemonList';
import PokemonProfile from './components/PokemonProfile';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      characterDetails: []
    };
  }

  async componentDidMount () {
    const url = `https://pokeapi.co/api/v2/pokemon/`;
    const characterData = await fetch(url)
      .then(response => response.json());
    this.setState({
      characters: characterData.results,
    });
  }
  
  render() {
    const { characters } = this.state
    return (
      <div className="App">
        <header className = "App-header">
          <h1>Pokemon, I Choose You!</h1>
        </header>
        <Router>
          <Route exact path="/">
            <h2>Select a Pokemon</h2>
              {characters.length !== 0 ?
              <PokemonList characters={characters}/> :
              <h3>Loading Pokemon...</h3>}
          </Route>
          <Route path="/character/:id">
            {characters.length !== 0 ?
            <PokemonProfile characters={characters}/> :
            <h3>Loading Pokemon...</h3>}
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;