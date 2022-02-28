import chalk from 'chalk'
import { highlight } from 'cli-highlight'

// helper
const start = new Date()

export const sleep = ms => new Promise(r => setTimeout(r, ms));
const timestamp = () => `${(new Date() - start).toLocaleString()}: `
export const printLog = (message, color='white') => console.log(chalk[color](`${timestamp()} ${message}`))

export const challenges = {}

export const runChallenge = () => {
    const args = process.argv.slice(2)
    //const num = parseInt(args[0])
    //let challenge = challenges[`challenge${num}`]
    let challenge = challenges[args[0]]
    let params = args.slice(1)

    if (challenge)
        try {
            challenge(...params)
        } catch (error) {
            console.log( `${args[0]}: ${error.toString()}`)
        }
        
    else {
        console.log("Select challenge:")
        Object.keys(challenges).forEach(x=> console.log(x))        
    }
}