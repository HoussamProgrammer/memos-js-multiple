// old way with callback
function watchTutorialCallback(callback, errorCallback) {
	let userLeft = false
	let userWatchingCatMeme = false

	if (userLeft) {
		errorCallback({
			name: 'User Left',
			message: ':('
		})
	} else if (userWatchingCatMeme) {
		errorCallback({
			name: 'User Watching Cat Meme',
			message: 'WebDevSimplified < Cat'
		})
	} else {
		callback('Thumbs up and Subscribe')
	}
}

watchTutorialCallback(message => {
	console.log(message)
}, error => {
	console.log(error.name + ' ' + error.message)
})


// new way with Promise; with lambda we implicitly replace all callback with 'resolve' and error with 'reject'
function watchTutorialPromise() {
	let userLeft = false
	let userWatchingCatMeme = false
	return new Promise((resolve, reject) => {
		if (userLeft) {
			reject({
				name: 'User Left',
				message: ':('
			})
		} else if (userWatchingCatMeme) {
			reject({
				name: 'User Watching Cat Meme',
				message: 'WebDevSimplified < Cat'
			})
		} else {
			resolve('Thumbs up and Subscribe')
		}
	})
}

// call promise
watchTutorialPromise().then(message => {
	console.log(message)
}).catch(error => {
	console.log(error.name + ' ' + error.message)
})


// multiple promises
const recordVideoOne = new Promise((resolve, reject) => {
	resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
	resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
	resolve('Video 3 Recorded')
})

// wait for all of them
Promise.all([
	recordVideoOne,
	recordVideoTwo,
	recordVideoThree
]).then(messages => {
	console.log(messages)
})

// return as soon that one is resolved
Promise.race([
	recordVideoOne,
	recordVideoTwo,
	recordVideoThree
]).then(message => {
	console.log(message)
})