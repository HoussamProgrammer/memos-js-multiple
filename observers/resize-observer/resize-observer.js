// 🔦 when an element size changed but the media query still the same
const box = document.querySelector('.box');
const container = document.querySelector('.container');

// all things that your observer are passed as entries
const observer = new ResizeObserver((entries) => {
	// first element is our element observed
	const boxElement = entries[0];
	const isSmall = boxElement.contentRect.width < 150;
	boxElement.target.style.backgroundColor = isSmall ? 'blue' : 'red';
});

// what to observe
observer.observe(box);
