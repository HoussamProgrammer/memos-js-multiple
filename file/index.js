const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
	try {
		const data = await fsPromises.readFile(path.join(__dirname, 'lorem.txt'), 'utf-8');
		//console.log(`📡 `, data);

		await fsPromises.writeFile(path.join(__dirname, 'promiseWrite.txt'), data);
		await fsPromises.appendFile(path.join(__dirname, 'promiseWrite.txt'), '\n\nNice to meet you!');
		await fsPromises.rename(path.join(__dirname, 'promiseWrite.txt'), path.join(__dirname, 'newFileCopied.txt'),)

		const newData = await fsPromises.readFile(path.join(__dirname, 'newFileCopied.txt'), 'utf-8');

		console.log(`🏁 `, newData);

	} catch (error) {
		console.log(error);
	}
}

fileOps();


process.on('uncaughtException', err => {
	console.log(`🚫 There was an uncaught error ${err}`);
	process.exit(1);
});

