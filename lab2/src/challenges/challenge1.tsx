import { Fragment } from "react"
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

// Challenge : add header for the table
const Challenge = () => {
    return (
        <Fragment>
            <h4>Let's learn JSX Rendering</h4>
           
            <p>Implement header for the table</p>
            <table>
                <thead>
                    <NotImplemented/>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            {
                                Object.keys(user).map((key, index) => (
                                    <td key={index}>
                                        {user[key]}
                                    </td>
                                ))
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
            <h4>Reference</h4>

            <p><a target="_blank" href="https://reactjs.org/docs/introducing-jsx.html">https://reactjs.org/docs/introducing-jsx.html</a></p>
        </Fragment>)
}

export default { title: 'JSX', challenge: Challenge }