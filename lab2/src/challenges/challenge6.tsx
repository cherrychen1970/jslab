import { Fragment, useEffect, useState } from "react"

const lookups = {
    smile: '\u{1F600}',
    hand: `\u{1F44C}`,
    monkey: `\u{1F412}`
}

// Challenge : take input from input component and pass it to smart display
export default () => {
    // you need to implement code here

    return <Fragment>
        <h4>This challenge is for passing state between component, also let's learn about useEffect too</h4>
        <Input />
        <SmartDisplay lookups={lookups} text={''} />
    </Fragment>
}

// you need to get some props from parent component
const Input = ({ }) => {
    const handleChange = (event) => {
        let val = event.target.value
        // you need to implement code here
    }

    return (
        <div>
            <input type='text' onChange={handleChange}/>
        </div>
    )
}

const SmartDisplay = ({ text, lookups }) => {
    const [value, setValue] = useState([])

    // you need to fix something here.
    useEffect(() => {
        let val = text
        // implement here
        Object.keys(lookups).map(key => {
            if (val.includes(key))
                val = val.replaceAll(key, lookups[key])
        })
        setValue(val)
    }, [])

    return <span>{value}</span>
}