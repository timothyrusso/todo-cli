import * as fs from 'fs';
import { args } from "../../index.js";
import { currentWorkingDirectory } from "../../index.js";

export const doneFunction = () => {

    // Store the index passed as argument
    const doneIndex = args[3];

    // If argument is passed
    if (doneIndex) {

        // Empty array
        let data = [];

        // Create a new date object
        let dateobj = new Date();

        // Convert it to string and slice only the
        // date part, removing the time part
        let dateString = dateobj.toISOString().substring(0, 10);

        // Read the data from todo.txt
        const fileData = fs
            .readFileSync(currentWorkingDirectory + 'todo.txt')
            .toString();

        // Read the data from done.txt
        const doneData = fs
            .readFileSync(currentWorkingDirectory + 'done.txt')
            .toString();

        // Split the todo.txt data
        data = fileData.split('\n');

        // Filter for any empty lines
        let filterData = data.filter(function (value) {
            return value !== '';
        });

        // If done index is greater than no. of task or <=0
        if (doneIndex > filterData.length || doneIndex <= 0) {
            console.log('Error: todo #'
                + doneIndex + ' does not exist.');
        } else {

            // Delete the task from todo.txt
            // data and store it
            const deleted = filterData.splice(
                filterData.length - doneIndex, 1);

            // Join the array to create a string
            const newData = filterData.join('\n');

            // Write back the data in todo.txt
            fs.writeFile(
                currentWorkingDirectory + 'todo.txt',
                newData,
                function (err) {
                    if (err) throw err;
                },
            );

            // Write the stored task in done.txt
            // along with date string
            fs.writeFile(
                currentWorkingDirectory + 'done.txt',
                'x ' + dateString + ' ' + deleted
                + '\n' + doneData,
                function (err) {
                    if (err) throw err;
                    console.log('Marked todo #'
                        + doneIndex + ' as done.');
                },
            );
        }
    } else {

        // If argument was not passed
        console.log('Error: Missing NUMBER for'
            + ' marking todo as done.');
    }
};