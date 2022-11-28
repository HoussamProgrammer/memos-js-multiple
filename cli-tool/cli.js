#!/usr/bin/env node

/*
 * SHEBANG #! 
 * 
 * You always want to include at the top the shebang 
 * when writing a command line script for somebbody else to use
 * 
 * it's tells the operating system to execute the code 
 * with node.js version installed on the user's local system from
 */

#!/usr/bin / env node
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";



// npm i chalk chalk-animation figlet gradient-string inquirer nanospinner
//
// chalk >> color the output text 
// chalk-animation >> add animation to the colored text
// inquirer >> job collect the user input in different ways
// figlet >> for ASCII Art
// gradient >> is a gradient color like chalk but for letters

//console.log(chalk.bgGreen('Hello world!'))



const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

// Simple Input Scanner
let playerName;
async function askName() {
	const answers = await inquirer.prompt({
		name: 'player_name',
		type: 'input',
		message: 'What is your name ?',
		default() {
			return 'Player';
		}
	});

	playerName = answers.player_name;

	console.log('Your name is ' + playerName);

}
await askName();

// Multiple Choice Input
async function question_1() {
	const answers = await inquirer.prompt({
		name: 'question_1',
		type: 'list',
		message: 'Javascript was created in 10 days then releaded on \n',
		choices: [
			'May 23rd, 1995',
			'Nov 24th, 1995',
			'Dec 4th, 1995',
			'Dec 17, 1997'
		],
	});

	return handleAnswer(answers.question_1 === 'Dec 4th, 1995');
}

async function handleAnswer(isCorrect) {
	const spinner = createSpinner('Checking answer...').start();
	await sleep();

	if (isCorrect) {
		console.log('correct');
	}
	else {
		console.log('incorrect');
	}
}

question_1();
