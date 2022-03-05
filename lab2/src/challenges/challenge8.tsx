import { createContext, Fragment, useContext, useEffect, useState } from "react"

const lookups = {
    smile: '\u{1F600}',
    hand: `\u{1F44C}`,
    monkey: `\u{1F412}`
}

const smapleContext = createContext({ value: null, setValue: (value) => { } })

// Challenge : take input from input component and pass it to smart display
const Challenge = () => {
    const [value, setValue] = useState(null)
    return <Fragment>
        <h4>This challenge is for sharing state between sibling components using context</h4>
        <smapleContext.Provider value={{ value, setValue }}>
            <Input />
            <SmartDisplay lookups={lookups}/>
        </smapleContext.Provider>
    </Fragment>
}

// children can use context to receive passing values from parent
const Input = ({ }) => {
    const { setValue } = useContext(smapleContext)
    const handleChange = (event) => {
        let val = event.target.value
        // you need to implement code here
        setValue(val)
    }

    return (
        <div>
            <input type='text' onChange={handleChange} />
        </div>
    )
}

const SmartDisplay = ({ lookups }) => {
    const { value } = useContext(smapleContext)
    const [text, setText] = useState<string>()

    useEffect(() => {
        if (value) {
            let val:string = value
            Object.keys(lookups).map(key => {
                if (val.includes(key))
                    val = val.replaceAll(key, lookups[key])
            })
            setText(val)
        }

    }, [lookups, value])

    return <div>
        <h5>Smart Display saying:</h5>
        <span>{text}</span>
    </div>

}

export default { title: 'Context', challenge: Challenge }