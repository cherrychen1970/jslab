
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
export default () => {
    return (
        <table>
            <thead>
                
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
        </table>)
}