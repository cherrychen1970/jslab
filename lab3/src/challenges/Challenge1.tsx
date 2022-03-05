import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

// data provider
const url = "http://localhost:5000"

// Challenge : sample fetches single user. change code to fetch users and display list.

const Challenge = () => {
    let match = useRouteMatch();
    const [user, setUser] = useState<any>(null)
    const [users, setUsers] = useState<any>(null)

    useEffect(() => {
        dataProvider.getList('users')
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h4>Let's learn how to fetch data </h4>
            {user && <ShowView record={user} render={(record) => `${record.id}: ${record.name}`} />}
            {users && <ListView
                basePath={match.url}
                data={users}
                renderItem={(record) => `${record.id}: ${record.name}`}
            />}
        </div>
    )
}

// Challenge : 
export const dataProvider = {
    getList: async (resource, filterValues = {}, perPage = 10) => {
        try {
            let params = { ...filterValues, _limite: perPage }
            const response = await axios.get(`${url}/${resource}`, { params: params });
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    // imeplement getone
    getOne: async (resource, id) => {
        try {
            const response = await axios.get(`${url}/${resource}/${id}`);
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    // imeplement getone
    create: async (resource, values) => {
        try {
            const response = await axios.post(`${url}/${resource}`, values);
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    // imeplement getone
    update: async (resource, id, values) => {
        try {
            const response = await axios.put(`${url}/${resource}/${id}`, values);
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    // imeplement getone
    delete: async (resource, id) => { },
}

export const ShowView = ({ record, render }) => {
    return <span> {render(record)} </span>
}

export const ListView = ({ basePath = '', data, hasShow = false, hasEdit = false, hasCreate=false,
    renderItem = (r) => `${r.id}: ${r.name}`
}) => {
    return (data && data.length > 0) ?
        <div style={{ width: '50%', display: 'inline-block' }}>
            <h3>List </h3>
            {hasCreate&& <Link to={`${basePath}/create`}>Create</Link>}
            <ul style={{ width: 256 }}>
                {data.map((record: any) => (
                    <li key={record.id}>
                        <span> {renderItem(record)} </span>
                        {hasShow && <ShowButton basePath={basePath} id={record.id} />}
                        {hasEdit && <EditButton basePath={basePath} id={record.id} />}
                        <DeleteButton basePath={basePath} id={record.id} />
                    </li>
                ))}
            </ul>
        </div> : null
}

export const ShowButton = ({ basePath, id }) => {
    return <Link to={`${basePath}/show/${id}`}>Show</Link>
}

export const EditButton = ({ basePath, id }) => {
    return <Link to={`${basePath}/${id}`}>Edit</Link>
}

export const DeleteButton = ({ basePath, id }) => {

    return <button type="button" >Delete</button>
}

export const FlexDiv = ({ fullWidth = false, children }) =>
    (<div style={{ display: 'inline-flex', width: ` ${fullWidth && '100%'}`, border: 'solid 1px solid' }}>{children}</div>)


export default { title: 'Data', challenge: Challenge }
