const fs = require('fs')
const readline = require('readline')
const { stdin: input, stdout: output } = require('process')

const WStream = fs.createWriteStream(process.argv[2], {flags: 'a'})

const rl = readline.createInterface({ input, output })

const question = (str) => new Promise(resolve => rl.question(str + '\n', resolve))

async function coinGame() {
    const answer = +(await question('1 или 2?'))
    const hiddenNum = Math.floor(Math.random()*2) + 1

    if (answer === hiddenNum) {
        console.log('Win!');
        WStream.write(`number = ${hiddenNum} | Win!\n`)
    } else {
        console.log('Lose!');
        WStream.write(`number = ${hiddenNum} | Lose!\n`)
    }
}

async function main() {
    while (true) {
        const ans = await question('играем? (y/N)')
        if (ans !== 'y') break
        await coinGame()
    }
    rl.close()
    WStream.end()
}

main()