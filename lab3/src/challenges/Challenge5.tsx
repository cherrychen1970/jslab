import axios from "axios";
import { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { dataProvider } from "./Challenge1";
import { ResourceRoute, UserList } from "./Challenge3";
import { SimpleForm, TextInput } from "./Challenge4"

const url = "http://localhost:5000"

const Challenge = () => {
    let match = useRouteMatch();
    return <ResourceRoute basePath={match.path} name="users" list={UserList} create={UserCreate} />
}

const UserCreate = ({ resource }) => {
    const [user, setUser] = useState<any>({})

    // implement post request to create user using axios
    const create = async (values) => {
        //alert("not implemented")
        await dataProvider.create(resource, values)
    }

    const onSubmit = async (values) => {
        await create(values)
    }

    return (
        <div>
            <h3>Create User</h3>
            <SimpleForm onSubmit={onSubmit} record={{ firstName: 'john' }}>
                <TextInput name='name' />
                <TextInput name='email' />
            </SimpleForm>
        </div>)
}

export default { title: 'Create Record', challenge: Challenge }
