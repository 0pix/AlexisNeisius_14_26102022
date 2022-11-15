import React, {useState} from 'react';


const TableHead = ({children, data, setData, props, type}) => {
	const [active, setActive] = useState("")
	// const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

	const sortArrayString = () => {
		let array = [...data]
		setActive(props)
		if (active !== props) {
			array.sort((a, b) => {
				const propsA = a[props].toUpperCase(); // ignore upper and lowercase
				const propsB = b[props].toUpperCase(); // ignore upper and lowercase
				if (propsA < propsB) {
					return -1;
				}
				if (propsA > propsB) {
					return 1;
				}
				// names must be equal
				return 0;
			});
		} else {
			array.reverse()
		}
		setData(array)
	}


	const sortArrayDate = () => {
		let array = [...data]
		setActive(props)
		if (active !== props) {
			array.sort((a, b) => {
				const propsA = a[props].split('/').reverse().join('');
				const propsB = b[props].split('/').reverse().join('');
				return propsA > propsB ? 1 : propsA < propsB ? -1 : 0;
			});
		} else {
			array.reverse()
		}
		setData(array)
	}


	if (type === 'string') {
		return (
			<th onClick={sortArrayString}>{children}</th>
		);
	}
	if (type === 'date') {
		return (
			<th onClick={() => sortArrayDate(data, props)}>{children}</th>
		);
	}

};

export default TableHead;
