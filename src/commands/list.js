import * as fs from 'fs';
import boxen from "boxen";
import { currentWorkingDirectory } from "../../index.js";

export const listFunction = () => {

    // Create a empty array
    let data = [];

    // Read from todo.txt and convert it
    // into a string
    const fileData = fs.readFileSync(
        currentWorkingDirectory + 'todo.txt')
        .toString();

    // Split the string and store into array
    data = fileData.split('\n');

    // Filter the string for any empty lines in the file
    let filterData = data.filter(function (value) {
        return value !== '';
    });

    if (filterData.length === 0) {
        console.log('There are no pending todos!');
    }

    for (let i = 0; i < filterData.length; i++) {
        console.log(boxen((filterData.length - i) + '. '
            +  filterData[i], {padding: 1, margin: 0, borderStyle: 'double', borderColor: 'green', borderStyle: 'classic', width: 50}));
    }
};