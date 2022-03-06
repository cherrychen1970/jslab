import { createContext, Fragment, useContext, useEffect, useState } from "react"
import { now, Reference } from "./helper"

const lookups = {
    smile: '\u{1F600}',
    hand: `\u{1F44C}`,
    monkey: `\u{1F412}`
}

const smapleContext = createContext({
    value: null, setValue: (value) => { },
    resource: null, setResource: (resource) => { }
})

// Challenge : 
const Challenge = () => {
    const [value, setValue] = useState<any>()
    const [resource, setResource] = useState<any>()

    return <Fragment>
        <h4>Let's learn how to use hook to separate business logic from UI</h4>
        <smapleContext.Provider value={{ value, setValue, resource, setResource }}>
            <p>This is sample </p>
            <Input />
            <SmartDisplay />
            <AnotherDisplay />
            <hr />

            <p>Challenge : convert data fetch logic into separate hook (requires internet connection)</p>
            <Select />
            <List />
        </smapleContext.Provider>
        <h4>Reference</h4>
        <Reference url="https://reactjs.org/docs/hooks-custom.html" />
    </Fragment>
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
const Select = () => {
    const { setResource } = useContext(smapleContext)

    return <div><label >Choose</label>
        <select id="resource" onChange={(e) => setResource(e.target.value)}>
            <option value="users">users</option>
            <option value="todos">todos</option>
            <option value="posts">posts</option>
            <option value="comments">comment</option>
        </select>
    </div>
}


// Challenge : convert data fetch to separate hook (useGetList)
const List = () => {
    const { resource } = useContext(smapleContext)
    const [data, setData] = useState<any>();

    useEffect(() => {
        if (resource)
            fetch(`https://jsonplaceholder.typicode.com/${resource}`)
                .then((res) => res.json())
                .then((data) => setData(data));
    }, [resource]);

    return (
        <>
            {data && <div>Item {data.length} fetched</div>}
        </>
    );
};

// Challenge : implement this and use it.
const useGetList = (resource) => {
    const [data, setData] = useState<any>();
    return data
}
export default { title: 'Hook', challenge: Challenge }