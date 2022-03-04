import { cloneElement } from 'react'
import { Form, Field } from 'react-final-form'



const Challenge = () => {
    const onSubmit = async values => {
        window.alert(JSON.stringify(values, null, 2))
    }
    return (
        <SimpleForm
            onSubmit={onSubmit}
            record={{ address: 'John' }}
        //validate={validate}
        >
            <TextInput name='firstName' placeholder="firstName" />
            <TextInput name='address' />
            <NumberInput name="age" initialValue={30} />
            <DateInput name="birthday" />
            <SelectInput name="sex" choices={choices} optionText={(choice)=>`${choice.name}`}/>
            <BooleanInput name="" />
        </SimpleForm>)
}

export const SimpleForm = ({ record = {}, onSubmit, validate = undefined, children }) => {
    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    {children.map(child =>
                        child && cloneElement(child,
                            {
                                key: child.props.name,
                                record: record,
                                initialValue: record[child.props.name]
                            }
                        )
                    )}
                    <SubmitButton />
                </form>
            )}
        />)
}

export const SubmitButton = ({ label = "Submit" }) => <button type="submit">{label}</button>

export const TextInput = (props) => {
    return <div>
        <label>{props.name}</label>
        <Field {...props} type="text" component="input" />
    </div>
}

export const NumberInput = (props) => {
    return <div>
        <label>{props.name}</label>
        <Field {...props} type="number" component="input" />
    </div>
}

export const DateInput = (props) => {
    return <div>
        <label>{props.name}</label>
        <Field {...props} type="date" component="input" />
    </div>
}

// challenge : implement optionText to support renderProp optionText = (record)=>{}
export const SelectInput = ({ name, choices, optionText="name", optionValue = "id", ...props }:any) => {
    return <div>
        <label>{name}</label>
        <Field name={name} {...props} component='select' >
            {
                choices.map((choice, index) =>
                    <option key={index} value={choice[optionValue]}>
                        {choice[optionText]}
                    </option>
                )
            }
        </Field>
    </div>
}

// Challenge : implement boolean input
export const BooleanInput = ({ name, ...props }) => {
    return null
}

const choices = [
    { id: 1, name: 'male' },
    { id: 2, name: 'female' }
]

export default { title: 'Form', challenge: Challenge }
