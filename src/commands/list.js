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

    let pendingTodos = chalk.green(`
    There are no pending todos!
    `)

    if (filterData.length === 0) {
        console.log(pendingTodos);
    }

    for (let i = 0; i < filterData.length; i++) {
        console.log((filterData.length - i) + '. '
            + filterData[i]);
    }
};