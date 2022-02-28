import { sleep, printLog } from '../helper.js'
import { challenges } from '../helper.js'
////////////////////////////////////////////////////////////////
// Simple Promise Example

// hello function with 1 sec delay
const helloAsync = async (number, message) => {
    printLog(`${number}) calling hello`, 'yellow')
    await sleep(1000)
    printLog(`${number}) hello ready`)
    return `hello ${number}`
}

// demo1 : sequential run. can you guess how long it takes?
challenges.hello1 = async () => {
    await helloAsync(1)
    await helloAsync(2)
    await helloAsync(3)
    await helloAsync(4)
    await helloAsync(5)
    await helloAsync(6)
}

// demo2 : parellel run. can you guess how long it takes?
challenges.hello2 = async () => {
    await Promise.all([
        helloAsync(1),
        helloAsync(2),
        helloAsync(3),
        helloAsync(4),
        helloAsync(5),
        helloAsync(6)])
}