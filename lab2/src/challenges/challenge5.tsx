import { Fragment, useState } from "react"


const lookups = {
    smile: '\u{1F600}',
    hand: `\u{1F44C}`,
    monkey: `\u{1F412}`
}

// Challenge : When user types word from lookups, convert it to the symbol
export default () => {
    return <SmartInput lookups={lookups} />
}

const SmartInput = ({ lookups:{} }) => {
    const [value, setValue] = useState([])

    const handleChange = (event) => {
        let val = event.target.value
        // implement here

        setValue(val)
    }

    return <div>
        <h3>when user types word from lookups, convert it to the symbol</h3>
        <input type='text' onChange={handleChange} value={value} />
    </div>
}