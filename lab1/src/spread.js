import { challenges } from "./helper.js"
import chalk from 'chalk'

// spread challenges with array
const users1 = [
    { id: 1, name: 'user1', sex: 'female' },
    { id: 2, name: 'user2', sex: 'male' }
]

const users2 = [
    { id: 1, name: 'user1', sex: 'female' },
    { id: 2, name: 'user2', sex: 'male' }
]

// You can merge two list using spread instead of concat.
challenges.spread1 = () => {
    let answer = [...users1, ...users2] // same as user1.concat(user2)
    console.log(answer)
}

// Challenge : merge users1 and user
challenges.spread2 = () => {
    let user = { id: 3, name: 'user3', sex: 'female' }
    // answer
    //let answer =
    throw Error("not implemented")
    console.log("challenge answer: ")
    console.log(answer)
}

// spread challenges with object

const user = { id: 1, name: 'John Doe', address: "somewhere", sex: 'male', email: 'johndoe@email.com' }

// You can add additional fields using spread into object
challenges.spread3 = () => {
    let age = 22
    let answer = { ...user, age }
    console.log(answer)
}

// You can override.
challenges.spread4 = () => {
    let answer = { ...user, name: "Jane Doe" }
    console.log(answer)
}

// You can separate some fields from object
challenges.spread5 = () => {
    let { sex, ...rest } = user
    console.log(rest)
}

// Challenge : sanitize input
challenges.spread6 = (color = 'red') => {
    const props = { label: 'challenge' }
    const print = ({color='red',label,...rest}) => {
        console.log(chalk[color](label))
    }

    throw Error("not implemented")
    // override color from input
    print(props)
}