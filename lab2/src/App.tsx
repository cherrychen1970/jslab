import React, { createElement, useState } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import challenges from './challenges'

const App = () => {
    return (
        <BrowserRouter>
            <div style={{margin:16}}>
                <nav>
                    <ul>
                        {Object.keys(challenges).map(x => (
                            <li key={x}>
                                <Link to={`/${x}`}>{x}</Link>
                            </li>
                        ))
                        }
                    </ul>
                </nav>
                <Switch>
                    {Object.keys(challenges).map(x => (
                        <Route key={x} path={`/${x}`} render={
                            renderProps => createElement(challenges[x])
                        } />
                    ))
                    }
                </Switch>
            </div>
        </BrowserRouter>

    );
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error: error })
        //log the error to an error reporting service
    }

    render() {
        const { error }: any = this.state
        return error ? <h1>Oops, something went wrong.</h1> :
            this.props.children;
    }
}

export default App