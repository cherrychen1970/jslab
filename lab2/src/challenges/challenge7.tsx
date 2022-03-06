import { Fragment, useEffect, useState } from "react"
import { now, Reference } from "./helper"


// Challenge : use Effect challenge
const Challenge = () => {
    const [time,setTime] =useState('unknown')
    const [time1,setTime1] =useState('unknown')
    const [time2,setTime2] =useState('unknown')
    const [time3,setTime3] =useState('unknown')


    useEffect(()=>{
        setTime1( now())
        setTimeout(()=>{ setTime2(now())},2000)
    },[])

    useEffect(()=>{
        if (time2!=='unknown')
            setTimeout(()=>{ setTime3(now())},2000)
    },[time2])

    // you need to implement code here, use setTimeout
    useEffect(()=>{
        
    },[])

    return <Fragment>
        <h4>Let's learn about useEffect</h4>
        <p> Implement current time starts when time3 updated and update every second once started </p>

        <div>mounted time: <span>{time1}</span></div>
        <div>2 seconds elapsed time: <span>{time2}</span></div>
        <div>4 seconds elapsed time: <span>{time3}</span></div>

        <div>current time: <span>{time}</span></div>

        <h4>Reference</h4>
        <Reference url="https://reactjs.org/docs/hooks-effect.html"/>
        <Reference url="https://dmitripavlutin.com/react-useeffect-explanation/"/>
    </Fragment>
}

export default { title: 'useEffect', challenge: Challenge }