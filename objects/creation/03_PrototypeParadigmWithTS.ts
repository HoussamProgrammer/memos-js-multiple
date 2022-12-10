export type TFileSystem = {
	loadDirContent(targetPath: string): Fichier[];
	isDirectory(targetPath: string): boolean
};

const FileSystemPrototype: TFileSystem = {
	loadDirContent: function (targetPath: string): Fichier[] {
		console.log(`🚧 #loadDirContent() `);
		return [];
	},
	isDirectory: function (targetPath: string): boolean {
		return false;
	}
}

export function FileSystemService() {
	return Object.create(FileSystemPrototype);
}