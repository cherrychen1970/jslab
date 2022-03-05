import { Fragment, useState } from "react"


const lookups = {
    smile: '\u{1F600}',
    hand: `\u{1F44C}`,
    monkey: `\u{1F412}`
}

// Challenge : When user types :word from lookups, convert it to the symbol
const Challenge= () => {
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
        <h4>when user types word from lookups, convert it to the symbol</h4>
        <input type='text' onChange={handleChange} value={value} />
    </div>
}

export default { title: 'State', challenge: Challenge }