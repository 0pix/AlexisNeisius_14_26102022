import './Table.css'
import React, {useReducer, useState} from 'react';

function Table({data}) {
	const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
	const [active, setActive] = useState("")

	const sortArrayString = (array, props) => {
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
			console.log('NEW ONE')
		} else
			forceUpdate();
	}

	const sortArrayDate = (array, props) => {
		setActive(props)
		if (active !== props) {
			array.sort((a, b) => {
				const propsA = a[props].split('/').reverse().join('');
				const propsB = b[props].split('/').reverse().join('');
				return propsA > propsB ? 1 : propsA < propsB ? -1 : 0;
			});
		}
		array.reverse()
		forceUpdate();
	}

	console.log(active)
	return (
		<div className={'table'}>
			<table>
				<tbody>
				<tr>
					<th onClick={() => sortArrayString(data, 'firstName')}>First Name</th>
					<th onClick={() => sortArrayString(data, 'lastName')}>Last Name</th>
					<th onClick={() => sortArrayDate(data, 'startDate')}>Start Date</th>
					<th onClick={() => sortArrayDate(data, 'department')}>Department</th>
					<th onClick={() => sortArrayDate(data, 'dateOfBirth')}>Date of Birth</th>
					<th>Street</th>
					<th>City</th>
					<th>State</th>
					<th>Zip Code</th>
				</tr>
				{data.map((item) =>
					<tr key={data.indexOf(item)}>
						<td>{item.firstName}</td>
						<td>{item.lastName}</td>
						<td>{item.startDate}</td>
						<td>{item.department}</td>
						<td>{item.dateOfBirth}</td>
						<td>{item.street}</td>
						<td>{item.city}</td>
						<td>{item.state}</td>
						<td>{item.zipCode}</td>
					</tr>)}
				</tbody>
			</table>
		</div>
	);
}

export default Table;