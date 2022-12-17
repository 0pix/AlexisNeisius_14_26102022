import chevron from '../../../assets/svg/arrow-table.svg'


const TableHead = ({children, data, setData, props, active, setActive, reverse, setReverse}) => {


	const sortArrayString = () => {
		let array = [...data]
		setActive(props)

		if (props !== active) {
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
			setReverse(false)
		} else {
			array.reverse()
			setReverse(!reverse)
		}

		setData(array)
	}

	const sortArrayDate = () => {
		let array = [...data]
		setActive(props)


		if (props !== active) {
			array.sort((a, b) => {
				const propsA = a[props].split('/').reverse().join('');
				const propsB = b[props].split('/').reverse().join('');
				return propsA > propsB ? 1 : propsA < propsB ? -1 : 0;
			});
			setReverse(false)
		} else {
			array.reverse()
			setReverse(!reverse)
		}
		setData(array)
	}


	if (data.length > 0) {
		const regExp = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;
		if (data[0][props].match(regExp)) {
			return (
				<th className={reverse ? "reverseArray" : null}
						onClick={() => sortArrayDate()}>{children} date{active === props &&
					<img src={chevron}
							 alt={chevron}/>}
				</th>);
		} else {
			return (
				<th className={reverse ? "reverseArray" : null} onClick={sortArrayString}>{children} {active === props &&
					<img src={chevron}
							 alt={chevron}/>}</th>
			);
		}
	}
	return (<th className={reverse ? "reverseArray" : null}
	>{children}
	</th>)


}
export default TableHead;
