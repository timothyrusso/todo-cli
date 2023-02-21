import inquirer from "inquirer";
import { addFunction } from "../commands/add.js";

export const addInput = () => inquirer
    .prompt([
        {
            type: 'input',
            name: 'add',
            message: 'Insert your task: '
        },
    ])
    .then(answers => addFunction(answers.add));