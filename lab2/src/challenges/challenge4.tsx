import { Fragment, useState } from "react"

const smile = '\u{1F600}'

// Challenge : 
export default () => {
    const [value, setValue] = useState([])

    const handleChange = (event) => {
        let val = event.target.value
         // implement here

        setValue(val)
    }
     
    return <div>
        <h3>when user types ':smile', convert it to {smile}</h3>
        <input type='text' onChange={handleChange} value={value} />
    </div>
}