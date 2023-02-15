import boxen from "boxen";
import pc from "picocolors";
import gradient from "gradient-string";

export const infoFunction = () => {
    const UsageText = `
    ${pc.bold(gradient.pastel('---USAGE---'))}

        ${pc.blue('Add a new todo')}
        $ node index.js add "todo item"

        ${pc.green('Show remaining todos')}
        $ node index.js ls

        ${pc.red('Delete a todo')}
        $ node index.js del NUMBER

        ${pc.magenta('Complete a todo')}
        $ node index.js done NUMBER

        ${pc.yellow('Show usage')}
        $ npm run start

        ${pc.cyan('Statistics')}
        $ node index.js report
        `;

    console.log(boxen(UsageText, {padding: 0, borderStyle: 'round', width: 40, textAlignment: 'center', margin: 1}));
};