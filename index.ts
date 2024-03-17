import inquirer from "inquirer"
let answers2
do {
    let answers = await inquirer.prompt([
        {
            message: " Enter First Number",
            type: "number",
            name: "FirstNum"
        },
        {
            message: " Enter Second Number",
            type: "number",
            name: "SecondNum"
        },
        {
            message: " Select one option ",
            type: "list",
            name: "operation",
            choices: ['addition', 'substraction', 'division', 'multiplication']
        },

    ])



    if (answers.operation === 'addition') {
        console.log(`sum of ${answers.FirstNum} and ${answers.SecondNum} is ${answers.FirstNum + answers.SecondNum}`);
    } else if (answers.operation === 'substraction') {
        console.log(`Substraction of ${answers.FirstNum} and ${answers.SecondNum} is ${answers.FirstNum - answers.SecondNum}`);
    } else if (answers.operation === 'division') {
        console.log(`division of ${answers.FirstNum} and ${answers.SecondNum} is ${answers.FirstNum / answers.SecondNum}`);
    } else if (answers.operation === 'multiplication') {
        console.log(`multiplication of ${answers.FirstNum} and ${answers.SecondNum} is ${answers.FirstNum * answers.SecondNum}`);
    } else {
        console.log("you have enter invalid number");
    }
    answers2 = await inquirer.prompt([{
        message: " Would you want to continue?",
        name: "repeat",
        type: "list",
        choices: ["Yes", "No"]
    }])
} while (answers2.repeat === "Yes")

console.log(" THANK YOU ");
