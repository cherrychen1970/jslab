import axios from "axios";
import { useState } from "react";
import { useGetOne } from "./Challenge2";
import { SimpleForm, TextInput } from "./Challenge4"

const url = "http://localhost:5000"

const Challenge = () => {
    const user = useGetOne('users', 1)

    // implement put request to edit user using axios
    const update = async (values) => {
        alert("not implemented")
    }

    const onSubmit = async (values) => {
        await update(values)
    }

    return <div>
        <SimpleForm onSubmit={onSubmit} record={user}>
            <TextInput name='username' />
            <TextInput name='name' />
            <TextInput name='email' />
            <TextInput name='website' />
            <TextInput name='address.street' />
            <TextInput name='address.city' />
        </SimpleForm>
    </div>
}

export default { title: 'Edit Record', challenge: Challenge }
