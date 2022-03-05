import { Fragment, useState } from "react"

const smile = '\u{1F600}'

// Challenge : Smile Challenge, when user types ':smile', convert it to smile symbol
const Challenge=() => {
    const [value, setValue] = useState([])

    const handleChange = (event) => {
        let val = event.target.value
         // implement here
    

        setValue(val)
    }
     
    return <div>
        <h4>when user types ':smile', convert it to {smile}</h4>
        <input type='text' onChange={handleChange} value={value} />
    </div>
}

export default { title: 'State', challenge: Challenge }