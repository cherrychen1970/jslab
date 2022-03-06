
export const sleep = ms => new Promise(r => setTimeout(r, ms));

export const NotImplemented = () => <span style={{ color: 'red' }}>Not Implemented</span>

export const now=()=>(new Date).toLocaleTimeString()

export const Reference = ({url}) => <a target="_blank" href={url} style={{ display: 'block' }}>{url}</a>
