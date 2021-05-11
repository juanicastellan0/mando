import React from 'react';
import CharactersList from "./components/CharactersList";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import {Link, Breadcrumbs, Container, CssBaseline, Typography} from "@material-ui/core";
import {MuiThemeProvider} from "@material-ui/core";
import theme from "./themeConfig";

function App() {
    return (
        <Router>
            <React.Fragment>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Container maxWidth="sm">
                        <Typography component="div"/>
                        <div>
                            <Breadcrumbs>
                                <Link color="primary" href="/">Home</Link>
                                <Link color="primary" href="/characters">Characters</Link>
                            </Breadcrumbs>
                            <Switch>
                                <Route path="/characters">
                                    <Characters/>
                                </Route>
                                <Route path="/">
                                    <Home/>
                                </Route>
                            </Switch>
                        </div>
                    </Container>
                </MuiThemeProvider>
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

function Characters() {
    return <CharactersList/>;
}

export default App;
