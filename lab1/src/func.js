import { challenges } from "./helper.js"


challenges.func1 = () => {
    // you can create function like variable
    let hello = () => { return 'hello world' }
    console.log(hello())
}

// 
challenges.func2 = () => {
    // you can simplify if expression is single line
    let hello = () => 'hello world'
    console.log(hello())
}

// return object or array in single line expression
challenges.func3 = () => {
    // wrap with bracket() when returning object or array to avoid syntax error
    let hello = () => ({ message: 'hello world' })
    console.log(hello())
}

// function as argument
challenges.func4 = () => {
    let print = (message) => {
        if (typeof message === 'function')
            console.log(message())
        else
            console.log(message)
    }
    print('hello world')

    // passing function as argument
    print(() => 'I am inline hello world')
}

// Challenge :  passing object as argument vs spreded arguments
challenges.func5 = () => {
    // it is easy to pick the variable that you want to use regardless of ordering.
    let hello = ({ message }) => ({ message })
    console.log(hello({ user: 'user1', message: 'hello world' }))

    // argument order matters here.
    let hello2 = (user, message) => ({ message })
    // fix this.
    console.log(hello2(message))
}


// Challenge : implement helloMessage function of your own format.
challenges.func6 = (user = "guest", message = "hello") => {
    throw Error("not implemented")
    let helloMessage = () => { }

    // passing function as argument
    helloMessage({ user, message })
}
