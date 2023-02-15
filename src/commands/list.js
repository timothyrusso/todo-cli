import boxen from "boxen";
import { taskList } from "../helpers/taskList.js";

export const listFunction = () => {

    let filterData = taskList();

    if (filterData.length === 0) {
        console.log('There are no pending todos!');
    }

    for (let i = 0; i < filterData.length; i++) {
        console.log(boxen((filterData.length - i) + '. '
            +  filterData[i], {padding: 1, margin: 0, borderStyle: 'double', borderColor: 'green', borderStyle: 'classic', width: 50}));
    }
};