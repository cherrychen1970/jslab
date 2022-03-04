import React, { createElement, useState } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import challenges from './challenges'

const App = () => {
    return (
        <BrowserRouter>
            <div style={{ margin: 16, display: 'flex' }}>
                <nav>
                    <ul>
                        {Object.keys(challenges).map(x => (
                            <li key={x}>
                                <Link to={`/${x}`}><h4>{x}: {challenges[x].title}</h4> </Link>
                            </li>
                        ))
                        }
                    </ul>
                </nav>
                <main style={{ marginLeft: 16, display: 'flex' }}>
                    <Switch>
                        {Object.keys(challenges).map(x => (
                            <Route key={x} path={`/${x}`} render={
                                renderProps =>
                                    <div>
                                        <h4>{x}: {challenges[x].title}</h4>
                                        {createElement(challenges[x].challenge)}
                                    </div>
                            } />
                        ))
                        }
                    </Switch>
                </main>
            </div>
        </BrowserRouter>

    );
}

export default App