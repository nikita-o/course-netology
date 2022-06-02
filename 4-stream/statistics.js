const fs = require('fs')
const readline = require('readline')

const RStream = fs.createReadStream(process.argv[2], {encoding: 'utf-8'})

const statistics = {
    cGame: 0,
    cWins: 0,
    cLose: 0,
}

readline.createInterface(RStream)
.on('line', (line) => {
    statistics.cGame += 1
    if (line.includes('Win'))
        statistics.cWins += 1
    else
        statistics.cLose += 1
})
.on('close', () => {
    console.log(`Всего игр: ${statistics.cGame}`)
    console.log(`Побед: ${statistics.cWins}`)
    console.log(`Поражений: ${statistics.cLose}`)
    console.log(`Коэфициент побед: ${(statistics.cWins / statistics.cGame).toFixed(2)}`)
})