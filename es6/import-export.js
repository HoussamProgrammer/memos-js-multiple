import * as fsPromises from 'fs/promises'
import path from 'path';
import { fileURLToPath } from 'url';

export function UserPI() {

	// with ES6 we can not access __dirname or __filename

	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	async function loadCurrentUser() {

		try {
			await fsPromises.writeFile(path.join(__dirname, 'ESSAI.txt'), 'Hello everyone')

		} catch (error) {
			console.log(`🚫 loadCurrentUser() `, error);
		}
	}

	return {
		loadCurrentUser
	}
}