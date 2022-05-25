#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

// const getParam = (param) => param.year ? 'y' : param.mount ? 'm' : param.date ? 'd' : null;

function getParam(param) {
    if (param.year)
        return 'y'
    if (param.month)
        return 'm'
    if (param.date)
        return 'd'
}

function getDate(format, shift) {
    let date = new Date();

    switch (shift?.format) {
        case 'y':
            date.setFullYear(date.getFullYear() + shift.step);
            break;
        case 'm':
            date.setMonth(date.getMonth() + shift.step);
            break;
        case 'd':
            date.setDate(date.getDate() + shift.step);
            break;
    }

    switch (format) {
        case 'y':
            return date.getFullYear();
        case 'm':
            return date.getMonth() + 1;
        case 'd':
            return date.getDate();
        default:
            return date + '';
    }
}

yargs(hideBin(process.argv))
.options({
    'year': {
        alias: 'y',
        type: 'boolean',
        description: 'год'
    },
    'month': {
        alias: 'm',
        type: 'boolean',
        description: 'месяц'
    },
    'date': {
        alias: 'd',
        type: 'boolean',
        description: 'дата'
    },
})
.command('current', 'Текущая дата', () => {}, (argv) => {
    const format = getParam(argv);
    console.log(getDate(format));
})
.command('add [step]', 'Дата в будущем', () => {}, (argv) => {
    console.log(getDate(null, {
        format: getParam(argv),
        step: argv.step
    }));
})
.command('sub [step]', 'Дата в прошлом', () => {}, (argv) => {
    console.log(getDate(null, {
        format: getParam(argv),
        step: -argv.step
    }));
})
.argv