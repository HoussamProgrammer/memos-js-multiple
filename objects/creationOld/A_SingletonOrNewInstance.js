// --------------------------------------------------------------------------------------------------
// 🔹 For Multiple Instance
// --------------------------------------------------------------------------------------------------
function UserPI() {

	function loadCurrentUser() {
		console.log(`🚧 #loadCurrentUser()`);
	}

	function createFolder() {

	}

	return {
		loadCurrentUser,
		createFolder
	}
}

const userPIOne = UserPI();
const userPITwo = UserPI();
const userPIThree = UserPI();

// --------------------------------------------------------------------------------------------------
// 🔸 As Singleton
// --------------------------------------------------------------------------------------------------
const UserPI = (function () {

	function loadCurrentUser() {
		console.log(`🚧 #loadCurrentUser()`);

	}

	return {
		loadCurrentUser
	}
})();
