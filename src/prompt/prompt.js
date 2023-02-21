import inquirer from 'inquirer';

import { infoFunction } from '../commands/info.js';
import { listFunction } from '../commands/list.js';
import { reportFunction } from '../commands/report.js';
import { addInput } from '../helpers/addInput.js';
import { deleteInput } from '../helpers/deleteInput.js';
import { doneInput } from '../helpers/doneInput.js';

export const prompt = () => inquirer
    .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: [
                'ADD',
                'REMOVE',
                'DONE',
                'LIST',
                'INFO',
                'REPORT',
                'EXIT'
            ],
            filter(val) {
                return val.toLowerCase();
            },
        }
    ])
    .then((response) => {
        switch (response.action) {
            case 'add': {
                addInput()
                break;
            }

            case 'list': {
                listFunction();
                break;
            }

            case 'remove': {
                deleteInput()
                break;
            }

            case 'done': {
                doneInput();
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

            case 'exit': {
                console.log('Good bye!');
                break;
            }

            default: {
                infoFunction();
                // We will display help when no
                // argument is passed or invalid
                // argument is passed
            }
        }
        return 'action completed'
    })
