import {sleep,printAnswer, printLog, printQuestion} from './helper.mjs'


////////////////////////////////////////////////////////////////
// Multiple Promise Example

const orderAsync = async (number=0) => {
    await sleep(3000)
    console.log( timestamp() + `ordered ${number}`)
}

const pickAsync = async (number=0) => {
    await sleep(3000)
    console.log( timestamp() + `picked ${number}`)
}

const packingAsync = async (number=0) => {
    await sleep(3000)
    console.log( timestamp() + `packaged ${number}`)
    return "packaged"
}

const shipingAsync = async (number=0) => {
    await sleep(3000)
    console.log(timestamp()+`shipped ${number}`)
    return "shipped"
}

const orderOldStyle = async () => {
    orderAsync()
        .then(() => pickAsync())
        .then(() => packingAsync())
        .then(() => shipingAsync())
        .then(x => console.log(x))
}

const order = async (number=0) => {
    await orderAsync(number)
    await pickAsync(number)
    await packingAsync(number)
    await shipingAsync(number)
}


const orderAll = async (number) => {
    Promise.all(
        [
            order(1),
            order(2),
            order(3),
            order(4),
        ]
    )
}

// comparison between calling async function
const helloDemo10 = async () => {

    // no wait.
    printAnswer(1, helloAsync(1))

    // await promise to get result
    let hello = await helloAsync(2, "call hello (wait)")
    printAnswer(2, hello)

    // old method 
    helloAsync(3, "call hello (wait, old)").then(hello => printAnswer(3, hello))
    console.log("I'm done")
}

global['helloDemo10'] = helloDemo10

//orderAll()


