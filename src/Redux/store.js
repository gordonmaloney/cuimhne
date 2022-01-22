import { configureStore } from '@reduxjs/toolkit';
import levelReducer from './levelSlice';

export default configureStore({
	reducer: {
		levels: levelReducer,
	},
});