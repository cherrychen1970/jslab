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
    getList: async (resource, perPage = 10) => {
        try {
            const response = await axios.get(`${url}/${resource}?_limit=${perPage}`);
            return response.data
        } catch (error: any) {
            alert(error);
        }
    },
    // imeplement getone
    getOne: async (resource, id) => { },
    // imeplement getone
    create: async (resource, values) => { },
    // imeplement getone
    update: async (resource, id, values) => { },
    // imeplement getone
    delete: async (resource, id) => { },
}

export const ShowView = ({ record, render }) => {
    return <span> {render(record)} </span>
}

export const ListView = ({ basePath, data, renderItem }) => {
    return data && data.length > 0 &&
        <div>
            <h3>List </h3>
            <ul style={{ width: 256 }}>
                {data.map((record: any) => (
                    <li key={record.id}>
                        <span> {renderItem(record)} </span>
                        <ShowButton basePath={basePath} id={record.id} />
                    </li>
                ))}
            </ul>
        </div>
}

const ShowButton = ({ basePath, id }) => {
    return <Link to={`${basePath}/show/${id}`}>Show</Link>
}

export default { title: 'Data', challenge: Challenge }