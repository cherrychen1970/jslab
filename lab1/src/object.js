import { challenges } from "./helper.js"
import _ from 'lodash'

// object fields can be accessed by attribute or key like dictionary.
challenges.obj1 = () => {
    let answer = {}

    // these expressions are same
    answer.name = 'user1'
    answer['name'] = 'user1'

    console.log(answer.name)
    console.log(answer['name'])
}

// you can skip specifying key when variable name is same as key name
challenges.obj2 = () => {
    let name = 'user1', age = 17

    let answer = { name, age } // instead of { name:name, age:age }
    console.log(answer)
}

// nested object example with lodash.
challenges.obj3 = () => {
    let answer = { profile: { name: 'user1' } }

    // this works
    console.log(answer.profile.name)

    // this wouldn't work. 
    console.log(answer['profile.name'])

    // this works. lodash expand . notation
    console.log(_.get(answer, 'profile.name'))
}

// Challenge :  fix the problem. run challenge providing key argument.
challenges.obj4 = (key) => {
    let user = {
        role:'admin',
        profile: {
            name: 'user1', email: 'user1@email.com'
        }
    }
    // this is not working if key has . notation. fix this with lodash
    console.log(user[key])
    //
    throw Error("not implemented")
}