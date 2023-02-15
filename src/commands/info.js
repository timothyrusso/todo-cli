import boxen from "boxen";
import pc from "picocolors";
import gradient from "gradient-string";

export const infoFunction = () => {
    const UsageText = `
    ${pc.bold(gradient.pastel('---COMMANDS---'))}

        ${pc.blue('Add new task:')} ${pc.bold('ADD')}

        ${pc.green('Show remaining tasks:')} ${pc.bold('LIST')}

        ${pc.red('Delete a todo:')} ${pc.bold('REMOVE number')}

        ${pc.magenta('Complete a todo:')} ${pc.bold('DONE number')}

        ${pc.yellow('Show usage:')} ${pc.bold('INFO')}

        ${pc.cyan('Statistics:')} ${pc.bold('REPORT')}
        `;

    console.log(boxen(UsageText, {padding: 0, borderStyle: 'round', width: 35, textAlignment: 'center', margin: 1}));
};