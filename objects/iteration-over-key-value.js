const allDimensions = {
	mobileS: 320,
	mobileM: 375,
	mobileL: 425,
	tablet: 768,
	laptop: 1024,
	laptopL: 1044,
	bigScreen: 2560
};

// if currentScreenSize is not sup then the layout gonna take previousScreenSize
Object.entries(allDimensions).forEach(([key, value]) => {

	console.log(`🔁 #key: ${key} #value: ${value}`);

});