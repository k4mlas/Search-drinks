const input = document.querySelector('.card__header__search');
const list = document.querySelectorAll('li');

const checkList = () => {
	const text = input.value.toLowerCase();

	list.forEach((drink) => {
		if (drink.textContent.toLowerCase().indexOf(text) !== -1) {
			drink.style.display = 'block';
		} else {
			drink.style.display = 'none';
		}
	});
};

input.addEventListener('keyup', checkList);
