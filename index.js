#!/usr/bin/env node

import * as fs from 'fs';

import { infoFunction } from './src/commands/info.js';
import { listFunction } from './src/commands/list.js';
import { addFunction } from './src/commands/add.js';
import { deleteFunction } from './src/commands/delete.js';
import { doneFunction } from './src/commands/done.js';
import { reportFunction } from './src/commands/report.js';

// Accessing arguments
export const args = process.argv;

// The "index.js" is 8 characters long
// so -8 removes last 8 characters
export const currentWorkingDirectory = args[1].slice(0, -8);

if (fs.existsSync(currentWorkingDirectory + 'todo.txt') === false) {
    let createStream = fs.createWriteStream('todo.txt');
    createStream.end();
}
if (fs.existsSync(currentWorkingDirectory + 'done.txt') === false) {
    let createStream = fs.createWriteStream('done.txt');
    createStream.end();
}

switch (args[2]) {
    case 'add': {
        addFunction();
        break;
    }

    case 'ls': {
        listFunction();
        break;
    }

    case 'del': {
        deleteFunction();
        break;
    }

    case 'done': {
        doneFunction();
        break;
    }

    case 'help': {
        infoFunction();
        break;
    }

    case 'report': {
        reportFunction();
        break;
    }

    default: {
        infoFunction();
        // We will display help when no
        // argument is passed or invalid
        // argument is passed
    }
}

