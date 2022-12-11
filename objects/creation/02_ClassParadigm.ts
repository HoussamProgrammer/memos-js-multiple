interface IFileSystemService {
	loadDirContent(targetPath: string): string[];
	isDirectory(targetPath: string): boolean
};

class FileSystemService implements IFileSystemService {

	loadDirContent(targetPath: string): string[] {
		throw new Error("Method not implemented.");
	}
	isDirectory(targetPath: string): boolean {
		throw new Error("Method not implemented.");
	}
}