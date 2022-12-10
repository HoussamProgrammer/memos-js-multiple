interface IFileSystemService {
	loadDirContent(targetPath: string): Fichier[];
	isDirectory(targetPath: string): boolean
};

class FileSystemService implements IFileSystemService {

	loadDirContent(targetPath: string): Fichier[] {
		throw new Error("Method not implemented.");
	}
	isDirectory(targetPath: string): boolean {
		throw new Error("Method not implemented.");
	}
}


type Fichier = {
	name: string,
	size: number,
	path: string
};