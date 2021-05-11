import React, {useEffect, useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom"
import axios from "axios";

function App() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })
    const increase = () => {
        setCount(count + 1)
    }

    return (
        <Router>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={increase}>Click me</button>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/characters">Characters</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/characters">
                        <Characters/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Characters() {
    let people;
    const peopleUrl = 'https://swapi.dev/api/people/'

    const getPeople = () => {
        axios.get(peopleUrl).then(response => {
            people = response;
        });
    }

    return (
        <h2>Characters</h2>
    );
}

export default App;
