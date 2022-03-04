import axios from "axios";
import { useState } from "react";
import { SimpleForm, TextInput } from "./Challenge4"

const url = "http://localhost:5000"

const Challenge = () => {
    const [user, setUser] = useState<any>({})

    // implement post request to create user using axios
    const create = async (values) => {
        alert("not implemented")
    }

    const onSubmit = async (values) => {
        await create(values)
    }

    return <div>
        <SimpleForm onSubmit={onSubmit} record={{ firstName: 'john' }}>
            <TextInput name='name' />
            <TextInput name='email' />
        </SimpleForm>
        {user && <div>
            <h4>User Created</h4>
            {user.id}: {user.name}
        </div>}
    </div>
}

export default { title: 'Create Record', challenge: Challenge }
