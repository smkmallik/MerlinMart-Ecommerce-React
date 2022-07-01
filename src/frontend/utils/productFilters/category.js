const getFilteredProducts = (products, categories) => {
    const filteredlist = [];

	let count = 0;
	for (let category in categories) {
		if (categories[category]) {
			let newList = products.filter(
				(item) => category === item.category.toLowerCase()
			);

			filteredlist.push(...newList);
		} else {
			count++;
		}
	}

	return count === 6 ? products : filteredlist;
};

export { getFilteredProducts };
