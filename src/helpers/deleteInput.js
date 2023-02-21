import inquirer from "inquirer";
import { taskList } from "./taskList.js";
import { deleteFunction } from "../commands/delete.js";
import { checkIndex } from "./checkIndex.js";

export const deleteInput = () => {
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