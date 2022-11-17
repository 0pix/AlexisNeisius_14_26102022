import React, {useState, useContext} from 'react';
import {SearchContext} from "../Context/SearchContext";


const TableHead = ({children, data, props, active, setActive}) => {
	// const {search, setSearch} = useContext(SearchContext)
	// const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

	const sortArrayString = () => {
		let array = [...data]
		setActive(props)

		if (props === active) {
			console.log('c\'est un reverse !')
		}

		array.sort((a, b) => {
			const propsA = a[props].toUpperCase();
			const propsB = b[props].toUpperCase();
			if (propsA < propsB) {
				return -1;
			}
			if (propsA > propsB) {
				return 1;
			}
			return 0;
		});
		// console.log(active)
		// console.log(active)

		// let array = [...data]
		// setActive(props)
		// if (active !== props) {
		// 	array.sort((a, b) => {
		// 		const propsA = a[props].toLowerCase();
		// 		const propsB = b[props].toLowerCase();
		// 		if (propsA < propsB) {
		// 			return -1;
		// 		}
		// 		if (propsA > propsB) {
		// 			return 1;
		// 		}
		// 		return 0;
		// 	});
		// } else {
		// 	array.reverse()
		// }
		// setData(array)


		// if (search.includes('toi')) {
		// 	setSearch('ça marche')
		// } else {
		// 	setSearch('coucou toi')
		// }
	}
	// console.log('active :', active)
	return (
		<th onClick={sortArrayString}>{children}</th>
	);

// 	const sortArrayDate = () => {
// 		let array = [...data]
// 		setActive(props)
//
// 	// 	array.sort((a, b) => {
// 	// 		const propsA = a[props].split('/').reverse().join('');
// 	// 		const propsB = b[props].split('/').reverse().join('');
// 	// 		return propsA > propsB ? 1 : propsA < propsB ? -1 : 0;
// 	// 	});
// 	//
// 	// 	setData(array)
// 	//
// 	//
// 	// 	// let array = [...data]
// 	// 	// setActive(props)
// 	// 	// if (active !== props) {
// 	// 	// 	array.sort((a, b) => {
// 	// 	// 		const propsA = a[props].split('/').reverse().join('');
// 	// 	// 		const propsB = b[props].split('/').reverse().join('');
// 	// 	// 		return propsA > propsB ? 1 : propsA < propsB ? -1 : 0;
// 	// 	// 	});
// 	// 	// } else {
// 	// 	// 	array.reverse()
// 	// 	// }
// 	// 	// setData(array)
// 	// 	// console.log(active)
// 	// 	// console.log(props)
// 	//
// 	// }
//  return (<th onClick={sortArrayString}>{children}</th>)
//
// 	// if (type === 'string') {
// 	// 	return (
// 	// 		<th onClick={sortArrayString}>{children}</th>
// 	// 	);
// 	// }
// 	// if (type === 'date') {
// 	// 	return (
// 	// 		<th onClick={() => sortArrayDate(data, props)}>{children}</th>
// 	// 	);
// 	// }
//
// };
}
export default TableHead;
