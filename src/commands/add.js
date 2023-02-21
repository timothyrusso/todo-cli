import * as fs from 'fs';
import { currentWorkingDirectory } from "../../index.js";
import { prompt } from '../prompt/prompt.js';

export const addFunction = (newTask) => {

    let hash = (Math.random() + 1).toString(36).substring(2);

    // If argument is passed
    if (newTask) {

        // Read the data from file todo.txt and
        // convert it in string
        const fileData = fs
            .readFileSync(currentWorkingDirectory + 'todo.txt')
            .toString();

        // New task is added to previous data
        fs.writeFile(
            currentWorkingDirectory + 'todo.txt',
            newTask + '   ###hash-' + hash + '\n' + fileData,

            function (err) {

                // Handle if there is any error
                if (err) throw err;

                // Logs the new task added
                console.log('Added todo: "' + newTask + '"');
                prompt();
            },
        );
    } else {

        // If argument was no passed
        console.log('Error: Missing todo string. Nothing added!');
        prompt();
    }
};