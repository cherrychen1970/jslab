import axios from "axios";
import { useState } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { dataProvider } from "./Challenge1";
import { useGetOne } from "./Challenge2";
import { ResourceRoute, UserList } from "./Challenge3";
import { SimpleForm, TextInput } from "./Challenge4"

const url = "http://localhost:5000"

const Challenge = () => {
    let match = useRouteMatch();
    return <ResourceRoute basePath={match.path} name="users" list={UserList} edit={UserEdit} />
}

const UserEdit = ({ resource }) => {
    let params: any = useParams();
    const user = useGetOne('users', params.id)

    // implement put request to edit user using axios
    const update = async (values) => {
        //alert("not implemented")
        await dataProvider.update(resource, params.id, values)
    }

    const onSubmit = async (values) => {
        await update(values)
    }

    return <div><h3>Edit User </h3>
        <SimpleForm onSubmit={onSubmit} record={user}>
            <TextInput name='username' />
            <TextInput name='name' />
            <TextInput name='email' />
            <TextInput name='website' />
        </SimpleForm>
    </div>
}

export default { title: 'Edit Record', challenge: Challenge }
