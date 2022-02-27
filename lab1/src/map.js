import { runChallenge, challenges } from "./helper.js"

const userList1 = [
    { id: 1, name: 'user1', sex: 'female', age: 50 },
    { id: 2, name: 'user2', sex: 'male', age: 21 },
    { id: 3, name: 'user3', sex: 'male', age: 27 }
]

// Challenge : convert to true/false list based on the sex
challenges.challenge1 = () => {
    // answer
    let l = userList1.map(x => x.sex === 'female')
    console.log("challenge answer: ")
    console.log(l)
}

// Challenge : convert userList1 id,name only list
challenges.challenge2 = () => {
    // answer
    let l = userList1.map(x => ({ id: x.id, name: x.name }))
    console.log("challenge answer: ")
    console.log(l)
}

// Challenge : get ids of users ages < 30
challenges.challenge3 = () => {
    // answer
    let l = userList1.filter(x => x.age < 30).map(x => x.id)
    console.log("challenge answer: ")
    console.log(l)
}

// Challenge : add all ages using reduce
challenges.challenge4 = () => {
    // answer
    let sumAge = userList1.reduce((prev, cur) => prev + cur.age, 0)
    console.log("challenge answer: ")
    console.log(sumAge)
}

runChallenge()