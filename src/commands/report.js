export const reportFunction = () => {

    // Create empty array for data of todo.txt
    let todoData = [];

    // Create empty array for data of done.txt
    let doneData = [];

    // Create a new date object
    let dateobj = new Date();

    // Slice the date part
    let dateString = dateobj.toISOString().substring(0, 10);

    // Read data from both the files
    const todo = fs.readFileSync(currentWorkingDirectory
        + 'todo.txt').toString();
    const done = fs.readFileSync(currentWorkingDirectory
        + 'done.txt').toString();

    // Split the data from both files
    todoData = todo.split('\n');

    doneData = done.split('\n');
    let filterTodoData = todoData.filter(function (value) {
        return value !== '';
    });

    let filterDoneData = doneData.filter(function (value) {

        // Filter both the data for empty lines
        return value !== '';
    });

    console.log(
        dateString +
        ' ' +
        'Pending : ' +
        filterTodoData.length +
        ' Completed : ' +
        filterDoneData.length,
        // Log the stats calculated
    );
};