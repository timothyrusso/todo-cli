export const deleteFunction = () => {

    // Store which index is passed
    const deleteIndex = args[3];

    // If index is passed
    if (deleteIndex) {

        // Create a empty array
        let data = [];

        // Read the data from file and convert
        // it into string
        const fileData = fs
            .readFileSync(currentWorkingDirectory + 'todo.txt')
            .toString();

        data = fileData.split('\n');

        // Filter the data for any empty lines
        let filterData = data.filter(function (value) {
            return value !== '';
        });

        // If delete index is greater than no. of task
        // or less than zero
        if (deleteIndex > filterData.length || deleteIndex <= 0) {
            console.log(
                'Error: todo #' + deleteIndex
                + ' does not exist. Nothing deleted.',
            );
        } else {

            // Remove the task
            filterData.splice(filterData.length - deleteIndex, 1);

            // Join the array to form a string
            const newData = filterData.join('\n');

            // Write the new data back in file
            fs.writeFile(
                currentWorkingDirectory + 'todo.txt',
                newData,
                function (err) {
                    if (err) throw err;

                    // Logs the deleted index
                    console.log('Deleted todo #' + deleteIndex);
                },
            );
        }
    } else {

        // Index argument was no passed
        console.log(
            'Error: Missing NUMBER for deleting todo.');
    }
};