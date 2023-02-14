const InfoFunction = () => {
    const UsageText = `
        USAGE :

        ### Add a new todo
        $ node index.js add "todo item"

        ### Show remaining todos
        $ node index.js ls

        ### Delete a todo
        $ node index.js del NUMBER

        ### Complete a todo
        $ node index.js done NUMBER

        ### Show usage
        $ node index.js help

        ### Statistics
        $ node index.js report
        `;

    console.log(UsageText);
};

export default InfoFunction;