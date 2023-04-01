const input = document.querySelector('.card__header__search');
const lists = document.querySelectorAll('li');

const checkList = () => {
	const text = input.value.toLowerCase();

								// Sposób z pętlą for of - zmienna list of lists

	for (const list of lists) {
		if (list.textContent.toLowerCase().indexOf(text) !== -1) {
			list.style.display = 'block';
		} else {
			list.style.display = 'none';
		}
	}

								// Sposób z pętlą forEach - zmienna list

	// list.forEach((drink) => {
	// 	if (drink.textContent.toLowerCase().indexOf(text) !== -1) {
	// 		drink.style.display = 'block';
	// 	} else {
	// 		drink.style.display = 'none';
	// 	}
	// });
};

input.addEventListener('keyup', checkList);
