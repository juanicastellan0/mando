import React, {useEffect} from "react";
import axios from "axios";
import "./CharactersList.css";
import Character, {Characterizable} from "./Characterizable";

interface Pic {
    name: string;
    nick: string;
}

const pics: Array<Pic> = [
    {name: "Luke Skywalker", nick: "luke"},
    {name: "C-3PO", nick: "c3po"},
    {name: "R2-D2", nick: "r2d2"},
    {name: "Darth Vader", nick: "darth"},
    {name: "Leia Organa", nick: "leia"},
    {name: "Owen Lars", nick: "owen"},
    {name: "Beru Whitesun lars", nick: "beru"},
    {name: "R5-D4", nick: "r5d4"},
    {name: "Biggs Darklighter", nick: "biggs"},
    {name: "Obi-Wan Kenobi", nick: "obi"}
];

interface CharactersListProps {
    onChange: CallableFunction,
    characters: Array<Characterizable>
}

const CharactersList = (props: CharactersListProps) => {
    const charactersUrl = 'https://swapi.dev/api/people/';

    useEffect(() => {
        let cancel = false;
        const fetchData = async () => {
            const response = await axios.get(charactersUrl);
            response.data.results.forEach((result: Characterizable) => {
                const pic = pics.find(pic => pic.name === result.name);
                if (!pic) return;
                result.nick = pic.nick;
            })
            if (!cancel) {
                props.onChange(response.data.results);
            }
        }

        fetchData().then(() => {
            // console.log('data received')
        });

        return () => {
            cancel = true;
        };
    }, [props]);


    if (props.characters.length > 0) {
        return (
            <div>
                <h1>Characters</h1>
                <div>
                    {props.characters.map((character: Characterizable, index) =>
                        <Character character={character} key={index}/>)}
                </div>
            </div>
        );
    }

    return (
        <div><h2>Loading...</h2></div>
    )
}

export default CharactersList;
