import inquirer from 'inquirer';

import { infoFunction } from '../commands/info.js';
import { listFunction } from '../commands/list.js';
import { addFunction } from '../commands/add.js';
import { deleteFunction } from '../commands/delete.js';
import { doneFunction } from '../commands/done.js';
import { reportFunction } from '../commands/report.js';
import { taskList } from '../helpers/taskList.js';

const addInput = () => inquirer
    .prompt([
        {
            type: 'input',
            name: 'add',
            message: 'Insert your task: '
        },
    ])
    .then(answers => addFunction(answers.add));

const deleteInput = () => {
    if (taskList().length > 0) {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'remove',
                    message: 'What do you want to remove?',
                    choices: taskList(),
                    filter(val) {
                        return val.toLowerCase();
                    },
                }
            ]).then(answers => {
                let index = checkIndex(taskList().reverse(), answers.remove)
                deleteFunction(index)
            })
    } else {
        console.log('There are no tasks to delete!')
    }
}

const doneInput = () => {
    if (taskList().length > 0) {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'done',
                    message: 'What task do you have completed?',
                    choices: taskList(),
                    filter(val) {
                        return val.toLowerCase();
                    },
                }
            ]).then(answers => {
                let index = checkIndex(taskList().reverse(), answers.done)
                doneFunction(index)
            })
    } else {
        console.log('You have completed all the tasks!')
    }
}

const checkIndex = (array, answer) => {
    let deleteIndex = 0;
    array.forEach((element, index) => {
        if (element.toLowerCase() === answer) {
            deleteIndex = index + 1
        }
    })
    return deleteIndex
}

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

            default: {
                infoFunction();
                // We will display help when no
                // argument is passed or invalid
                // argument is passed
            }
        }
        return 'action completed'
    })
