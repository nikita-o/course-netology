#!/usr/bin/env node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const min = 0;
const max = 100;

async function guessNumber() {
    const rl = readline.createInterface({ input, output });
    const hiddenNum = Math.floor(Math.random() * (max - min)) + min;

    console.log(`Загадано число в диапазоне от ${min} до ${max}`);
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