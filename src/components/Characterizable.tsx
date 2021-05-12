import React from 'react';
import {Link} from "react-router-dom";

export interface Characterizable {
    name: string;
    nick: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
}

interface Characterer {
    character: Characterizable | undefined;
}

const Character = (props: Characterer) => {
    return  <Link to={ "/characters/" + props.character?.nick }>
                <img className="pic"
                     src={process.env.PUBLIC_URL + "/pics/" + props.character?.nick + ".png"}
                     alt={props.character?.name}
                     width="200" height="180"/>
            </Link>
}

export default Character;

/*

 */
