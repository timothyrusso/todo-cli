import * as fs from 'fs';
import { currentWorkingDirectory } from "../../index.js";

export const taskList = () => {
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

    return filterData
}