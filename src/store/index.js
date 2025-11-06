import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './slices/dashboardSlice';

export const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
    },
});

store.subscribe(() => {
    try {
        localStorage.setItem('dashboardState', JSON.stringify(store.getState().dashboard));
    } catch (error) {
        console.log(error);
    }
});
