import chalk from 'chalk'
import { highlight } from 'cli-highlight'

// helper
const start = new Date()

export const sleep = ms => new Promise(r => setTimeout(r, ms));
const timestamp = () => `${(new Date() - start).toLocaleString()}: `

export const printQuestion = (number, message = "call hello") => console.log(chalk.white(`(${number}):${timestamp()} ${message}`))
export const printAnswer = (number, answer) => console.log(chalk.yellow(`(${number}):${timestamp()} answer => ${answer}`))
export const printLog = (number, message) => console.log(chalk.green(`(${number}):${timestamp()} ${message}`))

export const challenges = []
challenges.forEach(x => console.log(x))

export const runChallenge = () => {
    const args = process.argv.slice(2)
    //const num = parseInt(args[0])
    //let challenge = challenges[`challenge${num}`]
    let challenge = challenges[args[0]]

    if (challenge)
        challenge()
    else {
        console.log("Select challenge:")
        Object.keys(challenges).forEach(x=> console.log(x))        
    }
}