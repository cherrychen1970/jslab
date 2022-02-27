import { runChallenge, challenges } from "./helper.js"

const userList1 = [
    { id: 1, name: 'user1', sex: 'female' },
    { id: 2, name: 'user2', sex: 'male' }
]

const userList2 = [
    { id: 1, name: 'user1', sex: 'female' },
    { id: 2, name: 'user2', sex: 'male' }
]

// Challenge : merge data1 and data2 using spread expresssion
challenges.challenge1 = () => {
    // answer
    let l = [...userList1, ...userList2]
    console.log("challenge answer: ")
    console.log(l)
}

const user = { id: 1, name: 'John Doe', address: "somewhere", sex: 'male', email: 'johndoe@email.com' }
const age = 22

// Challenge  : inject age field into user
challenges.challenge2 = () => {
    let user1 = { ...user, age }
    console.log("challenge answer: ")
    console.log(user1)
}

// Challenge  : override name with 'Jane Doe'
challenges.challenge3 = () => {
    let user2 = { ...user, name: "Jane Doe" }
    console.log("challenge answer: ")
    console.log(user2)
}
// Challenge : separate id,name and print rest from user
challenges.challenge4 = () => {
    let { id, name, ...rest } = user
    console.log("challenge answer: ")
    console.log(rest)
}

//runChallenge()