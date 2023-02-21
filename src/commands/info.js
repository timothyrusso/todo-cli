import boxen from "boxen";
import pc from "picocolors";
import gradient from "gradient-string";
import { prompt } from "../prompt/prompt.js";

export const infoFunction = () => {
    const UsageText = `
    ${pc.bold(gradient.pastel('---COMMANDS---'))}

        ${pc.blue('Add new task:')} ${pc.bold('ADD')}

        ${pc.green('Show remaining tasks:')} ${pc.bold('LIST')}

        ${pc.red('Delete a todo:')} ${pc.bold('REMOVE')}

        ${pc.magenta('Complete a todo:')} ${pc.bold('DONE')}

        ${pc.yellow('Show usage:')} ${pc.bold('INFO')}

        ${pc.cyan('Statistics:')} ${pc.bold('REPORT')}

        ${pc.cyan('Exit:')} ${pc.bold('EXIT')}
        `;

    console.log(boxen(UsageText, {padding: 0, borderStyle: 'round', width: 35, textAlignment: 'center', margin: 1}));

    prompt();
};