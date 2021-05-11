import React, {Component} from "react";
import axios from "axios";

class Character {
    name: string = '';
    birth_year: string = '';
    eye_color: string = '';
    gender: string = '';
    hair_color: string = '';
    height: string = '';
    mass: string = '';
    skin_color: string = '';
}

export default class CharactersList extends Component {
    state = {characters: Array<Character>()}
    charactersUrl = 'https://swapi.dev/api/people/';

    setCharacters() {
        axios.get(this.charactersUrl).then(response => {
            this.setState({characters: response.data.results})
        });
    }

    async componentDidMount() {
        await this.setCharacters();
    }

    render() {
        return (
            <div>
                <h1>Characters</h1>
                <div>
                    <ul>
                        {
                            this.state.characters.map(
                                (character: Character) =>
                                    <li>{character.name}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}