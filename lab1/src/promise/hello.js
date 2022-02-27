import {sleep,printAnswer, printLog, printQuestion} from '../helper.js'
import { challenges } from '../helper.js'
////////////////////////////////////////////////////////////////
// Simple Promise Example

const helloAsync = async (number, message) => {
    printQuestion(number, message)
    await sleep(1000)
    printLog(number, "hello ready")
    return `hello ${number}`
}

// demo1 : sequential run
challenges.hello1 = async () => {
    await helloAsync(1)
    await helloAsync(2)
    await helloAsync(3)
    await helloAsync(4)
    await helloAsync(5)
    await helloAsync(6)
}

// demo2 : parellel run
challenges.hello2 = async () => {
    helloAsync(1)
    helloAsync(2)
    helloAsync(3)
    helloAsync(4)
    helloAsync(5)
    helloAsync(6)
}

// demo : run 1,2,3 together then run 4,5,6 
challenges.hello3 = async () => {
    await Promise.all([
        helloAsync(1),
        helloAsync(2),
        helloAsync(3)
    ])

    helloAsync(4)
    helloAsync(5)
    helloAsync(6)
}