const mutationObserver = new MutationObserver(entries => {
	console.log(entries);
});


const parent = document.querySelector('.parent');

/**
 * @firstParam: what to observer
 * @secondParam: what options
 */
mutationObserver.observe(parent, { childList: true });
// you can observe two in same time
//mutationObserver.observe(parent.children[0], )

//parent.children[0].remove();

/* Check if one attributes has changed
 * ================================= */
mutationObserver.observe(parent, {
	attributes: true,
	attributeOldValue: true,
	attributeFilter: ['class'],
});

parent.classList.add('nothing');
parent.classList.remove('hidden');
 

/* Check if Text is changed
 * ================================= */

// /!\ 🔦 in HTML we have element and node. text is considered as node. and text as node is a child of 'Child 1' /!\ 
mutationObserver.observe(parent.children[0].childNodes[0], {
	characterData: true,
	characterDataOldValue: true
})


/* 🌳 Check element and all its subtree
 * ================================= */
mutationObserver.observe(parent, {
	subtree: true,
	attributes: true,
	attributeFilter: ['class'],
	attributeOldValue: true
});

parent.children[0].classList.add('hidden');

// /!\ 🚨 like rxjs Disposable you have to release when your are done or you are in another page/!\ 
mutationObserver.disconnect();