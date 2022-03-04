import axios from "axios";
import { cloneElement, createElement, Fragment, useEffect, useState } from "react"
import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom"
import { useGetList, useGetOne } from "./Challenge2";


// data provider
const url = "http://localhost:5000"

const Challenge = () => {
    return <div>
        <ul>
            <ResourceMenu name="users" />
            <ResourceMenu name="posts" />
        </ul>
        <div>
            <ResourceRoute name="users" list={UserList} show={UserShow} />
            <ResourceRoute name="posts" list={PostList} show={PostShow} />
        </div>
    </div>
}

const ResourceMenu = ({ name }) => {
    let match = useRouteMatch();
    return <Fragment>
        <li>
            <Link to={`${match.url}/${name}`}>{name}</Link>
        </li>
    </Fragment>
}

const ResourceRoute = ({ name, list=null, show=null, create=null, edit=null }:any) => {
    let match = useRouteMatch();
    return <Switch>
        {create && <Route key={name} path={`${match.path}/${name}/create`} render={
            renderProps => createElement(create, { resource: name })
        } />}
        {show && <Route key={name} path={`${match.path}/${name}/show/:id`} render={
            renderProps => createElement(show, { resource: name })
        } />}
        {edit && <Route key={name} path={`${match.path}/${name}/:id`} render={
            renderProps => createElement(edit, { resource: name })
        } />}
        {list && <Route key={name} path={`${match.path}/${name}`} render={
            renderProps => createElement(list, { resource: name })
        } />}
    </Switch>
}

const UserList = ({ resource }) => {
    const data = useGetList(resource)
    return (
        <div>
            <ul style={{ width: 256 }}>
                {data.map((record: any) => (
                    <li key={record.id}>
                        <span> {record.id}: {record.name} </span>
                        <ShowButton id={record.id} />
                    </li>
                ))}
            </ul>
        </div>)
}

const PostList = ({ resource }) => {
    const data = useGetList(resource)
    return (
        <div>
            <ul style={{ width: 256 }}>
                {data.map((record: any) => (
                    <li key={record.id}>
                        <span> {record.id}: {record.title} </span>
                        <ShowButton id={record.id} />
                    </li>
                ))}
            </ul>
        </div>)
}

const ShowButton = ({ id }) => {
    let match = useRouteMatch();
    return <Link to={`${match.url}/show/${id}`}>Show</Link>
}

// Challenge : use useGetOne
const UserShow = ({ resource }) => {
    return <span>Not Implemented</span>
}

// Challenge : use useGetOne
const PostShow = ({ resource }) => {
    return <span>Not Implemented</span>
}
export default { title: 'Routing', challenge: Challenge }
