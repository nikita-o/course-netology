#!/usr/bin/env node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

async function guessNumber() {
    const rl = readline.createInterface({ input, output });
    const hiddenNum = Math.floor(Math.random() * 100);

    console.log('Загадано число в диапазоне от 0 до 100');
    for await (const line of rl) {
        const num = +line;

        if (isNaN(num)) {
            console.log('Это не число!');
            continue;
        }
        if (num === hiddenNum) {
            console.log(`Отгдано число ${hiddenNum}`);
            break;
        }
        if (num > hiddenNum)
            console.log('Меньше');
        else
            console.log('Больше');
    }
}

guessNumber();