import { createContext, Fragment, useContext, useEffect, useState } from "react"
import { now } from "./helper"

const lookups = {
    smile: '\u{1F600}',
    hand: `\u{1F44C}`,
    monkey: `\u{1F412}`
}

const smapleContext = createContext({ value: null, setValue: (value) => { } })

// Challenge : 
const Challenge = () => {
    const [value, setValue] = useState(null)

    return <Fragment>
        <h4>Let's learn how to use hook to separate business logic from UI</h4>
        <smapleContext.Provider value={{ value, setValue }}>
            <Input />
            <SmartDisplay />
            <AnotherDisplay />
        </smapleContext.Provider>
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

export default { title: 'Hook', challenge: Challenge }