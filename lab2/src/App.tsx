import React, { createElement, useState } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import challenges from './challenges'

const App = () => {
    return (
        <BrowserRouter>
            <div style={{ display: 'flex' }}>
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
                <main>
                    <Switch>
                        {Object.keys(challenges).map(x => (
                            <Route key={x} path={`/${x}`} render={
                                renderProps =>
                                    <div style={{ marginLeft: 16, width:'100%' }}>
                                        <h2  style={{ borderBottom:"solid 2px #555555" }}  >{x}: {challenges[x].title}</h2>
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