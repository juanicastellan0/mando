import React, {useState} from 'react';
import CharacterShow from "./components/CharacterShow";
import CharactersList from "./components/CharactersList"
import './App.css';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom"
import {Characterizable} from "./components/Characterizable";

function App() {
    const [characters, setCharacters] = useState(Array<Characterizable>());

    return (
        <Router>
            <React.Fragment>
                        <div>
                            <div className='links'>
                                <div className="link"><Link to="/">Home</Link></div>
                                <div className="link"><Link to="/characters">Characters</Link></div>
                            </div>
                            <Switch>
                                <Route path="/characters" exact={true}>
                                    <CharactersList
                                        onChange={(characters: Array<any>) => setCharacters(characters)}
                                        characters={characters}/>
                                </Route>
                                <Route path="/characters/:characterId">
                                    <CharacterShow
                                        characters={characters}/>
                                </Route>
                                <Route path="/">
                                    <Home/>
                                </Route>
                            </Switch>
                        </div>
            </React.Fragment>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>Egg Education</h2>
            <img
                src="https://media.giphy.com/media/SiUV5nib8Rm4U/giphy.gif"
                alt="theForce"
                height="600"
            />
        </div>
    );
}

export default App;
