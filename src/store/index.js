import {createStore} from "redux";

const initialState = {
	employees: JSON.parse(localStorage.getItem('employees')) || [],
	// error: "",
	// token: "",
	// data: "",
	// buttonEdit: false,
};

const counterReducer = (state = initialState, action) => {
	if (action.type === "saveEmployee") {
		return {
			...state,
			...state.employees.push(action.employee)
		};
	}

	// if (action.type === "getUserData") {
	// 	return {
	// 		...state,
	// 		data: action.data
	// 	};
	// }
	// if (action.type === "getError") {
	// 	return {
	// 		...state,
	// 		error: action.error,
	// 	};
	// }
	// if (action.type === "getToken") {
	// 	return {
	// 		...state,
	// 		error: action.error,
	// 		token: action.token
	// 	};
	// }
	// if (action.type === "editName") {
	// 	return {
	// 		...state,
	// 		buttonEdit: !state.buttonEdit
	// 	};
	// }
	// if (action.type === "signOut") {
	// 	return {
	// 		...state,
	// 		token: "",
	// 		data: ""
	// 	};
	// }
	return state;
};

export const store = createStore(counterReducer);
