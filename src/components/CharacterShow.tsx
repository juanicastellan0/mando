import React from "react";
import "./CharacterShow.css"
import Character, {Characterizable} from "./Characterizable";
import {Redirect, useParams} from "react-router-dom";

interface CharacterShowProps {
    characters: Array<Characterizable>
}

const CharacterShow = (props: CharacterShowProps) => {
    const {characterId} = useParams<{ characterId?: string | undefined }>();
    let character: Characterizable | undefined;
    const getCharacter = () => {
        if (typeof characterId === "string") {
            character = props.characters.find((character: Characterizable) => character.nick === characterId);
        }
    }

    getCharacter()

    if (character) {
        return <div>
            <Character character={ character }/>

            <div className="descriptionContainer">
                <div className="description"><span className="descriptionSpan">Name:</span> { character?.name }</div>
                <div className="description"><span className="descriptionSpan">Birth year:</span> { character?.birth_year }</div>
                <div className="description"><span className="descriptionSpan">Eye color:</span> { character?.eye_color }</div>
                <div className="description"><span className="descriptionSpan">Gender:</span> { character?.gender }</div>
                <div className="description"><span className="descriptionSpan">Hair color:</span> { character?.hair_color }</div>
                <div className="description"><span className="descriptionSpan">Height:</span> { character?.height }</div>
                <div className="description"><span className="descriptionSpan">Mass:</span> { character?.mass }</div>
                <div className="description"><span className="descriptionSpan">Skin color:</span> { character?.skin_color }</div>
            </div>
        </div>;
    }

    return <Redirect to="/characters"/>
}

export default CharacterShow;
