import { challenges } from "./helper.js"

const users = [
    { id: 1, name: 'user1', sex: 'female', age: 50, created:'2001-01-01' },
    { id: 2, name: 'user2', sex: 'male', age: 21 , created:'2010-01-01'},
    { id: 3, name: 'user3', sex: 'male', age: 27, created:'2003-01-01' },
    { id: 4, name: 'user4', sex: 'female', age: 33, created:'2007-01-01' }
]

//  converting list
challenges.array1 = () => {
    let answer = users.map(x => x.sex == 'male')
    console.log(answer)
}

// Challenge : convert id,name only list using map
challenges.array2 = () => {
    throw Error("not implemented")
    console.log("challenge answer: ")
    console.log(answer)
}

// filtering list
challenges.array3 = (age = 30) => {
    let answer = users.filter(x => x.age < age)
    console.log(answer)
}

// Challenge : get ids (such as [id1,id2,...]) of users ages < 30. use filter and map
challenges.array4 = () => {
    //let answer = 
    throw Error("not implemented")
    console.log("challenge answer: ")
    console.log(answer)
}

// sort users
challenges.array5 = (sortBy = 'name') => {
    // answer
    let answer = users.sort((x, y) => {
        if (typeof x[sortBy]==='number')
            return x[sortBy]-y[sortBy]
        else (typeof x[sortBy]==='string')
            return x[sortBy].localeCompare(y[sortBy])
    })
    console.log(answer)
}

// Challenge : sort users, implement asc/desc and date comparison
challenges.array6 = (sortBy = 'name', direction='asc') => {
    // answer
    throw Error("not implemented")
    console.log("challenge answer: ")
    console.log(answer)
}

// Challenge : check true/false if there is any users younger than the age. use some(x=>{})
challenges.array7 = (age) => {
    // answer
    throw Error("not implemented")
    let answer = ()=>{}
    console.log("challenge answer: ")
    console.log(answer)
}