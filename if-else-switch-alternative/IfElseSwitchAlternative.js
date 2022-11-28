function getOperatingSystem(targetOs) {
	switch (targetOs) {
		case 'WINDOWS':
			return 'Windows';
		case 'POSIX_UNIX':
			return 'Unix';
		case 'POSIX_LINUX':
			return 'Linux';
		case 'POSIX_MAC':
			return 'Mac OS';
		default:
			return 'UNDEFINED';
	}
}

function getOperatingSystemWithObjectLiteral(targetOs) {
	
	const operatingSystemObject = {
		'WINDOWS': 'Windows',
		'POSIX_UNIX': 'Unix',
		'POSIX_LINUX': 'Linux',
		'POSIX_MAC': 'Mac OS'
	}

	// ?? like kotlin; old way is => value || 'defaultValue'; 
	return operatingSystemObject[targetOs.toUppercase()] ?? 'target os UNDEFINED';
}