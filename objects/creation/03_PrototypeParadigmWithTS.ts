// --------------------------------------------------------------------------------------------------
// 🔹 CREATE A TYPE
// --------------------------------------------------------------------------------------------------
export type TFileSystemService = {
	loadDirContent(targetPath: string): Fichier[];
	isDirectory(targetPath: string): boolean
};

// --------------------------------------------------------------------------------------------------
// 🔹 CREATE A PROTOTYPE THAT USE THE TARGET TYPE AS CONTRACT
// --------------------------------------------------------------------------------------------------
const FileSystemServicePrototype: TFileSystemService = {
	loadDirContent: function (targetPath: string): Fichier[] {
		console.log(`🚧 #loadDirContent() `);
		return [];
	},
	isDirectory: function (targetPath: string): boolean {
		return false;
	}
}

// --------------------------------------------------------------------------------------------------
// 🔹 USE PROTOTYPE ABOVE AS PROTO FOR EACH NEW OBJECT
// --------------------------------------------------------------------------------------------------
export function FileSystemService() {
	return Object.create(FileSystemServicePrototype);
}