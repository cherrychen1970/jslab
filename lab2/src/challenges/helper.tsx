import { useEffect, useState } from "react";

export const sleep = ms => new Promise(r => setTimeout(r, ms));

export const NotImplemented = () => <span style={{ color: 'red' }}>Not Implemented</span>

export const notImplemented =()=>alert('not implemented')

export const now = () => (new Date).toLocaleTimeString()

export const Reference = ({ url }) => <a target="_blank" href={url} style={{ display: 'block' }}>{url}</a>

export const Div = ({ flex = false, fullWidth = false, outline = false, style = {}, children }) =>
    (<div style={{ display: flex ? 'inline-flex' : 'inherit', width: fullWidth ? "100%" : 'inherit', border: outline ? 'solid 1px #cccccc' : 'none', ...style }}>{children}</div>)

export const TextInput = ({ label=null, handleValue, buttonLabel="Send" }:any) => {
    const [value, setValue] = useState<any>()
    return (<div style={{ marginTop: 16, marginBottom: 8 }}>
        {label &&<label>{label}</label>}
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => handleValue(value)} >{buttonLabel}</button>
    </div>)
}

export const SelectInput = ({ label="Choose", choices, handleValue, buttonLabel="Select" }) => {
    const [value, setValue] = useState<any>()

    useEffect(()=>{
        if (choices && choices.length >0)
            setValue(choices[0])
    },[choices])
    
    return (<div style={{ marginTop: 16, marginBottom: 8 }}>
        <label>{label}</label>
        <select id="room" onChange={(e) => setValue(e.target.value)}>
            {
                choices.map(choice =>
                    <option key={choice}>{choice}</option>)
            }
        </select>
        <button onClick={() => handleValue(value)} >{buttonLabel}</button>
    </div>)
}
