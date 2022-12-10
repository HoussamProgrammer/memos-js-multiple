// --------------------------------------------------------------------------------------------------
// 🔹 COMMON METHODS FOR ALL INSTANCES IN PROTOTYPE
// --------------------------------------------------------------------------------------------------
type TFileSystemServicePrototype = {
	loadDirContent(targetPath: string): Fichier[];
	isDirectory(targetPath: string): boolean;
};

const FileSystemServicePrototype: TFileSystemServicePrototype = {
	loadDirContent: function (targetPath: string): Fichier[] {
		console.log(`🚧 #loadDirContent()`);
		return [];
	},
	isDirectory: function (targetPath: string): boolean {
		return false;
	}
};


// --------------------------------------------------------------------------------------------------
// 🔸 ADDITIONAL METHODS IN EACH INSTANCE (OUTSIDE OF PROTOTYPE)
// --------------------------------------------------------------------------------------------------
type TFileSystemServiceExtended = {
	counter: string;
	getData(): void;
};

// --------------------------------------------------------------------------------------------------
// 🔸 COMBINE PROTOTYPE TYPE AND CUSTOM TYPE AS ONE TYPE
// --------------------------------------------------------------------------------------------------
export type TFileSystemService = TFileSystemServiceExtended & TFileSystemServicePrototype;

export function makeFileSystemService(): TFileSystemService {
	const currentFS: TFileSystemServiceExtended = {
		counter: '',
		getData: function (): void {
			console.log(`📡 getData() >>>>> #counter: ${this.counter}`);
		}
	}

	// create an instance with FileSystemPrototype as Prototype
	let instance = Object.create(FileSystemServicePrototype);

	// copy all new methods and private variables to the instance
	return Object.assign(instance, currentFS);
}