import { createContext, Fragment, useContext, useState } from "react"
import { FlexDiv, NotImplemented, Reference } from "./helper"

const chatContext = createContext({
    rooms: {},
    createRoom: (roomName) => { },
    joinRoom: (rommName, user) => { },
    roomUsers: {}
})

// Challenge : add header for the table
const Challenge = () => {
    const chat = useChatController()

    return (
        <Fragment>
            <h4>Let's make chat</h4>
            <chatContext.Provider value={chat}>
                <CreateRoom />
                <JoinRoom />
                <ChatRooms />
            </chatContext.Provider>
        </Fragment>)
}

// implement chat controller
const useChatController = () => {
    const [rooms, setRooms] = useState<any>({})

    const createRoom = (roomName) => {
        //rooms[roomName]={ users: [], messages: [] } ==> wrong!
        setRooms({ ...rooms, [roomName]: { users: [], messages: [] } })
    }

    const joinRoom = (roomName, user) => {
        const { users, messages } = rooms[roomName]
        setRooms({ ...rooms, [roomName]: { users: [...users, user], messages: [...messages, `${user} has joined the room`] } })
    }

    const [roomUsers, setRoomUsers] = useState<any>()

    return { rooms, createRoom, joinRoom, roomUsers }
}

const CreateRoom = () => {
    const { createRoom } = useContext(chatContext)
    const [roomName, setRoomName] = useState<any>()
    return (<div>
        <label>Create Room:</label>
        <input type="text" onChange={(e) => setRoomName(e.target.value)} placeholder="roomname"/>
        <button onClick={() => createRoom(roomName)} >Submit</button>
    </div>)
}

const JoinRoom = () => {
    const { rooms, joinRoom } = useContext(chatContext)
    const [roomName, setRoomName] = useState<any>()
    const [user, setUser] = useState<any>()
    return (<div>
        <label>Join Room:</label>
        <select id="resource" onChange={(e) => setRoomName(e.target.value)}>
            {
                Object.keys(rooms).map(roomName =>
                    <option key={roomName}>{roomName}</option>)
            }
        </select>
     
        <input type="text" onChange={(e) => setUser(e.target.value)} placeholder="username"/>
        <button onClick={() => joinRoom(roomName, user)} >Submit</button>
    </div>)
}

const ChatRooms = () => {
    const { rooms } = useContext(chatContext)

    return rooms && <FlexDiv fullWidth>
        {Object.keys(rooms).map(roomName =>
            <ChatRoom key={roomName} roomName={roomName} />)
        }</FlexDiv>
}

const ChatRoom = ({ roomName }) => {
    const { rooms } = useContext(chatContext)
    const room = rooms[roomName]
    const messages = room.messages
    const users = room.users

    return <div key={roomName} style={{ width: 256, border: 'solid 1px #cccccc', margin: '1em', padding: '1em' }}>
        <h4>ChatRoom: {roomName}</h4>
        <h4>Messages:</h4>
        <ul>
            {
                messages && messages.map((message, index) =>
                    <li key={index}>
                        {message}
                    </li>)
            }
        </ul>
        <h4>Users:</h4>
        <ul>
            {
                users && users.map((user, index) =>
                    <li key={index}>
                        {user}
                    </li>)
            }
        </ul>
    </div>
}

export default { title: 'Chat', challenge: Challenge }