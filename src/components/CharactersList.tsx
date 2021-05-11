import React, {Component} from "react";
import axios from "axios";
import {Card, CardHeader, createStyles, makeStyles, Theme} from "@material-ui/core";

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

interface Pic {
    name: string;
    fileName: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        maxWidth: 300,
    }
}))

export default class CharactersList extends Component {
    pics: Array<Pic> = [
        {name: "Luke Skywalker", fileName: "luke"},
        {name: "C-3PO", fileName: "c3po"},
        {name: "R2-D2", fileName: "r2d2"},
        {name: "Darth Vader", fileName: "darth"},
        {name: "Leia Organa", fileName: "leia"},
        {name: "Owen Lars", fileName: "owen"},
        {name: "Beru Whitesun lars", fileName: "beru"},
        {name: "R5-D4", fileName: "r5d4"},
        {name: "Biggs Darklighter", fileName: "biggs"},
        {name: "Obi-Wan Kenobi", fileName: "obi"}
    ];
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
        const { classes } = this.props;
        return (
            <div>
                <h1>Characters</h1>
                <div>
                    <ul>
                        {
                            this.state.characters.map(
                                (character: Character) =>
                                    <Card key={character.name} className={classes.root}>
                                        <CardHeader title={character.name}/>
                                        <img src=
                                                 {process.env.PUBLIC_URL + "/pics/" +
                                                 (this.pics.find(pic => pic.name === character.name)?.fileName) + ".png"}
                                             alt={character.name}
                                             width="200" height="180"/>
                                    </Card>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
