import { createContext, Fragment, useContext, useEffect, useState } from "react"
import { Div, SelectInput, TextInput } from "./helper"

// Challenge : add header for the table
const Challenge = () => {
    const chatServer = useChatServerController()

    return (
        <Fragment>
            <h4 >Simple Chat</h4>
            <chatServerContext.Provider value={chatServer}>
                <CreateRoom />
                <Div flex fullWidth style={{ alignContent: 'space-between' }}>
                    <UserPanel user="John" />
                    <UserPanel user="Jane" />
                </Div>
            </chatServerContext.Provider>
        </Fragment>)
}
//////////////////////////////////////////////////////////////////////////////////////
// Business Logic 
const sampleData = {
    room1: {
        user: ['John', 'Jane'],
        messages: [
            {
                sender: 'John',
                content: 'Hello Jane'
            },
            {
                sender:'Jane',
                content:'Hello John'
            }
        ]
    }
}

// This is server's context
const chatServerContext = createContext({
    rooms: {}, // dictionary of { roomName:{users,messages} } structure
    createRoom: (roomName) => { },
    joinRoom: (roomName, user) => { },
    sendMessage: (roomName, user, message) => { }
})

// This is each user's context
const chatContext = createContext({
    user: String, // current user
    room: {}, // current joined room => {name,messages}
    joinRoom: (rommName) => { },
    sendMessage: (message) => { }
})

// implement chat controller
const useChatServerController = () => {
    const [rooms, setRooms] = useState<any>(sampleData)

    const createRoom = (roomName) => {
        setRooms({ ...rooms, [roomName]: { users: [], messages: [] } })
    }
    const joinRoom = (roomName, user) => {
        if (!rooms[roomName]) return
        const { users, messages } = rooms[roomName]
        const newMessage = { content: `${user} joined the room` }
        setRooms({ ...rooms, [roomName]: { users: [...users, user], messages: [...messages, newMessage] } })
    }

    const sendMessage = (roomName, user, message) => {
        if (!rooms[roomName]) return

        const { [roomName]: room, ...rest } = rooms
        const newMessage = { sender: user, content: message }
        setRooms({ ...rest, [roomName]: { ...room, messages: [...room.messages, newMessage] } })
    }
    return { rooms, createRoom, joinRoom, sendMessage }
}

// implement chat controller
const useChatController = (user) => {
    const { rooms, joinRoom: joinServerRoom, sendMessage: sendRoomMessage } = useContext(chatServerContext)
    const [room, setRoom] = useState<any>(null)
    const [roomName, setRoomName] = useState<any>('room1')

    const joinRoom = (roomName) => {
        setRoomName(roomName)
        joinServerRoom(roomName, user)
    }

    const sendMessage = (message) => {
        sendRoomMessage(roomName, user, message)
    }

    useEffect(() => {
        if (roomName && rooms && rooms[roomName]) {
            let r = rooms[roomName]
            setRoom({ name: roomName, messages: r.messages })
        }
    }, [rooms[roomName]])

    return { user, joinRoom, room, sendMessage }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// UI
const CreateRoom = () => {
    const { createRoom } = useContext(chatServerContext)
    return <TextInput label="Create Room" handleClick={createRoom} buttonLabel="Create" />
}

const UserPanel = ({ user }) => {
    const chat = useChatController(user)

    return <chatContext.Provider value={chat}>
        <div style={{ width: '50%' }}>
            <h4>This is {user} panel</h4>
            <JoinRoom />
            <ChatRoom />
        </div>
    </chatContext.Provider>
}

const JoinRoom = ({ }) => {
    const { rooms } = useContext(chatServerContext)
    const { joinRoom } = useContext(chatContext)
    return <SelectInput label="Join Room" buttonLabel="Join" choices={Object.keys(rooms)} handleClick={joinRoom} />
}

const ChatRoom = ({ }) => {
    const { room }: any = useContext(chatContext)

    return room && <Div outline style={{ width: 300, minHeight: 400, padding: '1em' }} >
        <h4 style={{ margin: 0 }}>Room: {room.name} </h4>
        <Div>
            <Messages messages={room.messages} />
            <MessageInput />
        </Div>
    </Div>
}

const Messages = ({ messages = null }: any) => {
    return <ul style={{
        border: 'solid 1px #cccccc',
        padding: '1em',
    }}>
        {
            <>
                {messages && messages.map((message, index) =>
                    <Message key={index} message={message} />
                )}
            </>
        }
    </ul>
}

const Message = ({ message }) => {
    const { user }: any = useContext(chatContext)

    // is it general notification?
    if (!message.sender)
        return <li><span>{message.content}</span></li>
    // is it my message?
    else if (message.sender === user)
        return <li style={{ textAlign: 'right' }}><BubbleContent content={message.content} ></BubbleContent></li>
    else
        return <li><span> <h6 style={{ margin: 0 }} >{message.sender}</h6>
            <BubbleContent content={message.content} /></span></li>
}

const MessageInput = () => {
    const { sendMessage }: any = useContext(chatContext)
    return <TextInput handleClick={sendMessage} />
}

const BubbleContent = ({ content }) =>
    <span style={{ padding: '0.6em', margin: '0.3em', border: 'solid 1px #cccccc', display: 'inline-block', borderRadius: '1em' }}>
        {content}
    </span>

export default { title: 'Chat', challenge: Challenge }