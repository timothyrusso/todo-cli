import inquirer from 'inquirer';

import { infoFunction } from '../commands/info.js';
import { listFunction } from '../commands/list.js';
import { addFunction } from '../commands/add.js';
import { deleteFunction } from '../commands/delete.js';
import { doneFunction } from '../commands/done.js';
import { reportFunction } from '../commands/report.js';

const addInput = () => inquirer
.prompt([
  {
    type: 'input',
    name: 'add',
    message: 'Insert your task: '
  },
])
.then(answers => addFunction(answers.add));

export const prompt = inquirer
    .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: [
                'Add',
                'Remove',
                'Done',
                'List',
                'Info',
                'Report',
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
        return 'action completed'
    })

