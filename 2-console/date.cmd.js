#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv))
.options({
    'year': {
        alias: 'y',
        description: 'год'
    },
    'month': {
        alias: 'm',
        description: 'месяц'
    },
    'date': {
        alias: 'd',
        description: 'дата'
    },
})
.command('current', 'Текущая дата', () => {}, (argv) => {
    const date = new Date();
    if (argv.year)
        console.log(date.getFullYear());
    else if (argv.month)
        console.log(date.getMonth() + 1);
    else if (argv.date)
        console.log(date.getDate())
    else
        console.log(date + '');
})
.command('add', 'Дата в будущем', () => {}, (argv) => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + (argv.y ?? 0));
    date.setMonth(date.getMonth()       + (argv.m ?? 0));
    date.setDate(date.getDate()         + (argv.d ?? 0));
    console.log(date + '');
})
.command('sub', 'Дата в прошлом', () => {}, (argv) => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - (argv.y ?? 0));
    date.setMonth(date.getMonth()       - (argv.m ?? 0));
    date.setDate(date.getDate()         - (argv.d ?? 0));
    console.log(date + '');
})
.argv