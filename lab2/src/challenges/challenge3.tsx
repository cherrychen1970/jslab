import { Fragment, useState } from "react"

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

// Challenge : highlight item with different color than the rest when clicked,
const Challenge = () => {
    const [selectedId, setSelectedId] = useState(0)

    const handleClick = (id) => { 
        alert('not implemented') 
    }

    return (
        <Fragment>
            <h4>Let's learn how state works </h4>
            <ul style={{ width: 256 }}>
                {users.map(user => (
                    <li
                        key={user.id}
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleClick(user.id)}
                    >
                        <ColorText color="grey">
                            {user.id}: {user.name} (click me)
                        </ColorText>
                    </li>
                ))}
            </ul>
        </Fragment>)
}

const ColorText = ({ children, color }) => {
    return <span style={{ color }} >{children}</span>
}

export default { title: 'State', challenge: Challenge }