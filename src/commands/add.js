import { args } from "../../index.js";
import * as fs from 'fs';
import { currentWorkingDirectory } from "../../index.js";

export const addFunction = () => {

    // New todo string argument is stored
    const newTask = args[3];

    // If argument is passed
    if (newTask) {

        // Create a empty array
        let data = [];

        // Read the data from file todo.txt and
        // convert it in string
        const fileData = fs
            .readFileSync(currentWorkingDirectory + 'todo.txt')
            .toString();

        // New task is added to previous data
        fs.writeFile(
            currentWorkingDirectory + 'todo.txt',
            newTask + '\n' + fileData,

            function (err) {

                // Handle if there is any error
                if (err) throw err;

                // Logs the new task added
                console.log('Added todo: "' + newTask + '"');
            },
        );
    } else {

        // If argument was no passed
        console.log('Error: Missing todo string. Nothing added!');
    }
};