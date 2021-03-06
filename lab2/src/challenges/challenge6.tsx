import { Fragment, useEffect, useState } from "react"
import { Div } from "./helper"

const lookups = {
    smile: '\u{1F600}',
    hand: `\u{1F44C}`,
    monkey: `\u{1F412}`
}

// Challenge : take input from input component and pass it to smart display
const Challenge = () => {
    // you need to implement code here

    return <Fragment>
        <h4>This challenge is for sharing state between sibling components</h4>
        <p> take input from input component and pass it to smart display. hint : use parent state</p>
        <Input />
        <SmartDisplay lookups={lookups}  />
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
            <input type='text' onChange={handleChange} />
        </div>
    )
}

const SmartDisplay = ({ value='smile', lookups }) => {
    const [text, setText] = useState<string>()

    useEffect(() => {
        if (value) {
            let val:string = value
            Object.keys(lookups).map(key => {
                if (val.includes(key ))
                    val = val.replaceAll(key, lookups[key])
            })
            setText(val)
        }

    }, [lookups, value])

    return <div>
        <h5>Smart Display saying:</h5>
        <Div outline>{text}</Div>
    </div>

}

export default { title: 'Sharing State', challenge: Challenge }