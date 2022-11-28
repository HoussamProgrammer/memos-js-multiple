const cards = document.querySelectorAll('.card');
const cardContainer = document.querySelector('.card-container');

const observer = new IntersectionObserver(entries => {
	entries.forEach (entry => {
		entry.target.classList.toggle('show', entry.isIntersecting);
	
		// // it can intersting if you want to stop observing after the image has been loaded, to release resources
		// if (entry.isIntersecting) {
		// 	observer.unobserve(entry.target);
		// }
	});
	console.log(`📡 `, entries);
}, {
	threshold: 1, 
});

// isIntersecting // mean is it visible on screen (min 1px)

// threshold: 1 // mean all element is visible at 100% then you apply the callback function
// rootMargin if you want shrink margin of the container without really modifying its reel value.

cards.forEach( card => observer.observe(card));

/* lazy loading
 * ================================= */		
const lastCardObserver = new IntersectionObserver(entries => {
	const lastCard = entries[0];

	if(!lastCard.isIntersecting) {
		return;
	}

	loadNewCards();
	lastCardObserver.unobserve(lastCard.target);
	lastCardObserver.observe(document.querySelector('.card:last-child'));
}, {});

lastCardObserver.observe(document.querySelector('.card:last-child'));

function loadNewCards() {
	for (let i = 0; i < 10; i++) {
		const card = document.createElement('div');
		card.textContent = 'New Card';
		card.classList.add('card');
		observer.observe(card);
		cardContainer.append(card);
	}
}
