import React from "react"
import { cloneElement, Fragment } from "react"

const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net"
    }
]

// Let's make small components

export default () => {
    return <GridView data={users}>
        <TextField source="name" />
        <TextField source="username" />
        <TextField source="email" />
        <TextField source="phone" />
        <CustomField render={(record) => `www.${record.website}`} />
        <CustomField2>
            {(record) => `www.${record.website}`}
        </CustomField2>
    </GridView>
}

// Challenge : Add header to the table
const GridView = ({ data, children }) => {
    return <Table>
        <tbody>
            {data.map(record => (
                <tr key={record.id}>
                    {
                        children.map((child, index) => (
                            <Cell key={index}>
                                {cloneElement(child, { record })}
                            </Cell>
                        ))
                    }
                </tr>
            ))}
        </tbody>
    </Table>
}

// example of custom table
const Table = ({ children }) => (
    <table cellPadding={8} style={{ border: "solid 1px black", borderCollapse: 'collapse' }}>
        {children}
    </table>)

// example of custom cell
const Cell = ({ children }) => (
    <td style={{ border: "solid 1px black" }}>
        {children}
    </td>
)

// example of field
const TextField = ({ record, source }: any) => {
    return <span>{record[source]}</span>
}

// this is example of render prop
const CustomField = ({ record, render }: any) => {
    return render ? <Fragment>{render(record)}</Fragment> : null
}

// Challenge : implement FunctionField to use children prop for rendering record.
const CustomField2 = ({ record, children }: any) => {
    return <span>Error</span>
}