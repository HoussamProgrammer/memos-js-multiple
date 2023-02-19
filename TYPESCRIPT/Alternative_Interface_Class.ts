type FSService = {
	currentUser: string;
	loadDirContent(targetPath: string): void;
	getOS(): string;
};

function createFSService(): FSService {
	const _OS = 'linux'

	const DefaultFSService: FSService = {
		currentUser: '',
		loadDirContent: function (targetPath: string): void {
			console.log(`📡 currentOS ${_OS}`,);
		},
		getOS: function (): string {
			throw new Error('Function not implemented.');
		}
	}

	return DefaultFSService;
}

const fileSysService: FSService = createFSService();

fileSysService.loadDirContent('hello');