import { cloneElement, useState } from "react";
import { Form } from "react-final-form";
import { ListView } from "./Challenge1";
import { useGetList } from "./Challenge2";
import { TextInput } from "./Challenge4"

const Challenge = () => {
    const [filterValues, setFilterValues] = useState({})
    const users = useGetList('users',filterValues)

    const onSubmit = async (values) => {
        setFilterValues(values)
    }

    return <div>
        <Filter filters={filters} onSubmit={onSubmit} />
        {users && <ListView data={users} />}
    </div>
}

const filters = [
    <TextInput name='name_like' defaultValue="john" />,
    <TextInput name='email' />
]

export const Filter = ({ filters, onSubmit }) => {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    {
                        // clone inputs
                        filters.map(f =>
                            f && cloneElement(f,
                                {
                                    key: f.props.name,
                                    initialValue: f.props.defaultValue,
                                    onKeyPress: (e) => {
                                        e.key === 'Enter' && handleSubmit(e)
                                    }
                                }
                            )
                        )}
                </form>
            )}
        />)
}

export default { title: 'Filtering', challenge: Challenge }
