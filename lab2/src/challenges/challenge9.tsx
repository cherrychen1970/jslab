import { createContext, Fragment, useContext, useEffect, useState } from "react"
import { NotImplemented, notImplemented, now, Reference, SelectInput, sleep, TextInput } from "./helper"

const lookups = {
    smile: '\u{1F600}',
    hand: `\u{1F44C}`,
    monkey: `\u{1F412}`
}

const smapleContext = createContext({
    value: null, setValue: (value) => { }
})

// Challenge : 
const Challenge = () => {
    return <Fragment>
        <h4>Let's learn how to use hook to separate business logic from UI</h4>
        <Sample />
        <YourChallenge />
        <h4>Reference</h4>
        <Reference url="https://reactjs.org/docs/hooks-custom.html" />
    </Fragment>
}


const Sample = () => {
    const [value, setValue] = useState<any>()

    return <smapleContext.Provider value={{ value, setValue }}>
        <p>This is sample </p>
        <Input />
        <SmartDisplay />
        <AnotherDisplay />
        <hr />


    </smapleContext.Provider>
}


const Input = ({ }) => {
    const { setValue } = useContext(smapleContext)
    const handleChange = (event) => {
        let val = event.target.value
        setValue(val)
    }
    return (
        <div>
            <input type='text' onChange={handleChange} />
        </div>
    )
}


const SmartDisplay = ({ }) => {
    const { value } = useContext(smapleContext)
    const text = useSmartInput(value)

    return <div>
        <h5>Smart Display saying:</h5>
        <span>{text}</span>
    </div>
}

const AnotherDisplay = ({ }) => {
    const { value } = useContext(smapleContext)
    const text = useSmartInput(value)


    return <div>
        <h5>Another Display :</h5>
        <span>{now()}: {text}</span>
    </div>
}

// seperate business logic into custom hook to make reusable.
const useSmartInput = (value) => {
    const [text, setText] = useState<string>()

    useEffect(() => {
        if (value) {
            let val: string = value
            Object.keys(lookups).map(key => {
                if (val.includes(key))
                    val = val.replaceAll(key, lookups[key])
            })
            setText(val)
        }
    }, [lookups, value])

    return text
}
//////////////////////////////////////////////////////////////////////////////

const authContext = createContext({
    authenticated: false,
    login: async (user) => { },
    logout: () => { }
})

const YourChallenge = () => {
    const [authenticated, setAuthenticated] = useState<any>()

    const login = async (user) => {
        await sleep(3000)
        setAuthenticated(true)
        sessionStorage.setItem('user', user)
    }
    const logout = () => setAuthenticated(false)

    return (
        <authContext.Provider value={{ authenticated, login, logout }}>
            <p>Challenge :  fix useIdentity()</p>
            {!authenticated ? <Login /> : <Logout />}
            <Restricted />
        </authContext.Provider>)
}

const Login = () => {
    const { login } = useContext(authContext)
    return <TextInput buttonLabel="login" handleValue={async (user) => await login(user)} />
}

const Logout = () => {
    const { logout } = useContext(authContext)
    return <button onClick={logout}>Logout</button>
}

const Restricted = ({ }) => {
    const { authenticated } = useContext(authContext)
    const identity = useIdentity()
    return <div>
        <h4>Restricted Area</h4>
        {identity.user === 'admin' ?
            (authenticated ? <div>Congratualation!</div> :
                <div>Something Wrong!</div>) :
            <div>Access Denied</div>}
    </div>
}

// Challenge : this is not working. fix it. should return identity when authenticated, use useEffect
const useIdentity = (): any => {
    // fix here
    return { user: sessionStorage.getItem('user') }
}
export default { title: 'Hook', challenge: Challenge }