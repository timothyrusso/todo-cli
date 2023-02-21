import inquirer from "inquirer";
import { taskList } from "./taskList.js";
import { checkIndex } from "./checkIndex.js";
import { doneFunction } from "../commands/done.js";

export const doneInput = () => {
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