import { sleep, challenges, printLog } from '../helper.js'

////////////////////////////////////////////////////////////////
// Multiple Promise Example

const orderAsync = async (orderNumber = 0) => {
    await sleep(1000)
    printLog(`ordered ${orderNumber}`)
}

const pickAsync = async (item = 0) => {
    await sleep(1000)
    printLog(`picked ${item}`)
}

const packingAsync = async (item = 0) => {
    await sleep(1000)
    printLog(`packaged ${item}`)
}

const shipingAsync = async (orderNumber = 0) => {
    await sleep(1000)
    printLog(`shipped ${orderNumber}`)
}

// old style calling promise. this is still handy when calling promise from sync function
challenges.orderOld = () => {
    orderAsync()
        .then(() => pickAsync())
        .then(() => packingAsync())
        .then(() => shipingAsync())
        .then(x => printLog('done'))
}

// async/await syntax to call promise
challenges.orderNew = async () => {
    await orderAsync()
    await pickAsync()
    await packingAsync()
    await shipingAsync()
}

// Challenge : implement order with following scenario
// all items from same order must be picked and packaged before shipping..
// item must picked before packaged.
// items can be independently picked and packaged.
// there is extra 1000ms delay in the order when ordering items more than 2
challenges.order1 = async () => {
    const order = async (orderNumber, items) => {
        throw Error("not implemented")
    }

    await Promise.all(
        [
            order(1, [0, 1, 2, 3, 4]),
            order(2, [10, 11]),
        ]
    )
}





