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
// 🔹 ADDITIONAL FUNCTIONS NON PRESENT IN PROTOTYPE SPECIFIC TO THESE INSTANCE
// --------------------------------------------------------------------------------------------------
type TFS = {
	getData(): void;
};

export type TFSExtended = TFS & TFileSystemService;

export function makeFileSystemService(): TFSExtended {
	const currentFS: TFS = {
		getData: function (): void {
			console.log(`📡 getData() >>>>>`);
		}
	}

	// create an instance with FileSystemPrototype as Prototype
	let instance = Object.create(FileSystemServicePrototype);

	// copy all new methods and private variables to the instance
	return Object.assign(instance, currentFS);
}
