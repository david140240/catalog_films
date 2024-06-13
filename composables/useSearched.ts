import type { Item } from '~/types';

export const searchedField = (catalog: Item[], field: string) => {
	if (catalog && field) {
		let currentArray: Item[] = [];
		for (let obj of catalog) {
			for (let key in obj) {
				if (key === 'posterUrl' || key === 'posterUrlPreview') {
					continue;
				}
				if (obj[key] && typeof obj[key] === 'string') {
					if (obj[key].toLowerCase().indexOf(field.toLowerCase()) !== -1) {
						currentArray.push(obj);
						break;
					}
				} else if (obj[key] && typeof obj[key] === 'number') {
					if (obj[key].toString().indexOf(field) !== -1) {
						currentArray.push(obj);
						break;
					}
				} else if (obj[key] && Array.isArray(obj[key])) {
					console.log('el is arraaaaay');
					for (let inArr of obj[key]) {
						for (let inObj in inArr) {
							if (inArr[inObj].toLowerCase().indexOf(field) !== -1) {
								currentArray.push(obj);
								break;
							}
						}
					}
				}
			}
		}
		console.log('currentAray', currentArray);
		return currentArray;
	} else {
		return catalog;
	}
};
