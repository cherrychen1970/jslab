import React from "react"
import { cloneElement, Fragment } from "react"
import { NotImplemented } from "./helper"

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

const Challenge = () => {
    return <Fragment>
        <h4>Let's make small components</h4>
        <GridView data={users}>
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="phone" />
            <WebsiteField source="website" />
            <CustomField render={(record) => `www.${record.website}`} />
            <CustomField2>
                {(record) => `www.${record.website}`}
            </CustomField2>
        </GridView>
    </Fragment>
}

// Challenge : Add header to the table
const GridView = ({ data, children }) => {
    return <Table>
        <Head />
        <Body data={data}>{children}</Body>
    </Table>
}

// example of custom table
const Table = ({ children }) => (
    <table cellPadding={8} style={{ border: "solid 1px black", borderCollapse: 'collapse' }}>
        {children}
    </table>)

const Head = () => {
    return <NotImplemented />
}

const Body = ({ data, children }) => {
    return <tbody>
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
}
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

// Challenge: create mailto link field
const EmailField = ({ record, source }: any) => {
    return <NotImplemented/>
}

// Challenge: create http web link field
const WebsiteField = ({ record, source }: any) => {
    return <NotImplemented/>
}

// this is example of render prop
const CustomField = ({ record, render }: any) => {
    return render ? <Fragment>{render(record)}</Fragment> : null
}

// Challenge : implement FunctionField to use children prop for rendering record.
const CustomField2 = ({ record, children }: any) => {
    return <NotImplemented/>
}

export default { title: 'Component', challenge: Challenge }