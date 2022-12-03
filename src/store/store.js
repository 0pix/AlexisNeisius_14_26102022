import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import employeeReducer from './employee/employeeSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		employees: employeeReducer,
	},
})


