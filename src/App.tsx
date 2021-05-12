import React from 'react';
import CharacterShow from "./components/CharacterShow";
import CharactersList from "./components/CharactersList"
import './App.css';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom"

function App() {
    return (
        <Router>
            <React.Fragment>
                        <div>
                            <div className='links'>
                                <Link to="/">Home</Link>
                                <br/>
                                <Link to="/characters">Characters</Link>
                            </div>
                            <Switch>
                                <Route path="/characters">
                                    <CharactersList/>
                                </Route>
                                <Route path="/characters/:characterId">
                                    <CharacterShow/>
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
