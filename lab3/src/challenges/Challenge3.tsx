import axios from "axios";
import { cloneElement, createElement, Fragment, useEffect, useState } from "react"
import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom"
import { FlexDiv, ListView, ShowView } from "./Challenge1";
import { useGetList, useGetOne } from "./Challenge2";


// data provider
const url = "http://localhost:5000"

const Challenge = () => {
    return <FlexDiv fullWidth>
        {/* Menu */}
        <div style={{ width: '20%', display: 'inline-block' }}>
            <ul>
                <ResourceMenu name="users" />
                <ResourceMenu name="posts" />
            </ul>
        </div>
        <ResourceRoute name="users" list={UserList} show={UserShow} />
        <ResourceRoute name="posts" list={PostList} show={PostShow} />
    </FlexDiv>
}

export const ResourceMenu = ({ name }) => {
    let match = useRouteMatch();
    return <li>
        <Link to={`${match.url}/${name}`}><h4>{name}</h4></Link>
    </li>
}

/* route for resource
*/
export const ResourceRoute = ({ name, list = null, show = null, create = null, edit = null, ...props }: any) => {
    let match = useRouteMatch();
    let basePath = props.basePath ? props.basePath : `${match.path}/${name}`
    return (
        <Switch>
            {list && <Route key={name} path={`${basePath}`} render={
                renderProps => <FlexDiv fullWidth> {createElement(list,
                    {
                        basePath: basePath,
                        resource: name,
                        hasShow: !!show,
                        hasEdit: !!edit,
                        hasCreate: !!create,
                    })}
                    <Switch>
                        {create && <Route key={name} path={`${basePath}/create`} render={
                            renderProps => createElement(create, { basePath: basePath, resource: name })
                        } />}
                        {show && <Route key={name} path={`${basePath}/show/:id`} render={
                            renderProps => createElement(show, { basePath: basePath, resource: name })
                        } />}
                        {edit && <Route key={name} path={`${basePath}/:id`} render={
                            renderProps => createElement(edit, { basePath: basePath, resource: name })
                        } />}
                    </Switch>
                </FlexDiv>
            } />}
        </Switch>
    )
}

export const UserList = ({ resource, ...props }: any) => {
    const data = useGetList(resource)
    return <ListView {...props} resource={resource} data={data} renderItem={(record) => `${record.id}: ${record.name}`} />
}

export const PostList = ({ resource, ...props }: any) => {
    const data = useGetList(resource)
    return <ListView {...props} resource={resource} data={data} renderItem={(record) => `${record.id}: ${record.title}`} />
}

// Challenge : use useGetOne
const UserShow = ({ resource }) => {
    const params: any = useParams()
    const record: any = useGetOne(resource, params.id)
    return <div>
        <h4>User : {params.id}</h4>
        <div>
            <label>name</label>
            <span>{record.name}</span>
        </div>
    </div>
}

// Challenge : use useGetOne
const PostShow = ({ resource }) => {
    return <span>Not Implemented</span>
}
export default { title: 'Routing', challenge: Challenge }
