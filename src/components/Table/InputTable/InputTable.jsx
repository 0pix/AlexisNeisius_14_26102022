import React from 'react';

const InputTable = () => {
	return (
		<div>
			<input onChange={(e) => searchEmployee(e)} type="search"/>
		</div>
	);
};

export default InputTable;
