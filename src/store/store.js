import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import employeeReducer from '../features/employee/employeeSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		employees: employeeReducer,
	},
})


// const initialState = {
// 	employees: JSON.parse(localStorage.getItem('employees')) || [],
// 	states: statesName,
// 	department: department
// };
//
// const counterReducer = (state = initialState, action) => {
// 	if (action.type === "saveEmployee") {
// 		return {
// 			...state,
// 			...state.employees.push(action.employee)
// 		};
// 	}
//
// 	return state;
// };

// export const store = createStore(counterReducer);
